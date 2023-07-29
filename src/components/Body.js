import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
  // Normal Variable
  // let listOfRestaurents = [
  //   {
  //     info: {
  //       id: "45607",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "gzobptvged4mzsk4vnfx",
  //       areaName: "Sodala",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 4.9,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "45608",
  //       name: "Romino's Pizza",
  //       cloudinaryImageId: "gzobptvged4mzsk4vnfx",
  //       areaName: "Sodala",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 3.9,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "45609",
  //       name: "KFC",
  //       cloudinaryImageId: "gzobptvged4mzsk4vnfx",
  //       areaName: "Sodala",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 4.1,
  //     },
  //   },
  // ];

  //Local State Variable
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRes(listOfRes.filter((res) => res.info.avgRating > 4));
            // listOfRestaurents = listOfRestaurents.filter(
            //   (res) => res.info.avgRating > 4
            // );
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
