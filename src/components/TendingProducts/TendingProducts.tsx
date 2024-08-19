// "use client";
import Link from "next/link";
import Container from "../Container";
import { ProductsApi } from "../ProductsAPI/ProductsApi";
import Products from "./Products";

const TendingProducts = async () => {
  const products = await ProductsApi(process.env.API);

  return (
    <Container>
      <div className="md:flex justify-between items-center mt-10 w-full">
        <h3 className="text-3xl font-semibold">
          <span className="text-[#3e78bc]">Trending</span> Products
        </h3>
        <div className="grid sm:grid-cols-5 gap-2 mt-0 sm:mt-5  ml-5">
          <Link href={""}>
            <p className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all duration-300">All</p>
          </Link>
          <Link href={""}>
            <p className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all duration-300">Featured</p>
          </Link>
          <Link href={""}>
            <p className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all duration-300">On sale</p>
          </Link>
          <Link href={""}>
            <p className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all duration-300">Trending</p>
          </Link>
          <Link href={""}>
            <p className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all duration-300">Top rated</p>
          </Link>
        </div>
      </div>
      <Products products={products} />
    </Container>
  );
};

export default TendingProducts;
