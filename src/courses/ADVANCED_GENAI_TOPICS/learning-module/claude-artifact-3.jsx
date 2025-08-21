import React, { useState } from 'react';
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Heading, Subheading } from '@/components/ui/heading';
import { Code, Text } from '@/components/ui/text';
import { Tile } from '@/components/ui/tile';

const knowledgeBase = [
    { id: 1, content: "Assets are resources owned by a company that have economic value and can be converted to cash.", embedding: [0.9, 0.1, 0.3] },
    { id: 2, content: "Liabilities are financial obligations or debts owed by a company to external parties.", embedding: [0.2, 0.9, 0.4] },
    { id: 3, content: "Revenue is the income generated from normal business operations, typically from the sale of goods and services to customers.", embedding: [0.3, 0.4, 0.9] },
    { id: 4, content: "The accounting equation states that Assets = Liabilities + Owner's Equity, forming the basis of a balance sheet.", embedding: [0.8, 0.7, 0.2] },
    { id: 5, content: "Types of assets include current assets like cash and inventory, and long-term assets like equipment and buildings.", embedding: [0.85, 0.15, 0.25] },
    { id: 6, content: "Liabilities can be current (short-term) like accounts payable, or long-term like mortgages and bonds.", embedding: [0.25, 0.85, 0.35] },
    { id: 7, content: "Revenue is recorded when earned, not necessarily when cash is received, following the accrual accounting principle.", embedding: [0.35, 0.45, 0.85] },
];

const predefinedQueries = [
    { value: "what-are-assets", label: "What are assets?", embedding: [0.95, 0.15, 0.25] },
    { value: "explain-liabilities", label: "Explain liabilities", embedding: [0.2, 0.95, 0.35] },
    { value: "define-revenue", label: "Define revenue", embedding: [0.25, 0.35, 0.95] },
    { value: "accounting-equation", label: "What's the accounting equation?", embedding: [0.85, 0.75, 0.15] },
];

