import React, { useEffect, useState } from "react";
import VideoCard from "./Videocard";
import { CONSTANTS } from "../../../utils/constant";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [mostPopularVideos, setMostPopularVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(CONSTANTS.YOUTUBE_API_URL);
    const videos = await data.json();
    // console.log("videos", videos);
    setMostPopularVideos(videos.items);
  };

  return (
    <div className="flex flex-wrap">
      {mostPopularVideos.map((video) => (
        <Link key={video["id"]} to={"/watch?v=".concat(video.id)}>
          <VideoCard
            title={video["snippet"]["title"]}
            channelTitle={video["snippet"]["channelTitle"]}
            thumbnails={video["snippet"]["thumbnails"]}
            statistics={video["statistics"]}
          />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
