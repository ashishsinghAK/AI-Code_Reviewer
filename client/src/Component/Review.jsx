import React from 'react'
import spinner from "../Common/spinner"
import Markdown from "react-markdown"

const Review = ({ data,loading }) => {
  return (
    <div className='border-2 h-[100vh] w-[90vw] m-5 sm:h-[95vh] sm:w-[50vw] bg-gray-700 text-white p-4 overflow-auto'>
      {
        loading ? <><spinner/></> : <>
        <pre>{typeof data === 'string' ? <Markdown>data</Markdown> : JSON.stringify(data, null, 2)}</pre>
        </>
      }
    </div>

  )
}

export default Review