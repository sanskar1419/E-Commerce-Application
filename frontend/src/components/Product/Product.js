import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${product.id}`);
  };

  return (
    <div
      className="card w-60 bg-slate-900 shadow-xl glass cursor-pointer mb-8 mr-5"
      onClick={handleClick}
    >
      <figure className="mix-blend-multiply">
        {/* <ImageMagnifier src={product.image[0]} /> */}
        <img
          src={product.image[0]}
          alt="product"
          className="h-60 w-full m-auto mix-blend-lighten"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate text-lg">
          {product.Brand}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="text-base truncate font-bold  h-25 text-justify">
          {product.title}
        </div>
        <p className="text-base font-extrabold">
          &#8377; {product.price}{" "}
          <span className="font-thin line-through text-xs">
            &#8377; {product.mrp}
          </span>
        </p>

        <div class="flex items-center">
          <svg
            class="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">
            {product.rating}
          </p>
          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a
            href="#"
            class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            {product.Review} reviews
          </a>
        </div>

        <div className="card-actions justify-end">
          <div className="badge badge-outline capitalize">{product.type}</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="card-actions justify-center"></div>
      </div>
    </div>
  );
}

export default Product;
