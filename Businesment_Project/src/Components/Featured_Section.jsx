import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Featured_Section = () => {
  return (
    <div className="bg-blue-50 py-12 relative mb-16">
      <div className="w-11/12 mx-auto">
        <div className="space-y-4">
          <div className="badge badge-neutral badge-outline badge-lg border-2">
            Our featured
          </div>
          <h1 className="text-6xl font-bold lg:w-8/12">
            Effortless work planning<span className="text-primary"> for</span>{" "}
            teams with our <span className="text-primary">best plan</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 border-t-2 pt-12 pb-16 ">
          <div className="card image-full  min-h-24 shadow-sm hover:scale-105 transition-transform duration-300">
            <figure>
              <img
                src="https://i.ibb.co/C21XQ83/caucasian-young-woman-sitting-with-human-resources-manager-job-interview-male-boss-asking-questions.jpg"
                alt="Shoes"
                className="object-cover h-full w-full"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl">
                Effective work schedule for productivity
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

          <div className="card image-full  min-h-24 shadow-sm hover:scale-105 transition-transform duration-300">
            <figure>
              <img
                src="https://i.ibb.co/s3C5fHB/pexels-shvets-production-7176026.jpg"
                alt="Shoes"
                className="object-cover h-full w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Get task done by deadline</h2>
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

          <div className="card image-full min-h-24 shadow-sm hover:scale-105 transition-transform duration-300 ">
            <figure>
              <img
                src="https://i.ibb.co/jbx72Cs/agent-couple-signing-contract-close-up-dark-backgrounds.jpg"
                alt="Shoes"
                className="object-cover h-full w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">
                Asses any skills for any roles
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

          <div className="card image-full min-h-24 shadow-sm hover:scale-105 transition-transform duration-300">
            <figure>
              <img
                src="https://i.ibb.co/sJpBgD8g/rsz-1freestocks-i-poqp6kcoi-unsplash.jpg"
                alt="Shoes"
                className="object-cover h-full w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">
                Stay on schedule, never miss track
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

        <div className="space-y-4 mt-14 mb-20 flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex-1">
            <div className="badge badge-neutral badge-outline badge-lg border-2 mb-4">
              Why choose us
            </div>
            <h1 className="text-5xl font-bold lg:w-10/12">
              More than 5 millions+ users have said yes to track
            </h1>
          </div>
          <div className="flex-1">
            <div className="tabs tabs-lift justify-center">
              <input
                type="radio"
                name="my_tabs_3"
                className="tab text-lg rounded-ful"
                aria-label="Work Schedule"
              />
              <div className="tab-content p-6 text-lg">
                 View your upcoming work shifts and manage your availability. Keep your schedule organized and never miss an important shift or meeting again. You can also request time off or swap shifts with your coworkers directly from this dashboard.
              </div>

              <input
                type="radio"
                name="my_tabs_3"
                className="tab text-lg rounded-full"
                aria-label="Get plan"
                defaultChecked
              />
              <div className="tab-content p-6 text-lg">
                Explore our flexible plans designed to fit different needs. Whether you are an individual or a team, you can find a plan that matches your workflow. Start by selecting your preferences and let us recommend the best options for you.
              </div>

              <input
                type="radio"
                name="my_tabs_3"
                className="tab text-lg rounded-full"
                aria-label="Asses plans"
              />
              <div className="tab-content p-6 text-lg">
                Compare all available plans side by side to find the perfect fit. Easily review features, pricing, and benefits so you can make an informed decision. If you have any questions, our support team is here to help you choose the right plan.
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="stats shadow-xl lg:w-9/12 border">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title text-xl font-bold">Customers</div>
              <div className="stat-value text-5xl">110k+</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title text-xl font-bold">Reviews</div>
              <div className="stat-value text-5xl">90k+</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title text-xl font-bold">Expreince</div>
              <div className="stat-value text-5xl">30</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured_Section;
