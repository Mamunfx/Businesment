import { product_data } from "../../Data/product_data";
const products = product_data;
const Products = () => {
  return (
    <div className="space-y-8 mt-14 mb-12 w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mt-6 text-primary">
        We offer a wide range of services
      </h1>
      <p className="text-center lg:w-8/12 mx-auto pb-8 text-gray-600">
        Every service provides you with expert guidance to grow more ! Make a
        substantial grow in your existing busines with busiment, where we guide
        you and make effective plans to execute with atmost comfort.
      </p>

      <div className="grid grid-cols-1  gap-12 ">
        {products.map((product, i) => (
          <div key={i} className="card lg:card-side bg-base-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
            <figure className="lg:min-w-[550px] lg:h-96  w-auto h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt="Album"
                
              />
            </figure>
            <div className="card-body">
                <div className="badge badge-secondary bg-blue-100 border-none text-black">{product.tier}</div>
              <h2 className="card-title text-4xl">{product.name}</h2>
              <p className="text-gray-600 text-lg w-10/12 ">{product.description}</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary bg-primary font-bold">More details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
