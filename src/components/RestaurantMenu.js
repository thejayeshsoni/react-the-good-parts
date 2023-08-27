import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurentCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  // prop drilling eg.
  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(restaurantId);

  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    areaName,
    availability,
    avgRating,
    city,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    labels,
    slugString,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {name}, {areaName}, {city}
      </h1>
      <h3>{slugString}</h3>
      <h3 className="font-semibold text-lg">
        {cuisines.join(", ")} Cost : {costForTwoMessage}
      </h3>
      {/* <h3>Open : {availability.opened ? "YES" : "NO"}</h3>
      <h3>Rating : {avgRating}</h3>
      <h3></h3>
      <h3>{labels[1].title + " : " + labels[1].message}</h3>
      <h3>Ratings {totalRatingsString}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name + " Rs. " + item.card.info.price / 100 ||
              item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurentCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
