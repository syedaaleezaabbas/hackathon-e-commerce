import React from 'react'
import Image from 'next/image'

const BestSellerProducts = () => {
    return (
        <div className="bg-white py-14">
            <h5 className='text-lg text-[#252b42] text-center mb-4'>Featured Products</h5>
            <h2 className="text-center md:text-3xl text-2xl font-bold mb-2">BESTSELLER PRODUCTS</h2>
            <p className="text-center text-gray-500 mb-6">
                Problems trying to resolve the conflict between
            </p>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:px-32 px-16 md:space-y-0 space-y-14">
                {/* Product 1 */}
                <div className="text-center">
                    <Image
                        src="/bestsellerproductpic1.jpg"
                        alt="Product 1"
                        width={250}
                        height={350}
                        className="w-[250px] h-[350px]"
                    />
                    <h3 className="mt-3 text-lg font-medium">Graphic Design</h3>
                    <p className="text-gray-500 text-sm">English Department</p>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <p className="text-gray-500 line-through">$16.48</p>
                        <p className="text-teal-500 font-bold">$6.48</p>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="text-center">
                    <Image
                        src="/bestsellerproductpic2.jpg"
                        alt="Product 2"
                        width={250}
                        height={350}
                        className="w-[250px] h-[350px]"
                    />
                    <h3 className="mt-3 text-lg font-medium">Graphic Design</h3>
                    <p className="text-gray-500 text-sm">English Department</p>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <p className="text-gray-500 line-through">$16.48</p>
                        <p className="text-teal-500 font-bold">$6.48</p>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="text-center">
                    <Image
                        src="/bestsellerproductpic3.jpg"
                        alt="Product 3"
                        width={250}
                        height={350}
                        className="w-[250px] h-[350px]"
                    />
                    <h3 className="mt-3 text-lg font-medium">Graphic Design</h3>
                    <p className="text-gray-500 text-sm">English Department</p>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <p className="text-gray-500 line-through">$16.48</p>
                        <p className="text-teal-500 font-bold">$6.48</p>
                    </div>
                </div>

                {/* PRODUCT4 */}
                <div className="text-center">
                    <Image
                        src="/bestsellerproductpic4.jpg"
                        alt="Product 3"
                        width={250}
                        height={350}
                        className="w-[250px] h-[350px]"
                    />
                    <h3 className="mt-3 text-lg font-medium">Graphic Design</h3>
                    <p className="text-gray-500 text-sm">English Department</p>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <p className="text-gray-500 line-through">$16.48</p>
                        <p className="text-teal-500 font-bold">$6.48</p>
                    </div>
                </div>

                {/* PRODUCT5 */}
                <div className="text-center">
                    <Image
                        src="/bestsellerproductpic5.jpg"
                        alt="Product 3"
                        width={250}
                        height={350}
                        className="w-[250px] h-[350px]"
                    />
                    <h3 className="mt-3 text-lg font-medium">Graphic Design</h3>
                    <p className="text-gray-500 text-sm">English Department</p>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <p className="text-gray-500 line-through">$16.48</p>
                        <p className="text-teal-500 font-bold">$6.48</p>
                    </div>
                </div>

                {/* PRODUCT6 */}
                <div className="text-center">
                    <Image
                        src="/bestsellerproductpic6.jpg"
                        alt="Product 3"
                        width={250}
                        height={350}
                        className="w-[250px] h-[350px]"
                    />
                    <h3 className="mt-3 text-lg font-medium">Graphic Design</h3>
                    <p className="text-gray-500 text-sm">English Department</p>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <p className="text-gray-500 line-through">$16.48</p>
                        <p className="text-teal-500 font-bold">$6.48</p>
                    </div>
                </div>

                {/* PRODUCT7 */}
                <div className="text-center">
                    <Image
                        src="/bestsellerproductpic7.jpg"
                        alt="Product 3"
                        width={250}
                        height={350}
                        className="w-[250px] h-[350px]"
                    />
                    <h3 className="mt-3 text-lg font-medium">Graphic Desi0gn</h3>
                    <p className="text-gray-500 text-sm">English Department</p>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <p className="text-gray-500 line-through">$16.48</p>
                        <p className="text-teal-500 font-bold">$6.48</p>
                    </div>
                </div>

                {/* PRODUCT8 */}
                <div className="text-center">
                    <Image
                        src="/bestsellerproductpic8.jpg"
                        alt="Product 3"
                        width={250}
                        height={350}
                        className= "md:w-[250px] h-[350px]"
                    />
                    <h3 className="mt-3 text-lg font-medium">Graphic Design</h3>
                    <p className="text-gray-500 text-sm">English Department</p>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <p className="text-gray-500 line-through">$16.48</p>
                        <p className="text-teal-500 font-bold">$6.48</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellerProducts