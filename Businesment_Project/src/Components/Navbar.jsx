import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className="navbar bg-base-100 justify-center mt-6">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            </ul>
          </div>
         
        </div>
        <div className=" hidden lg:flex border rounded-xl shadow-sm p-1 px-8 gap-4">
           <Link to="/">
          <img src="https://i.ibb.co/3YrkvxV8/busines-high-resolution-logo-transparent.png" alt="Logo" className='w-36' /></Link>
          <ul className="menu menu-horizontal px-1  text-lg">
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link  to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/sales">Sales</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Navbar;
