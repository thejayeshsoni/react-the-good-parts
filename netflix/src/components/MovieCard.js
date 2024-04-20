import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ release_date, poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={IMAGE_CDN_URL.concat(poster_path)}></img>
    </div>
  );
};

export default MovieCard;
