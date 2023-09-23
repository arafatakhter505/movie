import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "./../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";
import useTitle from "../../hooks/useTitle";

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data, loading } = useFetch("search/movie", queryTerm);
  useTitle(`Search result for ${queryTerm}`);

  return (
    <main className="max-w-screen-xl mx-auto px-5 py-12">
      {loading && (
        <div className="flex justify-center h-screen">
          <Loading />
        </div>
      )}
      <div className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {data.results && data.results.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {data.results &&
          data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </main>
  );
};

export default Search;
