import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const resInfo = useRestaurantMenu(restaurantId);

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
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>
        {name}, {areaName}, {city}
      </h1>
      <h3>{slugString}</h3>
      <h2>{cuisines.join(", ")}</h2>
      <h3>Open : {availability.opened ? "YES" : "NO"}</h3>
      <h3>Rating : {avgRating}</h3>
      <h3>Cost : {costForTwoMessage}</h3>
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
      </ul>
    </div>
  );
};

export default RestaurantMenu;
