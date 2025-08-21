import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const sentences = [
    "The quick brown fox jumps over the lazy",
    "To be or not to be, that is the",
    "In a galaxy far, far",
    "Life is like a box of",
    "All you need is"
];

const possibleWords = [
    ["dog", "cat", "rabbit", "fence", "log"],
    ["question", "answer", "problem", "solution", "dilemma"],
    ["away", "beyond", "removed", "distant", "off"],
    ["chocolates", "surprises", "mysteries", "challenges", "adventures"],
    ["love", "hope", "faith", "courage", "patience"]
];

const GenAIDemo = () => {
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const [temperature, setTemperature] = useState(0.5);
    const [wordProbabilities, setWordProbabilities] = useState([]);
    const [selectedWord, setSelectedWord] = useState('');
    const [baseProbs, setBaseProbs] = useState([]);

    useEffect(() => {
        if (sentenceIndex !== null) {
            const newBaseProbs = possibleWords[sentenceIndex].map(() => Math.random());
            setBaseProbs(newBaseProbs);
        }
    }, [sentenceIndex]);

    useEffect(() => {
        updateProbabilities();
    }, [baseProbs, temperature]);

    const updateProbabilities = () => {
        if (baseProbs.length === 0) return;

        let adjustedProbs;
        if (temperature === 0) {
            // When temperature is 0, set probability of the highest base probability word to 1, others to 0
            const maxProbIndex = baseProbs.indexOf(Math.max(...baseProbs));
            adjustedProbs = baseProbs.map((_, index) => index === maxProbIndex ? 1 : 0);
        } else {
            const totalBaseProb = baseProbs.reduce((a, b) => a + b, 0);
            adjustedProbs = baseProbs.map(prob => Math.pow(prob / totalBaseProb, 1 / temperature));
            const totalAdjustedProb = adjustedProbs.reduce((a, b) => a + b, 0);
            adjustedProbs = adjustedProbs.map(prob => prob / totalAdjustedProb);
        }

        setWordProbabilities(
            possibleWords[sentenceIndex]
                .map((word, index) => ({
                    word,
                    probability: adjustedProbs[index]
                }))
                .sort((a, b) => b.probability - a.probability)
        );
    };

    const selectWord = () => {
        const randomValue = Math.random();
        let cumulativeProbability = 0;

        for (const wordProb of wordProbabilities) {
            cumulativeProbability += wordProb.probability;
            if (randomValue <= cumulativeProbability) {
                setSelectedWord(wordProb.word);
                break;
            }
        }
    };

    const newSentence = () => {
        setSelectedWord('');
        setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">GenAI Demo: Next Word Prediction</h1>

            <div className="mb-4">
                <p className="text-lg">
                    {sentences[sentenceIndex]} <span className="font-bold">{selectedWord}</span>
                </p>
            </div>

            <div className="mb-4">
                <label className="block mb-2">Temperature: {temperature.toFixed(1)}</label>
                <Slider
                    value={[temperature]}
                    onChange={(value) => setTemperature(value[0])}
                    max={1}
                    step={0.1}
                    className="w-full"
                />
            </div>

            <div className="mb-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={wordProbabilities}>
                        <XAxis dataKey="word" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="probability" fill="#808080" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="flex space-x-4 mb-6">
                <Button onClick={selectWord}>
                    Select Word
                </Button>
                <Button onClick={newSentence}>
                    New Sentence
                </Button>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">How It Works</h2>
                <p>
                    This demo simulates how a Generative AI model might predict the next word in a sentence.
                    The temperature slider controls the randomness of the word probabilities:
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li>Temperature of 0: The model becomes completely deterministic, always choosing the word with the highest initial probability.</li>
                    <li>Low temperature (closer to 0): The probabilities become more deterministic, strongly favoring initially high-probability words.</li>
                    <li>High temperature (closer to 1): The probabilities become more uniform, giving initially lower-probability words a better chance.</li>
                </ul>
                <p className="mt-2">
                    The bar chart shows the probability of each possible word, updated in real-time as you adjust the temperature.
                    When you click &quot;Select Word&quot;, the app chooses a word based on these probabilities, simulating the AI&apos;s decision process.
                </p>
                <p className="mt-2">
                    <strong>Note:</strong> This demo is a simplified representation. In a real AI model, there would be many more possible words
                    (potentially thousands or even millions) for each prediction. We&apos;ve limited it to five words here for clarity and ease of visualization.
                    Also, in practice, the initial probabilities would be based on the model&apos;s training rather than random assignment.
                </p>
            </div>
        </div>
    );
};

export default GenAIDemo;