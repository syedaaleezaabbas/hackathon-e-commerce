import React from 'react';
import Image from 'next/image';

// Sample product data
const products = [
    {
        id: 1,
        image: '/shopping1.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 2,
        image: '/shopping2.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 3,
        image: '/shopping3.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 4,
        image: '/shopping4.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 5,
        image: '/shopping5.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 6,
        image: '/shopping6.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 7,
        image: '/shopping7.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 8,
        image: '/shopping8.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 9,
        image: '/shopping9.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 10,
        image: '/shopping10.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 11,
        image: '/shopping11.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
    {
        id: 12,
        image: '/shopping12.png',
        title: 'Graphic Design',
        department: 'English Department',
        oldPrice: 16.48,
        newPrice: 6.48,
    },
];

const ShopProducts = () => {
    return (
        <div className="bg-white py-14">
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:px-28 px-16 md:space-y-0 space-y-14">
                {products.map((product) => (
                    <div key={product.id} className="text-center">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="w-[300px] h-[300px]"
                        />
                        <h3 className="mt-3 text-lg font-medium">{product.title}</h3>
                        <p className="text-gray-500 text-sm">{product.department}</p>

                        {/* Color Options */}
                        <div className="flex justify-center gap-2 mt-2">
                            <span className="h-3 w-3 rounded-full bg-[#23a6f0]"></span>
                            <span className="h-3 w-3 rounded-full bg-[#23856d]"></span>
                            <span className="h-3 w-3 rounded-full bg-[#e77c40]"></span>
                            <span className="h-3 w-3 rounded-full bg-[#252b42]"></span>
                        </div>

                        {/* Pricing */}
                        <div className="flex justify-center gap-2 mt-2">
                            <p className="text-gray-500 line-through">${product.oldPrice}</p>
                            <p className="text-teal-500 font-bold">${product.newPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopProducts;