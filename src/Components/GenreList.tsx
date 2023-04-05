import React from "react";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenres();
  return <div>GenreList</div>;
};

export default GenreList;
