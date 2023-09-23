import React from "react";
import { Backup } from "../../assets";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const {
    id,
    poster_path,
    original_title,
    overview,
    popularity,
    release_date,
  } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;
  return (
    <div className="card bg-base-100 shadow-xl border">
      <Link to={`/movie/${id}`}>
        <figure>
          <img src={image} alt="poster" />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/movie/${id}`} className="card-title">
          {original_title}
          <div className="badge badge-neutral">{popularity}</div>
        </Link>
        <p>{overview.length > 70 ? overview.slice(0, 70) + "..." : overview}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            Release Date: {release_date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
