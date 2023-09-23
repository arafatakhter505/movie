import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <header className="shadow sticky top-0 bg-base-100 z-50">
      <div className="navbar max-w-screen-xl mx-auto">
        {/* navbar left side */}
        <div className="navbar-start">
          {/* responsive dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/popular"}>Popular</Link>
              </li>
              <li>
                <Link to={"/toprated"}>Top Rated</Link>
              </li>
              <li>
                <Link to={"/upcoming"}>Upcoming</Link>
              </li>
            </ul>
          </div>
          {/* logo */}
          <Link to={"/"} className="flex items-center">
            <img src={Logo} alt="logo" className="h-10 mr-3" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Movies
            </span>
          </Link>
        </div>
        {/* navbar middle */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/popular"}>Popular</Link>
            </li>
            <li>
              <Link to={"/toprated"}>Top Rated</Link>
            </li>
            <li>
              <Link to={"/upcoming"}>Upcoming</Link>
            </li>
          </ul>
        </div>
        {/* navbar right side */}
        <div className="navbar-end">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="Search....."
              className="input input-bordered w-36 md:w-auto"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
