import Image from "next/image";

const Products = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    image: "/pro1.png",
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    image: "/pro2.png",
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    image: "/pro3.png",
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    image: "/pro4.png",
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    image: "/pro5.png",
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    image: "/pro6.png",
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    image: "/pro1.png",
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    image: "/pro2.png",
  },
];

function BestSellerProductsProductPage() {
  return (
    <section className="py-10 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-[#252b42]">Bestseller Products</h2>
      <hr className='my-8 border-t border-gray-300' />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Products.map((product) => (
          <div
            key={product.id}
            className="shadow-md hover:shadow-lg"
          >
            {/* Product Image */}
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-6 bg-white">
              <h3 className="text-lg font-bold text-[#252b42] mb-2">
                {product.title}
              </h3>
              <p className="text-base text-gray-500 mb-3">{product.department}</p>
              <div className="flex items-center space-x-2 text-lg mb-3">
                <span className="line-through text-gray-500 font-semibold">
                  {product.oldPrice}
                </span>
                <span className="text-teal-500 font-bold">{product.newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellerProductsProductPage;