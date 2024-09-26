import React from 'react';
import Table from './Table';
import Image2 from "../Images/Image2.png";
import { GiCheckMark } from "react-icons/gi";

const Work = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-[#f5f5fc] flex flex-col justify-center items-center relative">

                <section className="w-full max-w-6xl px-5 md:px-12 lg:px-16 py-12 relative z-10">

                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 text-[#252b48]">
                        How it works
                    </h1>

                    <div className="flex flex-col md:flex-row items-start relative z-10">

                        <div className="md:w-1/2 relative flex flex-col items-start justify-start space-y-4 z-10">

                            <h2 className="text-lg font-semibold text-[#252b48]">
                                Enter your post’s title & keyword
                            </h2>

                            <p className="text-[#606f87] ml-[-30px]">
                                Simply provide our AI writer with 1-2 sentences on what to write,
                                and it’ll understand and start writing for you.
                            </p>

                            <ul className="list-none space-y-3 text-[#606f87]">
                                <div className="flex items-center space-x-1">
                                    <GiCheckMark className="bg-blue-200 text-[#4d5fb7] p-1 text-2xl rounded-full " />
                                    <li>Include any SEO keywords you want to rank for</li>
                                </div>
                                <div className="flex items-center">
                                    <GiCheckMark className="bg-blue-200 text-[#4d5fb7] p-1 text-2xl rounded-full " />
                                    <li>Customize your copy with tone and perspective options</li>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <GiCheckMark className="bg-blue-200 text-[#4d5fb7] p-1 text-2xl rounded-full " />
                                    <li>Choose from 25+ languages</li>
                                </div>
                            </ul>

                            <img
                                src={Image2}
                                alt="Illustration"
                                className="w-full max-w-[300px] mt-6"
                            />
                        </div>

                        <div className="hidden md:block absolute -bottom-[20px] md:-bottom-1 -left-[-290px] w-64 h-64 bg-blue-800 rounded-full opacity-50 z-0"></div>

                        <div className="w-full md:w-1/2 mt-6 md:mt-0 relative">
                            <Table />
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}

export default Work;
