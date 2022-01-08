import React from "react";
import { Link } from "react-router-dom";
export default function Product(props) {
  const { title, image, price, category, id } = props.product;
  return (
    <>
      <div class="group relative">
        <Link to={`/products/${id}`}>
          <div class="w-full min-h-80 bg-gray-100 border-gray-900 aspect-w-1 aspect-h-1 rounded-md overflow-hidden rounded-lg group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={image}
              alt="Front of men&#039;s Basic Tee in black."
              class="w-full h-full object-center object-fit lg:w-full lg:h-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  {category}
                  <span aria-hidden="true" class="absolute inset-0"></span>
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{title}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${price}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
