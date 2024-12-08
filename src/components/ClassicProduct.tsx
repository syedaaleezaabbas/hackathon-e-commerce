import Image from 'next/image'

const ClassicProduct = () => {
    return (
        <div className="bg-[#23856D] text-white pt-12 pl-44 pr-28 md:flex items-center ">
            <div className="md:w-1/2 text-center md:text-left">
                <p className="uppercase text-[20px] mb-8">Summer 2020</p>
                <h2 className="text-[46px] font-bold">Vita Classic <br />Product</h2>
                <p className="mt-2">
                    We know how large objects will act. We know <br /> how are objects will act.
                </p>
                <span className="text-white text-[20px] mr-4"> - $16.48</span>
                <button className="mt-4 py-2 px-4 rounded bg-[#2DC071] text-[18px] hover:bg-green-600">
                    Add to Cart
                </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src="classicproduct.png"
                    alt="Model"
                    className="w-[80%] rounded-lg"
                />
            </div>
        </div>
    );
};

export default ClassicProduct;

