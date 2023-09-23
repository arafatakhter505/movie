import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

const Category = ({ title, url }) => {
  const { data, loading } = useFetch(url);

  return (
    <section className="max-w-screen-xl mx-auto px-5 py-12">
      <h2 className="text-3xl font-semibold mb-12">{title}</h2>
      {loading && (
        <div className="flex justify-center">
          <Loading />
        </div>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {data.results &&
          data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </section>
  );
};

export default Category;
