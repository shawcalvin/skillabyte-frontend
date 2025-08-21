import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';

const steps = [
    {
        title: "1. Data Collection",
        description: "The first step is gathering a large and diverse set of examples. For a text generator, this could be books and articles. For an image generator, it might be millions of pictures. The quality and variety of this data are crucial because they determine what the AI can learn and create.",
        visual: null
    },
    {
        title: "2. Data Preparation",
        description: "Next, we clean up and organize the data. This might involve fixing errors, making sure everything is in the same format, and converting the data into a form the AI can understand. For text, we might break it into words or letter combinations. For images, we might adjust their size and brightness.",
        visual: () => (
            <div className="flex items-center space-x-2">
                <div className="bg-gray-200 p-2 rounded">🔣</div>
                <ChevronRight />
                <div className="bg-blue-200 p-2 rounded">🔢</div>
            </div>
        )
    },
    {
        title: "3. Model Design",
        description: "We then decide on the structure of our AI. This is like choosing the brain size and how it's wired. We determine how many 'thinking units' (called neurons) to use and how they should connect. Bigger models can potentially learn more complex things but also need more computer power to run.",
        visual: () => (
            <div className="flex flex-col items-center space-y-2">
                <div className="flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-green-200 rounded-full"></div>
                    ))}
                </div>
                <div className="flex space-x-2">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-200 rounded-full"></div>
                    ))}
                </div>
                <div className="flex space-x-2">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-red-200 rounded-full"></div>
                    ))}
                </div>
            </div>
        )
    },
    {
        title: "4. Training",
        description: "During training, we show the AI our prepared data. It tries to understand patterns in this data by adjusting its internal settings (imagine tuning knobs). It keeps practicing and improving, learning to recognize important features and relationships in the data. This process can take days or weeks for large AIs. The grid of numbers below represents a small part of the AI's 'brain' during training. Each number is like a setting that the AI adjusts as it learns.",
        visual: () => (
            <div className="grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-yellow-200 flex items-center justify-center text-xs">
                        {Math.random().toFixed(1)}
                    </div>
                ))}
            </div>
        )
    },
    {
        title: "5. Fine-tuning",
        description: "After the main training, we often do some extra practice on specific tasks. This helps the AI get better at particular things we want it to do. It's like giving a student some extra practice in their weakest subjects. This step can also help fix any mistakes or biases the AI might have picked up during its initial training.",
        visual: () => (
            <div className="grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-green-200 flex items-center justify-center text-xs">
                        {(Math.random() * 2 - 1).toFixed(2)}
                    </div>
                ))}
            </div>
        )
    },
    {
        title: "6. Final Model",
        description: "The result of all this training is our final AI model. At its core, it's a large collection of numbers. These numbers represent everything the AI has learned - its 'knowledge'. There can be millions or even billions of these numbers. How these numbers are set determines how the AI will respond when we use it.",
        visual: () => (
            <div className="grid grid-cols-6 gap-1">
                {[...Array(36)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-purple-200 flex items-center justify-center text-xs">
                        {(Math.random() * 2 - 1).toFixed(1)}
                    </div>
                ))}
            </div>
        )
    },
    {
        title: "7. Using the Model",
        description: "To use the trained AI, we give it new information to work with. For a text AI, we might give it the start of a sentence. The AI then uses its 'knowledge' (those numbers we talked about) to figure out what should come next. It does this step by step, each time using what it has generated so far to decide what comes next. This process continues until it has created the amount of text we asked for.",
        visual: () => (
            <div className="flex flex-col items-center space-y-2 mt-16">
                <div className="bg-blue-200 p-2 rounded w-full text-center">Input</div>
                <ChevronRight className="transform rotate-90" />
                <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-6 h-6 bg-purple-200 flex items-center justify-center text-xs">
                            {(Math.random() * 2 - 1).toFixed(1)}
                        </div>
                    ))}
                </div>
                <ChevronRight className="transform rotate-90" />
                <div className="bg-green-200 p-2 rounded w-full text-center">Output</div>
            </div>
        )
    }
];

const GenAIModelCreationVisualizer = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="w-full max-w-2xl mx-auto text-gray-800">
            <div className='bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-md p-8'>
                <Heading>How a Generative AI Model is Created and Used</Heading>
                <Divider className='mt-2 mb-4' />
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{steps[currentStep].title}</h3>
                    <p className="text-sm pb-8">{steps[currentStep].description}</p>
                    {steps[currentStep].visual && (
                        <div className="flex justify-center items-center h-40 mt-8">
                            {steps[currentStep].visual()}
                        </div>
                    )}
                    <div className="flex justify-between mt-8 pb-8">
                        <Button onClick={handlePrev} disabled={currentStep === 0}>
                            <ChevronLeft className="mr-2 h-4 w-4" />
                        </Button>
                        <Button onClick={handleNext} disabled={currentStep === steps.length - 1}>
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenAIModelCreationVisualizer;