import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setProducts, fetchProducts } from "../redux/actions/productAction";
import Product from "./Product";

const ProductListings = () => {
  const dispach = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  // const fetchData = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   dispach(setProducts(response.data));
  //  };

  useEffect(() => {
    dispach(fetchProducts());

    // fetchData();
  }, []);

  const renderList = products.map((product) => {
    return <Product product={product} key={product.id} />;
  });

  return (
    <>
      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
            Fake API Clothing Store
          </h2>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {renderList}
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductListings;
