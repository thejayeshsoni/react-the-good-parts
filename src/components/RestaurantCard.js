const RestaurentCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-100 hover:bg-gray-300">
      <img
        className="w-60 rounded-lg"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          resData?.info?.cloudinaryImageId
        }
      />
      <h3 className="font-bold py-1 text-lg">{resData?.info?.name}</h3>
      <h4>{resData?.info?.cuisines.join(", ")}</h4>
      <h4>{resData?.info?.areaName}</h4>
      <h4>{resData?.info?.costForTwo}</h4>
      <h4>{resData?.info?.avgRating}</h4>
    </div>
  );
};

export default RestaurentCard;
