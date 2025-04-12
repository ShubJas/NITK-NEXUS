import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Generating Your Personalized Plan</h3>
        <p className="text-gray-600">Analyzing your quiz results and academic profile...</p>
        <p className="text-gray-500 text-sm mt-4">This may take a few moments</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;