import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex justify-center items-center flex-col md:flex-row'>
            
            <div className='flex flex-col gap-[5em] p-10'>
                <p className='text-6xl font-bold'>Supercharge Your Code Reviews with AI</p>
                <div>
                    <p className='text-2xl text-gray-300'>Let AI handle tedious code reviews — get instant feedback, catch bugs, and improve code quality before it reaches production.</p>
                    <p className='text-xl text-gray-300'>Streamline your development with AI-powered code reviews. Instantly detect bugs, get optimization tips, and write cleaner code—faster. 
                        Perfect for developers who value quality, speed, and intelligent automation</p>
                </div>
            </div>
            <img src="https://cdn.mos.cms.futurecdn.net/LrstCAnun6N69BxwmEtn4k.jpg" alt="" className='lg:w-[50vw] w-full m-2 lg:rounded-[1em]'/>
        </div>
    )
}

export default HeroSection