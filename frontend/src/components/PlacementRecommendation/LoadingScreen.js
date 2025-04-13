import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-blue-300 border-b-transparent rounded-full animate-spin-reverse"></div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Crafting Your Perfect Plan</h3>
        <p className="text-gray-600 mb-4">Analyzing your academic profile and preferences...</p>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className="bg-blue-600 h-1.5 rounded-full animate-pulse" 
            style={{ width: '70%' }}
          ></div>
        </div>
        <p className="text-gray-500 text-sm mt-4">This may take a few moments</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;