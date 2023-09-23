import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <section className="bg-center bg-no-repeat bg-[url('https://washington.org/sites/default/files/styles/generic_hero_banner_1440_x_600/public/2020-12/Warner_Theatre.jpg.webp?itok=Dvj_b14C')] bg-gray-700 bg-blend-multiply">
      <div className="max-w-screen-xl mx-auto px-5 py-24">
        <h2 className="text-white font-medium text-6xl">Welcome.</h2>
        <p className="text-white text-2xl">
          Millions of movies to discover. Explore now.
        </p>
        <div className="form-control pt-5">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="search"
                placeholder="Search for a movie.........."
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
