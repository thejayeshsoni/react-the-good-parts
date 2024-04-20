import React from "react";

const Videocard = ({ title, channelTitle, thumbnails, statistics }) => {
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails["standard"]["url"]}
        draggable={false}
      />
      <ul>
        <li>{title}</li>
        <li>Channel : {channelTitle}</li>
        <li>Likes : {statistics["likeCount"]}</li>
        <li>Comments : {statistics["commentCount"]}</li>
        <li>Views : {statistics["viewCount"]}</li>
      </ul>
    </div>
    //  { <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <img
    //         class="rounded-t-lg"
    //         src={thumbnails["standard"]["url"]}
    //         width={thumbnails["standard"]["width"]}
    //         height={thumbnails["standard"]["height"]}
    //         alt=""
    //       />
    //     </a>
    //     <div class="p-5">
    //       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {title}
    //       </h5>

    //       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Likes : {statistics["likeCount"]}
    //       </p>
    //       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Comments : {statistics["commentCount"]}
    //       </p>
    //       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Views : {statistics["viewCount"]}
    //       </p>
    //     </div>
    //   </div>}
  );
};

export default Videocard;