const RAGDemo = () => {
    const [selectedQuery, setSelectedQuery] = useState('');
    const [queryEmbedding, setQueryEmbedding] = useState([]);
    const [showEmbedding, setShowEmbedding] = useState(false);
    const [retrievedInfo, setRetrievedInfo] = useState([]);
    const [rankedInfo, setRankedInfo] = useState([]);
    const [generatedResponse, setGeneratedResponse] = useState('');
    const [currentStep, setCurrentStep] = useState(0);

    const handleQueryChange = (value) => {
        setSelectedQuery(value);
        const query = predefinedQueries.find(q => q.value === value);
        setQueryEmbedding(query.embedding);
        setShowEmbedding(false);
        setCurrentStep(1);
    };

    const simulateEmbedding = () => {
        setShowEmbedding(true);
        setCurrentStep(2);
    };

    const simulateRetrieval = () => {
        const relevantInfo = knowledgeBase.map(item => ({
            ...item,
            similarity: cosineSimilarity(queryEmbedding, item.embedding)
        }));
        setRetrievedInfo(relevantInfo);
        setCurrentStep(3);
    };

    const simulateRanking = () => {
        const ranked = [...retrievedInfo].sort((a, b) => b.similarity - a.similarity).slice(0, 3);
        setRankedInfo(ranked);
        setCurrentStep(4);
    };

    const simulateGeneration = () => {
        if (rankedInfo.length === 0) {
            setGeneratedResponse("I don't have enough information to answer that query.");
        } else {
            const query = predefinedQueries.find(q => q.value === selectedQuery).label;
            let response = "";

            switch (selectedQuery) {
                case "what-are-assets":
                    response = "Assets are resources owned by a company that have economic value. They are important because they can be converted to cash or used in the company's operations. Assets can be categorized into current assets, which are short-term and easily convertible to cash, such as cash itself and inventory, and long-term assets, which include equipment and buildings used in the company's operations over an extended period.";
                    break;
                case "explain-liabilities":
                    response = "Liabilities are financial obligations or debts that a company owes to external parties. They represent the company's financial responsibilities and can be classified into two main categories: current liabilities and long-term liabilities. Current liabilities are short-term obligations that are typically due within a year, such as accounts payable. Long-term liabilities, on the other hand, are debts or obligations that are due over a longer period, such as mortgages or bonds issued by the company.";
                    break;
                case "define-revenue":
                    response = "Revenue is the income generated from a company's normal business operations, typically from the sale of goods and services to customers. It's a key component of a company's financial performance. In accounting, revenue is recognized when it is earned, which doesn't necessarily coincide with when cash is received. This timing difference is addressed by the accrual accounting principle, which ensures that revenue is recorded in the period it is earned, providing a more accurate picture of a company's financial performance.";
                    break;
                case "accounting-equation":
                    response = "The accounting equation is a fundamental principle in accounting that states: Assets = Liabilities + Owner's Equity. This equation forms the basis of a company's balance sheet, one of the core financial statements. It represents the relationship between what a company owns (assets), what it owes (liabilities), and the residual interest of the owners (equity). This equation must always be in balance, reflecting the double-entry bookkeeping system used in accounting.";
                    break;
                default:
                    response = "I'm afraid I don't have enough specific information to answer that query accurately.";
            }

            setGeneratedResponse(response);
        }
        setCurrentStep(5);
    };

    const cosineSimilarity = (A, B) => {
        const dotProduct = A.reduce((acc, val, i) => acc + val * B[i], 0);
        const magnitudeA = Math.sqrt(A.reduce((acc, val) => acc + val * val, 0));
        const magnitudeB = Math.sqrt(B.reduce((acc, val) => acc + val * val, 0));
        return dotProduct / (magnitudeA * magnitudeB);
    };

    const resetDemo = () => {
        setSelectedQuery('');
        setQueryEmbedding([]);
        setShowEmbedding(false);
        setRetrievedInfo([]);
        setRankedInfo([]);
        setGeneratedResponse('');
        setCurrentStep(0);
    };

    return (
        <div className='flex flex-col items-center'>
            <Tile className="mb-4">
                <Subheading>
                    Step 1: Query Selection
                </Subheading>
                <Text className="mb-2">Select a predefined accounting query to start the RAG process. This simulates a user input in a real RAG system.</Text>
                <Select onChange={(e) => handleQueryChange(e.target.value)} value={selectedQuery}>
                    <option value="" disabled>
                        Select a query
                    </option>
                    {predefinedQueries.map(query => (
                        <option key={query.value} value={query.value}>
                            {query.label}
                        </option>
                    ))}
                </Select>
            </Tile>

            {currentStep >= 1 && (
                <Tile className="mb-4">
                    <Subheading>Step 2: Query Embedding</Subheading>
                    <Text className="mb-2">Click the button to generate a vector representation (embedding) of the selected accounting query. This allows the system to compare the query with the knowledge base mathematically.</Text>
                    <Button onClick={simulateEmbedding} disabled={currentStep !== 1}>Generate Embedding</Button>
                    {showEmbedding && (
                        <Text className="mt-2">Query Embedding: [{queryEmbedding.join(', ')}]</Text>
                    )}
                </Tile>
            )}

            {currentStep >= 2 && (
                <Tile className="mb-4">
                    <Text className="mb-2">The system searches the accounting knowledge base for relevant information by comparing the query embedding with the embeddings of each item in the knowledge base.</Text>
                    <Button onClick={simulateRetrieval} disabled={currentStep !== 2}>Retrieve Information</Button>
                    {retrievedInfo.length > 0 && (
                        <ul className="list-disc pl-5 mt-2">
                            {retrievedInfo.map(item => (
                                <li key={item.id}>{item.content} (Match: {(item.similarity * 100).toFixed(1)}%)</li>
                            ))}
                        </ul>
                    )}
                </Tile>
            )}

            {currentStep >= 3 && (
                <Tile className="mb-4">
                    <Subheading>Step 4: Ranking and Selection</Subheading>
                    <Text className="mb-2">The retrieved accounting information is ranked based on relevance (similarity score), and the top results are selected for use in generating the response.</Text>
                    <Button onClick={simulateRanking} disabled={currentStep !== 3}>Rank Information</Button>
                    {rankedInfo.length > 0 && (
                        <ul className="list-disc pl-5 mt-2">
                            {rankedInfo.map(item => (
                                <li key={item.id}>{item.content} (Match: {(item.similarity * 100).toFixed(1)}%)</li>
                            ))}
                        </ul>
                    )}
                </Tile>
            )}

            {currentStep >= 4 && (
                <Tile className="mb-4">
                    <Subheading>Step 5: Response Generation</Subheading>
                    <Text className="mb-2">The AI model generates a response based on the retrieved accounting information. It uses the ranked information as context to craft an informative, natural-language response that addresses the query.</Text>
                    <Text className="mb-2">While the response is grounded in the retrieved facts, the AI synthesizes this information and may add relevant context or explanations to provide a comprehensive answer.</Text>
                    <Button onClick={simulateGeneration} disabled={currentStep !== 4}>Generate Response</Button>
                    {generatedResponse && (
                        <div>
                            <Code>
                                {generatedResponse}
                            </Code>
                        </div>
                    )}
                </Tile>
            )}

            {currentStep === 5 && (
                <Button onClick={resetDemo}>Reset Demo</Button>
            )}
        </div>
    );
};

export default RAGDemo;