import React from 'react'
import Spinner from "../Common/Spinner"
import Markdown from "react-markdown"

const Review = ({ data, loading }) => {
  return (
    <div className=' rounded-lg bg-gray-800 text-white p-4 h-[50vh] lg:h-[95vh] overflow-auto'>
      {
        loading ? (
          <div className="h-full w-full flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <pre className='whitespace-pre-wrap overflow-x-hidden'>
            {typeof data === 'string' ? <Markdown>{data}</Markdown> : JSON.stringify(data, null, 2)}
          </pre>
        )
      }
    </div>
  )
}

export default Review;
