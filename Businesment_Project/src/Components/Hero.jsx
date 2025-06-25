import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div className="hero my-12 py-4">
        <div className="hero-content flex-col lg:flex-row justify-center gap-6">
          <div className="lg:w-1/2 w-full space-y-5 flex-1">
            <button className="badge border-2 border-black py-3">
              Leading platform
            </button>
            <h1 className="text-5xl font-bold">
              Empowerment through effective management of your business
            </h1>
            <p className="py-6">
              Maximize your business potential with our empowering and powerful
              management strategies, unloacking success like never before.
              Expereince tranformative growth and acheive your goals with our
              expert guidance and support.
            </p>
            <Link to="/products">
            <button className="btn btn-primary bg-secondary">
              Get Started
            </button>
            </Link>
          </div>

          <div className="w-full h-[28rem] gap-3u lg:w-1/2 grid grid-cols-2 md:grid-cols-3 grid-rows-3 ">
            <div className="col-span-2 row-span-2 relative group">
              <img
                src="https://i.ibb.co/LJsHkZK/business-people-meeting-office.jpg"
                className="rounded-2xl shadow-xl object-cover w-full h-full  transition-transform group-hover:scale-105 duration-200 aspect-[2/1]"
                alt="img1"
              />
            </div>
            <div className="col-span-1 row-span-1 relative group">
              <img
                src="https://i.ibb.co/s3C5fHB/pexels-shvets-production-7176026.jpg"
                className="rounded-2xl w-full h-full  shadow-xl object-cover aspect-square transition-transform group-hover:scale-105 duration-200"
                alt="img2"
              />
            </div>
            <div className="col-span-1 row-span-2 relative group">
              <img
                src="https://i.ibb.co/nbY3k8h/workgroup-three-collaborating-project.jpg"
                className=" w-full h-full aspect-[3/4] rounded-2xl shadow-xl object-cover  transition-transform group-hover:scale-105 duration-200"
                alt="img3"
              />
            </div>
            <div className="col-span-2 row-span-1 relative group">
              <img
                src="https://i.ibb.co/jbx72Cs/agent-couple-signing-contract-close-up-dark-backgrounds.jpg"
                className="w-full h-full rounded-2xl shadow-xl aspect-[4/1] object-cover  transition-transform group-hover:scale-105 duration-200"
                alt="img4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
