import React from "react";
import Hero from "./Hero";
import Category from "../../components/Category/Category";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Movies");

  return (
    <main>
      <Hero />
      <Category title="Trending" url="trending/movie/day" />
      <Category title="What's Popular" url="movie/popular" />
    </main>
  );
};

export default Home;
