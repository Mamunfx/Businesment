const Featured_Section = () => {
  return (
    <div className="bg-blue-50 py-12 relative mb-16">
      <div className="w-11/12 mx-auto">
        <div className="space-y-4">
          <div className="badge badge-neutral badge-outline badge-lg border-2">
            Our featured
          </div>
          <h1 className="text-6xl font-bold w-8/12">
            Effortless work planning<span className="text-secondary"> for</span>{" "}
            teams with our <span className="text-secondary">best plan</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 border-t-2 pt-12">
          <div className="card bg-base-100 image-full  shadow-sm">
            <figure>
              <img
                src="https://i.ibb.co/C21XQ83/caucasian-young-woman-sitting-with-human-resources-manager-job-interview-male-boss-asking-questions.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 image-full  shadow-sm">
            <figure>
              <img
                src="https://i.ibb.co/s3C5fHB/pexels-shvets-production-7176026.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 image-full  shadow-sm">
            <figure>
              <img
                src="https://i.ibb.co/jbx72Cs/agent-couple-signing-contract-close-up-dark-backgrounds.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-14 mb-20 flex justify-between gap-4">
          <div className="flex-1">
            <div className="badge badge-neutral badge-outline badge-lg border-2 mb-4">
              Why choose us
            </div>
            <h1 className="text-4xl font-bold ">
              More than 5 millions+ users have said yes to track
            </h1>
          </div>
          <div className="flex-1">
            <div className="tabs tabs-lift justify-center">
              <input
                type="radio"
                name="my_tabs_3"
                className="tab text-lg border-2 rounded-full"
                aria-label="Work Schedule"
              />
              <div className="tab-content  p-6 text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit adipisci deserunt, exercitationem pariatur tempora
                minima, natus eius explicabo ea sapiente voluptas esse aliquid
                reiciendis architecto commodi provident ducimus quae. Voluptas!
              </div>

              <input
                type="radio"
                name="my_tabs_3"
                className="tab text-lg"
                aria-label="Get plan"
                defaultChecked
              />
              <div className="tab-content  p-6 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ad rerum, beatae animi eaque illo voluptatum enim iusto
                inventore fugit dicta iure accusamus nam consectetur consequatur
                nostrum dolorum atque architecto!
              </div>

              <input
                type="radio"
                name="my_tabs_3"
                className="tab text-lg"
                aria-label="Asses plans"
              />
              <div className="tab-content p-6 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                aperiam ex iusto nesciunt enim, voluptate distinctio laboriosam
                architecto illo quisquam explicabo soluta, facere excepturi
                doloremque cum atque. Cumque, tenetur eligendi.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card  bg-base-100 card-sm shadow-sm ">
            <div className="card-body">
              <h2 className="card-title">Small Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 card-sm shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Small Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card  bg-base-100 card-sm shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Small Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card  bg-base-100 card-sm shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Small Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured_Section;
