import Image from "next/image";
import Herosection from "@/components/Hero";
import EditorsPick from "@/components/EditorsPick";
import BestSellerProducts from "@/components/BestSellerProducts";
import Universe from "@/components/Universe";
import ClassicProduct from "@/components/ClassicProduct";
import FeaturedPosts from "@/components/FeaturedPosts";

export default function Home() {
  return (
    <>

      <Herosection />
      <EditorsPick />
      <BestSellerProducts />
      <ClassicProduct />
      <Universe />
      <FeaturedPosts />

    </>
  );
}
