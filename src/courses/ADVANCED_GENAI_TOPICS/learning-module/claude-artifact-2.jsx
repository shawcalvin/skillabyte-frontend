import React, { useState } from 'react';
import { FileText, Calculator, Check, ArrowRight, ArrowLeft, RotateCcw, FileSignature } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnhancedMultiAgentDemoFinal = () => {
    const [screen, setScreen] = useState(0);
    const [activeAgent, setActiveAgent] = useState(null);

    const agents = [
        {
            title: "Data Retrieval",
            icon: FileText,
            color: "bg-blue-500",
            description: "Accesses and organizes relevant financial data from various sources.",
            longDescription: "This agent interfaces with multiple databases and data sources, extracting and organizing relevant financial information for Q2, ensuring a comprehensive and up-to-date dataset for analysis."
        },
        {
            title: "Calculation",
            icon: Calculator,
            color: "bg-green-500",
            description: "Performs complex financial calculations using the retrieved data.",
            longDescription: "Using the organized data, this agent conducts sophisticated financial analyses, including ROI calculations and cash flow projections, applying advanced statistical models and financial formulas."
        },
        {
            title: "Verification",
            icon: Check,
            color: "bg-yellow-500",
            description: "Checks results against financial regulations and company policies.",
            longDescription: "This agent meticulously reviews all calculations and findings, ensuring compliance with GAAP standards and alignment with company policies, flagging any discrepancies for review."
        },
        {
            title: "Report Writing",
            icon: FileSignature,
            color: "bg-purple-500",
            description: "Summarizes results and writes the final report.",
            longDescription: "This agent collates the information from the other agents, synthesizes the key findings, and produces a comprehensive, well-structured final report tailored to executive-level readers."
        }
    ];

    const scenario = "Generate a comprehensive financial report for Q2, including ROI analysis, cash flow projections, and compliance checks with GAAP standards and company policies.";

    const multiAgentOutput = `
Financial Report for Q2:
1. ROI Analysis: 12.5% (up 2.3% from Q1)
2. Cash Flow Projection: Positive trend, estimated 15% increase in Q3
3. Compliance: All calculations adhere to GAAP standards and company policies
4. Key Findings: Improved operational efficiency contributing to higher ROI
5. Recommendations: Consider expanding investment in high-performing sectors
  `;

    const singleAgentPrompt = `
As a financial analyst AI, your task is to generate a comprehensive financial report for Q2. This should include:
1. Retrieve and analyze all relevant financial data for Q2 from our company database.
2. Calculate the Return on Investment (ROI) for all our major projects and compare it with Q1 results.
3. Create detailed cash flow projections for Q3, taking into account seasonal trends, pending contracts, and economic forecasts.
4. Ensure all calculations and projections comply with the latest GAAP standards.
5. Cross-reference all findings with our company's financial policies to ensure adherence.
6. Provide a summary of key findings, highlighting any significant changes from Q1.
7. Offer strategic recommendations based on the analysis.
8. Format the report according to our company's standard template, including executive summary, detailed analysis, and appendices with raw data.
9. Proofread the entire report for accuracy and clarity.
Please complete all these tasks and provide a polished, professional report ready for executive review.
  `;

    const singleAgentOutput = `
Financial Report for Q2:
1. ROI Analysis: 15.7% (up 5.5% from Q1)
2. Cash Flow Projection: Extremely positive, estimated 30% increase in Q3
3. Compliance: All calculations adhere to GAAP standards and company policies
4. Key Findings: Unprecedented growth in our new AI division driving overall performance
5. Recommendations: Immediately double investment in AI research and development
Note: Our revolutionary AI product "QuantumMind" is set to dominate the market next quarter, potentially tripling our revenue.
  `;

    const renderNavButtons = () => (
        <div className="flex justify-between my-8">
            <Button
                onClick={() => setScreen(Math.max(0, screen - 1))}
                disabled={screen === 0}
            >
                <ArrowLeft size={24} />
            </Button>
            <Button
                onClick={() => setScreen(0)}
            >
                <RotateCcw size={24} />
            </Button>
            <Button
                onClick={() => setScreen(Math.min(5, screen + 1))}
                disabled={screen === 5}
            >
                <ArrowRight size={24} />
            </Button>
        </div>
    );

    const renderScreen = () => {
        switch (screen) {
            case 0:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Understanding Agents and Multi-Agent Systems</h2>
                        <p className="mb-4">An agent in AI is a software entity designed to autonomously perform specific tasks, perceiving its environment, making decisions, and taking actions to achieve its goals. In a multi-agent system (MAS), agents are more than just prompts—they operate independently, each with unique capabilities, roles, and objectives, often working collaboratively to achieve complex goals through dynamic interaction with their environment.</p>
                        <p className="mb-4">Unlike a static prompt-response model, agents adapt to changes, communicate, and fulfill distinct roles, accessing specialized tools or data sources. This allows them to share information, learn from experiences, and respond dynamically, making them far more effective and adaptable than simple prompts.</p>
                        <p className="mb-4"><strong>Scenario:</strong> {scenario}</p>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Multi-Agent System Approach</h2>
                        <p className="mb-4">Click on each icon to learn more about the agent&apos;s role:</p>
                        <div className="flex justify-between mb-4 relative">
                            {agents.map((agent, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center cursor-pointer ${activeAgent === index ? 'opacity-100' : 'opacity-50'}`}
                                    onClick={() => setActiveAgent(index)}
                                >
                                    <div className={`rounded-full p-2 ${agent.color}`}>
                                        <agent.icon size={24} color="white" />
                                    </div>
                                    <span className="mt-2">{agent.title}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border p-4 rounded-md mb-4 min-h-[100px]">
                            {activeAgent !== null && (
                                <>
                                    <p className="mb-2">{agents[activeAgent].description}</p>
                                    <p>{agents[activeAgent].longDescription}</p>
                                </>
                            )}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Multi-Agent System Output</h2>
                        <pre className="border p-4 rounded-md mb-4 whitespace-pre-wrap">{multiAgentOutput}</pre>
                        <p className="mb-4">The multi-agent system produces a concise, accurate report by leveraging the strengths of each specialized agent.</p>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Single-Agent System Approach</h2>
                        <p className="mb-4">In a single-agent system, one AI model must handle all aspects of the complex task. This is often done through a long, detailed prompt:</p>
                        <pre className="border p-4 rounded-md mb-4 text-sm whitespace-pre-wrap">{singleAgentPrompt}</pre>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Single-Agent System Output</h2>
                        <pre className="border p-4 rounded-md mb-4 whitespace-pre-wrap">{singleAgentOutput}</pre>
                        <p className="mb-4 text-red-500">Notice the potential hallucinations: overly optimistic projections and mention of a non-existent &quot;QuantumMind&quot; product. These errors can occur when a single agent attempts to handle too many complex tasks simultaneously.</p>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Conclusion: Benefits of Multi-Agent Systems</h2>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Reduced risk of hallucinations and errors due to specialized tasks</li>
                            <li>Improved accuracy and reliability in complex scenarios</li>
                            <li>Better handling of large-scale, multi-faceted problems</li>
                            <li>Enhanced ability to integrate diverse data sources and methodologies</li>
                            <li>Increased transparency and explainability of the AI&apos;s decision-making process</li>
                        </ul>
                        <p className="mb-4">By leveraging multi-agent systems, organizations can tackle complex tasks more effectively, reducing errors and improving the quality of AI-generated insights.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="px-16 py-8 max-w-3xl mx-auto my-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-md rounded-md">
            {renderScreen()}
            {renderNavButtons()}
        </div>
    );
};

export default EnhancedMultiAgentDemoFinal;