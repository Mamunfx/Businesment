import { product_data } from "../../Data/product_data";
const products = product_data;
const Pricing = () => {
  return (
    <div className="space-y-16 mt-12 mb-12 w-11/12 mx-auto">
      <h1 className="text-5xl font-semibold my-6 text-primary">Choose the best plan for you </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div key={i} className="card  bg-base-100 shadow-sm hover:shadow-2xl transition-shadow duration-300 border">
            <div className="card-body">
              <span className="badge badge-xs badge-warning bg-blue-100 border-none text-black">
                {product.tag}
              </span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{product.tier}</h2>
                <span className="text-xl">${product.price}/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {product.features.map((feature, i) => (
                  <li key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}

                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Seamless cloud integration
                  </span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Real-time collaboration tools
                  </span>
                </li>
              </ul>
              <div className="mt-6 w-9/12 mx-auto">
                <button className="btn btn-primary btn-block bg-primary">Subscribe</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
