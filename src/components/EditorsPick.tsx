import Image from "next/image";

export default function EditorsPick() {
    return (
        <div className="w-full flex justify-center py-[20px] top-[850px] bg-[#f5f5f5]">
            <div className="w-[1050px] h-auto flex flex-col gap-[30px] bg-[#f5f5f5] p-[40px]">
                {/* Title Section */}
                <div className="flex flex-col items-center gap-[10px]">
                    <h3 className="font-semibold md:text-[28px] text-[24px] leading-[32px]">
                        EDITOR’S PICK
                    </h3>
                    <p className="md:w-[450px] w-[350px] h-auto font-normal md:text-[18px] text-[16px] md:leading-[20px] text-[#737373] text-center mt-2">
                        Problems trying to resolve the conflict between
                    </p>
                </div>
                {/* Images Section */}
                <div className="w-full h-[500px] md:flex md:flex-row md:gap-[30px] flex-col">
                    {/* Men Image */}
                    <div className="relative w-full md:w-[510px] h-[500px] px-5 md:mb-0 mb-6">
                        <Image
                            src={'/edipic1.png'}
                            alt="men"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                        <button className="absolute top-[434px] left-[101px] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
                            MEN
                        </button>
                    </div>
                    {/* Women Image */}
                    <div className="relative w-full md:w-[510px] h-[500px] px-5 md:mb-0 mb-6">
                        <Image
                            src={'/edipic2.png'}
                            alt="women"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                        <button className="absolute top-[434px] left-[21px] w-[136px] h-[48px] px-[48px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md hover:bg-gray-100">
                            <h2 className="font-bold text-[16px] leading-[24px] text-[#252B42]">
                                WOMEN
                            </h2>
                        </button>
                    </div>
                    {/* Accessories and Kids */}
                    <div className="w-[240px] h-[500px] flex flex-col md:gap-[15px]">
                        {/* Accessories Image */}
                        <div className="relative md:w-[240px] md:h-[242px] h-[500px] w-[350px] px-5 md:mb-0 mb-6">
                            <Image
                                src={'/edipic3.png'}
                                alt="div1"
                                width={200}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md hover:bg-gray-100">
                                <h2 className="font-bold text-[16px] leading-[24px] text-[#252B42]">
                                    ACCESSORIES
                                </h2>
                            </button>
                        </div>
                        {/* Kids Image */}
                        <div className="relative md:w-[240px] md:h-[242px] h-[500px] w-[350px] px-5 md:mb-0 mb-6">
                            <Image
                                src={'/edipic4.png'}
                                width={200}
                                height={200}
                                alt="div2"
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white  shadow-md hover:bg-gray-100">
                                <h2 className="font-bold text-[16px] leading-[24px] text-[#252B42]">
                                    KIDS
                                </h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
