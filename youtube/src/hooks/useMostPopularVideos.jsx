import { CONSTANTS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMostPopularVideos } from "../utils/store/appSlice";
import { useEffect } from "react";

const useMostPopularVideos = () => {
  const dispatch = useDispatch();
  const mostPopularVideos = useSelector((store) => store.app.mostPopularVideos);

  const getMostPopularVideos = async () => {
    const data = await fetch(CONSTANTS.YOUTUBE_API_URL);
    const json = await data.json();
    dispatch(addMostPopularVideos(json.items));
  };

  useEffect(() => {
    !mostPopularVideos && getMostPopularVideos();
  }, []);
};

export default useMostPopularVideos;
