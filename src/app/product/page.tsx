import HeaderMain from '@/components/HeaderMain';
import HeaderTop from '@/components/HeaderTop';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const page = () => {
  return (
    <div className='bg-white '>


      {/* header */}
      <HeaderTop />
      <HeaderMain />


      {/* Breadcrumb */}
      <nav className='text-lg text-[#737373] flex items-center justify-start pl-4 bg-gray-100 py-8'>
        <Link href="/" className='text-[#252B42]'>Home</Link>
        <span className='text-2xl text-[#737373] mx-3'>&gt;</span>
        <span className='font-medium text-[#737373]'>Shop</span>
      </nav>

      <div className="flex flex-col lg:flex-row px-4 pb-20 bg-gray-100 gap-14">
        {/* Product Images */}
        <div className="flex-1">
          <img
            src="/product1.jpg"
            alt="Main Product"
            className="w-full"
          />
          <div className="flex gap-4 mt-4">
            <img src="/product2.jpg" alt="Thumbnail" className="w-25 h-30" />
            <img src="/product3.jpg" alt="Thumbnail" className="w-25 h-30" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mt-14 mb-4">Floating Phone</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <span className="ml-2 text-[#737373] font-semibold text-sm">10 Reviews</span>
          </div>
          <p className="text-xl font-bold text-black mb-2">$1,139.33</p>
          <p className='text-lg font-medium text-gray-600 mb-8'>Availability: <span className='text-green-600 font-semibold'>In stock</span></p>
          <p className="max-w-lg text-sm text-gray-600 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Relit official consequent door enim relit mollie. Excitation venial consequent sent nostrum set.
          </p>

          <hr className='my-8 border-t border-gray-300' />

          {/* Color Options */}
          <div className="flex items-center gap-2 mb-14">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>

          {/* Buttons */}
          <div className='flex items-center gap-4'>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Select Options
            </button>
            <div className="flex gap-4 ">
              <div className='border-2 border-gray-300 rounded-full p-2'>
                <FaHeart className="text-xl text-gray-500 cursor-pointer" /></div>{/* Wishlist Icon */}
              <div className='border-2 border-gray-300 rounded-full p-2'>
                <FaShoppingCart className="text-xl text-gray-500 cursor-pointer" /></div>{/* Cart Icon */}
              <div className='border-2 border-gray-300 rounded-full p-2'>
                <FaEye className="text-xl text-gray-500 cursor-pointer" /></div> {/* Eye Icon */}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="my-8 bg-white ">
        <div className="flex justify-center gap-14 text-lg">
          <button className=" text-gray-600">Description</button>
          <button className=" text-gray-600">Additional Information</button>
          <button className=" text-gray-600">Reviews (0)</button>
        </div>
      </div>

      <hr className='my-8 border-t border-gray-300' />

      <div className='flex px-6 space-x-16'>
        <div>
          <Image
          src="/product4.png"
          alt='product picture'
          width={350}
          height={400}
          className='w=full' />
        </div>
        <div className='flex flex-col space-y-4 max-w-sm'>
          <h1 className='font-bold text-black text-2xl mb-9'>the quick fox jumps over</h1>
        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Relit official consequent door enim relit mollie. Excitation venial consequent sent nostrum set.</p>
        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Relit official consequent door enim relit mollie. Excitation venial consequent sent nostrum set.</p>
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. Relit official consequent door enim relit mollie. Excitation venial consequent sent nostrum set.</p>
        </div>
        <div className='flex flex-col space-y-4'>
        <h2 className='font-bold text-black text-2xl mb-9'>the quick fox jumps over</h2>
      <p><span>➤</span>  the quick fox jumps over</p>
        <p><span>➤</span>  the quick fox jumps over</p>
        <p><span>➤</span>  the quick fox jumps over</p> <h2 className='font-bold text-black text-2xl mb-9'>the quick fox jumps over</h2>
      <p><span>➤</span>  the quick fox jumps over</p>
        <p><span>➤</span>  the quick fox jumps over</p>
        <p><span>➤</span>  the quick fox jumps over</p>

        </div>

      </div>
    </div>
  )
}

export default page
