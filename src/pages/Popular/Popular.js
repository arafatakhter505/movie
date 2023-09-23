import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";
import useTitle from "../../hooks/useTitle";

const Popular = () => {
  const { data, loading } = useFetch("movie/popular");
  useTitle("Movies - Popular");

  return (
    <main className="max-w-screen-xl mx-auto px-5 py-12">
      {loading && (
        <div className="flex justify-center h-screen">
          <Loading />
        </div>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {data.results &&
          data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </main>
  );
};

export default Popular;
