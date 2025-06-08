// Code.jsx
import React, { useEffect, useState } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from 'prismjs';
import axios from 'axios';
import Review from "./Review";

const Code = () => {
  const [code, setCode] = useState('// Paste your code here...\n');
  const [reviewData, setReviewData] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('javascript');

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const sendReview = async () => {
    try {
      if (!code.trim()) return;
      setLoading(true);
      const res = await axios.post("https://ai-code-reviewer-dh0p.onrender.com/ai/get-response", { code });
      setReviewData(res.data.msg);
    } catch (err) {
      console.error('Failed to fetch Review', err);
      setReviewData('Error: Could not get review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 my-12">
      {/* Code Editor Section */}
      <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between bg-gray-900 px-4 py-3 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
        </div>
        
        <div className="h-[60vh] overflow-auto">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code =>
              prism.highlight(code, prism.languages[language], language)
            }
            padding={16}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 14,
              backgroundColor: 'transparent',
              color: '#e2e8f0',
              lineHeight: '1.5',
              minHeight: '100%'
            }}
            textareaClassName="focus:outline-none"
          />
        </div>
        
        <div className="bg-gray-900 px-4 py-3 border-t border-gray-700">
          <button
            onClick={sendReview}
            disabled={loading}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
              loading 
                ? 'bg-gray-700 cursor-not-allowed' 
                : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-lg'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing Code...
              </span>
            ) : (
              'Review Code with AI'
            )}
          </button>
        </div>
      </div>

      {/* Review Section */}
      <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
        <div className="flex items-center bg-gray-900 px-4 py-3 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <h2 className="text-lg font-semibold text-gray-200">AI Code Review</h2>
          </div>
          <span className="ml-auto px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-md">
            Powered by Gemini-2.0-flash
          </span>
        </div>
        
        <Review data={reviewData} loading={loading} />
      </div>
    </div>
  );
};

export default Code;