import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();
  return <div>GenreList</div>;
};

export default GenreList;
