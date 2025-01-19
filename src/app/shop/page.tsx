import React from "react";
import Link from "next/link";
import Image from 'next/image';
import HeaderMain from "@/components/HeaderMain";
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import ShopProducts from "@/components/ShopProducts";

const Shop = () => {
    return (
        <div className="bg-white max-w-screen-2xl mx-auto">
            {/* Header */}
            <HeaderTop />
            <HeaderMain />

            {/* Breadcrumb */}
            <nav className="text-lg text-[#737373] py-5 px-8 flex items-center justify-between bg-gray-100">
                <span className="font-medium text-[#252B42]">Shop</span>
                <div className="flex items-center">
                    <Link href="/" className="text-[#252B42]">
                        Home
                    </Link>
                    <span className="text-2xl text-[#737373] mx-3">&gt;</span>
                    <span className="font-medium text-[#737373]">Shop</span>
                </div>
            </nav>

            {/* Product Categories Grid */}
            <div className="w-full md:px-4 px-8 pb-10 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-5 md:gap-2 gap-4">
                    {/* Category 1 */}
                    <div className="relative">
                        <Image
                            src="/shop1.png"
                            alt="Cloths Category"
                            width={300}
                            height={300}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                            CLOTHS <br /> 5 Items
                        </div>
                    </div>

                    {/* Category 2 */}
                    <div className="relative">
                        <Image
                            src="/shop2.png"
                            alt="Cloths Category"
                            width={300}
                            height={300}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                            CLOTHS <br /> 5 Items
                        </div>
                    </div>

                    {/* Category 3 */}
                    <div className="relative">
                        <Image
                            src="/shop3.png"
                            alt="Cloths Category"
                            width={300}
                            height={300}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                            CLOTHS <br /> 5 Items
                        </div>
                    </div>

                    {/* Category 4 */}
                    <div className="relative">
                        <Image
                            src="/shop4.png"
                            alt="Cloths Category"
                            width={300}
                            height={400}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                            CLOTHS <br /> 5 Items
                        </div>
                    </div>

                    {/* Category 5 */}
                    <div className="relative">
                        <Image
                            src="/shop5.png"
                            alt="Cloths Category"
                            width={300}
                            height={300}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                            CLOTHS <br /> 5 Items
                        </div>
                    </div>
                </div>
            </div>



            {/* Showing Results and Views and popularity Dropdown */}
            <div className="container mx-auto px-2 my-10 flex flex-col md:flex-row justify-between items-center">
                {/* Showing Results */}
                <div className="text-[#737373] text-lg font-semibold">
                    <span>Showing all 12 results</span>
                </div>

                {/* Views Dropdown */}
                <div className="flex items-center space-x-4 mt-4">
                    {/* Views Toggle */}
                    <div className="flex items-center space-x-2">
                        <span className="text-lg text-[#737373] font-semibold">Views:</span>
                        <button className="p-2 border rounded border-gray-600 hover:bg-gray-200 transition">
                            <HiViewGrid className="h-6 w-6 text-gray-500" />
                        </button>
                        <button className="p-2 border rounded border-gray-600 hover:bg-gray-200 transition">
                            <MdViewList className="h-6 w-6 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Popularity Dropdown */}
                <div className="flex space-x-4 md:mt-0 mt-4">
                    <select
                        id="popularity"
                        className="py-2 px-2 text-lg border border-gray-600 rounded text-gray-600"
                    >
                        <option value="popular">Popularity</option>
                        <option value="newest">Newest</option>
                        <option value="price_low">Price: Low to High</option>
                        <option value="price_high">Price: High to Low</option>
                    </select>

                    {/* Filter Button */}
                    <button className="bg-blue-500 text-white px-6 text-lg py-2 rounded hover:bg-blue-600">
                        Filter
                    </button>
                </div>
            </div>



            {/* logos */}
            <div className='flex flex-wrap justify-center py-5 bg-gray-100 items-center gap-20 md:px-0 px-6'>
                <Image
                    src={'/logo1.png'}
                    alt='vector1'
                    height={200}
                    width={100}
                />
                <Image
                    src={'/logo2.png'}
                    alt='Lyft logo'
                    height={200}
                    width={100}
                />
                <Image
                    src={'/logo3.png'}
                    alt='vector 3'
                    height={200}
                    width={100}
                />
                <Image
                    src={'/logo4.png'}
                    alt='vector 4'
                    height={200}
                    width={100}
                />
                <Image
                    src={'/logo5.png'}
                    alt='vector5'
                    height={200}
                    width={100}
                />
                <Image
                    src={'/logo6.png'}
                    alt='vector6'
                    height={200}
                    width={100}
                />
            </div>

            <Footer />



            {/* shop products */}
            <ShopProducts />



            {/* pagination layout */}
            <div className="flex justify-center items-center mt-8 mb-28">
                <button className="px-6 py-4 border-t-2 border-b-2 border-l-2 border-gray-500 rounded-l-lg bg-gray-300 hover:bg-gray-400">First</button>
                <button className="px-4 py-4 border-t-2 border-b-2 border-l-2 border-gray-500 bg-gray-300 hover:bg-gray-400">1</button>
                <button className="px-4 py-4 border-t-2 border-b-2 border-l-2 border-gray-500 bg-blue-500 hover:bg-blue-700">2</button>
                <button className="px-4 py-4 border-2 border-gray-500 bg-gray-300 hover:bg-gray-400">3</button>
                <button className="px-6 py-4 border-t-2 border-b-2 border-r-2 text-blue-500 font-semibold border-gray-500 rounded-r-lg bg-white hover:bg-gray-400">Next</button>
            </div>
        </div>
    );
};

export default Shop;