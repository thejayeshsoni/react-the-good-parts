import { useEffect, useState } from "react";

const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${restaurantId}`
    );
    const res = await data.json();
    setResInfo(res.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
