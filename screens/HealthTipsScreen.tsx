import React, { useState } from 'react';
import { getHealthTip } from '../services/geminiService';
import { LoadingSpinner, SendIcon, SparklesIcon } from '../components/Icons';

const HealthTipsScreen: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [tip, setTip] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateTip = async () => {
        if (!topic.trim() || isLoading) return;

        setIsLoading(true);
        setError(null);
        setTip(null);

        try {
            const generatedTip = await getHealthTip(topic);
            setTip(generatedTip);
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    // Simple markdown to HTML conversion
    const renderMarkdown = (text: string) => {
        const html = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
            .replace(/\*(.*?)\*/g, '<em>$1</em>')       // Italic
            .replace(/\n/g, '<br />');                  // Newlines
        return { __html: html };
    };


    return (
        <div className="p-4 flex flex-col h-full">
            <div className="text-center mb-6">
                 <div className="inline-block bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full mb-2">
                    <SparklesIcon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">AI Health Tips</h2>
                <p className="text-gray-500 dark:text-gray-400">Get an instant, AI-powered health tip.</p>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center p-4">
                {isLoading ? (
                    <div className="flex flex-col items-center text-primary">
                        <LoadingSpinner className="w-12 h-12" />
                        <p className="mt-2">Generating your tip...</p>
                    </div>
                ) : tip ? (
                    <div className="prose dark:prose-invert bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/50 dark:to-gray-800 p-6 rounded-lg w-full max-w-sm shadow-xl animate-fade-in">
                       <div dangerouslySetInnerHTML={renderMarkdown(tip)} />
                    </div>
                ) : (
                    <div className="text-center text-gray-400">
                        <p>e.g., "better sleep", "healthy diet", "stress relief"</p>
                    </div>
                )}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>

            <div className="mt-auto p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleGenerateTip()}
                        placeholder="Ask for a health tip..."
                        className="flex-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleGenerateTip}
                        disabled={isLoading || !topic.trim()}
                        className="bg-primary text-white p-3 rounded-full disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-primary/40"
                    >
                        <SendIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HealthTipsScreen;