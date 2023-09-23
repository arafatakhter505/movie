import React from "react";
import { Backup } from "../../assets";
import { useParams } from "react-router-dom";
import Loading from "./../../components/Loading/Loading";
import useFetch from "./../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";

const MovieDetails = () => {
  const params = useParams();
  const { data, loading } = useFetch(`movie/${params.id}`);
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : Backup;

  useTitle(data.original_title);

  return (
    <main className="max-w-screen-xl mx-auto py-12 px-5">
      {loading ? (
        <div className="flex justify-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/3 ">
            <img
              src={image}
              alt="poster"
              className="lg:w-5/6 w-full drop-shadow-xl rounded-lg"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-semibold lg:pt-0 pt-6">
              {data.original_title}
            </h2>
            <p className="py-5 text-lg">{data.overview}</p>
            <div className="flex flex-wrap gap-3">
              {data.genres &&
                data.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="border-2 py-2 px-3 font-semibold"
                  >
                    {genre.name}
                  </span>
                ))}
            </div>
            <div className="py-5 text-xl">
              <span className="pr-5">
                &#127775; {data.vote_average} | {data.popularity} reviews
              </span>
            </div>
            <ul>
              <li className="pb-5">
                <span className="font-semibold">Budget:</span> {data.budget}
              </li>
              <li className="pb-5">
                <span className="font-semibold">Revenue:</span> {data.revenue}
              </li>
              <li className="pb-5">
                <span className="font-semibold">Runtime:</span> {data.runtime}
                min
              </li>
              <li className="pb-5">
                <span className="font-semibold">Release Date:</span>{" "}
                {data.release_date}
              </li>
            </ul>
            <h3 className="text-2xl font-semibold pb-2">
              Production Companies
            </h3>
            <div className="flex flex-wrap gap-6">
              {data.production_companies &&
                data.production_companies.map((company) => (
                  <div
                    key={company.id}
                    className="flex items-center drop-shadow-lg p-3 rounded-lg border-2"
                  >
                    <img
                      src={
                        company.logo_path
                          ? `https://image.tmdb.org/t/p/w500/${company.logo_path}`
                          : Backup
                      }
                      alt="production"
                      className="w-14 rounded-full"
                    />
                    <div className="pl-3">
                      <h3 className="text-xl">{company.name}</h3>
                      <p>Country: {company.origin_country}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MovieDetails;
