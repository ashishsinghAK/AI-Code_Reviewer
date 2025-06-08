import React from 'react';
import { motion } from 'framer-motion';
import "./component.css"

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
                {/* Text content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 mb-12 lg:mb-0 px-4"
                >
                    <div className="mb-2 flex items-center">
                        <span className="bg-blue-500/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full">
                            AI-Powered Code Reviews
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Supercharge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Code Reviews</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                        Let AI handle tedious code reviews — get instant feedback, catch bugs, and improve code quality before deployment.
                    </p>


                    {/* Testimonial/Quote */}
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 max-w-md">
                        <div className="flex items-center mb-3">
                            <div className="flex -space-x-2 mr-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                                <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                                <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
                            </div>

                        </div>
                        <p className="italic text-gray-200">"AI will not replace humans, but those who use AI will replace those who don't"</p>
                        <p className="text-sm text-gray-400 mt-2">— Ginni Rometty</p>
                    </div>
                </motion.div>

                {/* Image/Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 px-4"
                >
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                        <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://cdn.mos.cms.futurecdn.net/LrstCAnun6N69BxwmEtn4k.jpg"
                                alt="AI Code Review Illustration"
                                className="w-full h-auto object-cover"
                            />
                            {/* Code snippet overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <div className="font-mono text-sm">
                                    <div className="flex gap-2 mb-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <pre className="text-gray-100 overflow-x-auto">
                                        <code>
                                            {`// AI Review Result: High Confidence
function calculateTotal(items) {
  return items.reduce(
    (total, item) => total + item.price, 
    0  // ← Good practice: Initial value
  );
}`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;