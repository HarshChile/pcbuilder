import React from 'react'
import { Link } from 'react-router-dom'

function Readme() {
    return (
        <>
            <div className='bg-black text-white lg w-full h-screen'>
                <nav className="text-white px-6 py-3 text-xl pt-8">
                        <Link to="/" className="hover:text-green-300">Back to Home</Link>
                      </nav>
                <div className='text-white text-4xl flex justify-center items-center flex-row pt-5'>Read More</div>
                <div className='text-white text-2xl flex justify-center items-center flex-row m-24 '>
                    Our journey started with a simple goal: 
                    to remove the confusion and frustration from PC building. Too many users struggle with incompatible parts, overpriced components, or unclear advice. We wanted to change that.

                    Our platform carefully analyzes component compatibility, performance benchmarks, and real-world use cases to recommend builds you can trust. From gaming rigs and workstations to budget-friendly setups, every configuration is designed with performance, reliability, and upgrade potential in mind.

                    We continuously update our database with the latest hardware and industry standards, ensuring you always get accurate and up-to-date recommendations. Our mission is to empower users with the knowledge and tools needed to build confidently.
                </div>
            </div>
        </>
    )
}

export default Readme