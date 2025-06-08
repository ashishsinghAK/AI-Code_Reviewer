// Review.jsx
import React from 'react'
import Markdown from "react-markdown"

const Review = ({ data, loading }) => {
  return (
    <div className="h-[60vh] overflow-auto p-6">
      {loading ? (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-yellow-500 rounded-full animate-ping"></div>
            </div>
          </div>
          <p className="text-gray-400">Analyzing your code...</p>
        </div>
      ) : data ? (
        <div className="prose prose-invert max-w-none">
          <Markdown>{data}</Markdown>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="text-xl font-medium mb-2">No Review Yet</h3>
          <p className="text-center max-w-md">Submit your code to get an AI-powered review with suggestions for improvements, bug detection, and optimization tips.</p>
        </div>
      )}
    </div>
  )
}

export default Review;