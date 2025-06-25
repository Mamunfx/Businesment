import { FaChevronRight } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const WIB = () => {
  return (
    <div>
      <div className="space-y-12">
        <h1 className="text-center text-5xl font-semibold">
          What is Businesment?
        </h1>
        <div className=" flex flex-col lg:flex-row  justify-center gap-4 items-center ">
          <div className="card w-96 bg-base-100 card-xl shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="card-body ">
              <div className="text-7xl text-primary">
                <VscWorkspaceTrusted />
              </div>
              <h3 className="card-title">Trusted data</h3>
              <h2 className="text-xl">
                Quality reliable data that we review in detail
              </h2>
              <div className="mt-4 card-actions flex gap-6 ">
                <Link to="/products">
                  <button className="btn btn-sm rounded-full border py-4">
                    Swipe right for more{" "}
                    <button className="btn btn-sm rounded-full">
                      <FaChevronRight />
                    </button>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 card-xl shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="card-body">
              <div className="text-7xl text-primary">
                <FaShippingFast />
              </div>
              <h3 className="card-title">Fast service</h3>
              <h2 className="text-xl">
                Get your project live in 48 hours and operate safely.
              </h2>
              <div className="mt-4 card-actions flex gap-6 ">
                <Link to="/products">
                  <button className="btn btn-sm rounded-full border py-4">
                    Swipe right for more{" "}
                    <button className="btn btn-sm rounded-full">
                      <FaChevronRight />
                    </button>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-96  bg-base-100 card-xl shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="card  bg-base-100 card-xl shadow-xl">
              <div className="card-body">
                <div className="text-7xl text-primary">
                  <FaMoneyCheckDollar />
                </div>
                <h3 className="card-title">Friendly budget</h3>
                <h2 className="text-xl">
                  No travel cost or no need to hire expert will save your money
                </h2>
                <div className="mt-4 card-actions flex gap-6 ">
                  <Link to="/products">
                    <button className="btn btn-sm rounded-full border py-4">
                      Swipe right for more{" "}
                      <button className="btn btn-sm rounded-full">
                        <FaChevronRight />
                      </button>{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WIB;
