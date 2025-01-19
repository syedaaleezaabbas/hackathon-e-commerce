import React from 'react';
import Image from 'next/image'

const Universe = () => {
    return (
        <main>
            <div className="w-full bg-white flex flex-col lg:flex-row justify-center items-center lg:items-start overflow-x-hidden max-w-screen-2xl mx-auto">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 flex md:justify-center justify-start md:ml-32 ml-14">
                    <div className="relative">
                        <Image
                            src="/universe.png"
                            alt="Asian"
                            width={200}
                            height={200}
                            className="w-[90%] max-w-[400px] sm:max-w-[500px] lg:w-[725px] lg:h-[600px] object-cover ml-18"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 px-5 lg:px-10 md:mt-8 mt-0 lg:mt-10 py-32">
                    <h5 className="text-gray-400 text-sm lg:text-base font-bold mb-6">
                        SUMMER 2020
                    </h5>
                    <h2 className="text-[#252B42] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                        Part of the Neural<br /> Universe
                    </h2>
                    <h4 className="text-[#737373] text-sm sm:text-base lg:text-lg leading-6 mb-6">
                        We know how large objects will act, <br />
                        but things on a small scale.
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                            BUY NOW
                        </button>
                        <button className=" text-[#2DC071] border-2 border-[#2DC071] px-6 md:py-3 py-2 rounded-md hover:bg-green-600 hover:text-white transition-colors">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Universe;