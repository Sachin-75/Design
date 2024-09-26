import React from 'react';
import Graph from './Graph';
import { GiCheckMark } from "react-icons/gi";

const Review = () => {
    return (
        <div className="w-full min-h-screen bg-[#f5f5fc] flex flex-col justify-center items-center relative">
            <section className="w-full max-w-8xl px-4 md:px-12 lg:px-16 py-8 md:py-12 relative z-10">

                <div className="flex flex-col md:flex-row items-start relative z-10 space-y-8 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/2 relative flex flex-col items-start justify-start mt-6 md:mt-10 space-y-4 z-10 px-4 md:px-0">
                        <h2 className="text-lg md:text-xl font-semibold text-[#252b48]">
                            Review, export and publish copy
                        </h2>

                        <p className="text-[#606f87]">
                            Simply provide our AI writer with 1-2 sentences on what to write,
                            and it’ll understand and start writing for you.
                        </p>

                        <ul className="list-none space-y-3 text-[#606f87]">
                            <li className="flex items-center space-x-2">
                                <GiCheckMark className="bg-blue-200 text-[#4d5fb7] p-1 text-2xl rounded-full " />
                                <span>Include any SEO keywords you want to rank for</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <GiCheckMark className="bg-blue-200 text-[#4d5fb7] p-1 text-2xl rounded-full " />
                                <span>Customize your copy with tone and perspective options</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <GiCheckMark className="bg-blue-200 text-[#4d5fb7] p-1 text-2xl rounded-full " />
                                <span>Choose from 25+ languages</span>
                            </li>
                        </ul>
                    </div>

                  
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 relative p-2 md:p-4 lg:p-6 rounded-lg bg-gradient-to-r from-[#fdf1e8] to-[#bfc5f2]">
                        <div className="bg-white p-2 sm:p-4 md:p-6 min-h-[200px] md:min-h-[300px] overflow-hidden flex justify-center items-center">
                            <div className="w-full h-full max-w-full p-0 sm:p-2 md:p-4">
                                <Graph />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Review;
