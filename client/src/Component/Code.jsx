import React, { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from 'prismjs'
import axios from 'axios'
import Review from "./Review"


const Code = () => {
  const [code, setCode] = useState('');
  const [reviewData, setReviewData] = useState('');
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    prism.highlightAll()
  }, [])
  const sendReview = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/ai/get-response", { code })
      // console.log(res.data)
      setReviewData(res.msg);
      setLoading(false);
    } catch (err) {
      console.log('Failed to fetch Review', err);
    }
  }
  return (
    <>
      <div className='border-2 h-[50vh] w-[90vw] m-5 sm:h-[95vh] sm:w-[50vw] bg-gray-950 '>

        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
          padding={10}
          style={{
            fontFamily: "sans-serif",
            fontSize: 16,
            borderRadius: "5px",
            height: "92%",
            width: "100%"
          }}
        />

        <button onClick={sendReview} className='text-white
      border-2 rounded-lg p-2 m-2 cursor-pointer'>Review</button>


      </div>

      {reviewData && <Review data={reviewData} loading={loading}/>}
    </>

  )
}

export default Code