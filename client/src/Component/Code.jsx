import React, { useEffect, useState } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from 'prismjs';
import axios from 'axios';
import Review from "./Review";

const Code = () => {
  const [code, setCode] = useState('');
  const [reviewData, setReviewData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const sendReview = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/ai/get-response", { code });
      setReviewData(res.data.msg);
    } catch (err) {
      console.error('Failed to fetch Review', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:min-w-screen sm:w-screen'>

      {/* Code Editor Box */}
      <div className='relative m-5 w-[90vw] lg:w-[48vw] h-[50vh] lg:h-[95vh] bg-gray-900 rounded-lg flex flex-col overflow-x-hidden'>

        {/* Header */}
        <div className='h-10 bg-yellow-400 text-black px-4 flex items-center font-medium rounded-t-lg'>
          Paste Your Code here...
        </div>

        {/* Code Area */}
        <div className='flex-1 px-2 '>
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code =>
              prism.highlight(code, prism.languages.javascript, 'javascript')
            }
            padding={10}
            style={{
              fontFamily: 'monospace',
              fontSize: 16,
              width: '100%',
              outline: 'none',
              whiteSpace: 'pre',
              minHeight: '100%'
            }}
          />
        </div>

        {/* Review Button */}
        <button
          onClick={sendReview}
          className='h-12 bg-blue-700 hover:bg-blue-800 text-white w-full rounded-b-lg font-semibold transition cursor-pointer'
        >
          {loading ? 'Reviewing...' : 'Review'}
        </button>
      </div>

      {/* Review Component */}
      <div className='w-[90vw] lg:w-[48vw] h-[50vh] lg:h-[95vh]'>
        <Review data={reviewData} loading={loading} />
      </div>
    </div>
  );
};

export default Code;
