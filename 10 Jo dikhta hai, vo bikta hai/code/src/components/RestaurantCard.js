import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ name, cuisines, avgRating, costForTwo, cloudinaryImageId }) => {
  // console.log(restaurantData.name);
  return (
    <div className="flex flex-col bg-slate-200 hover:bg-green-200 hover:shadow-xl rounded-xl ">
      <img className="w-60 rounded-t-lg" src={CDN_URL + cloudinaryImageId} alt="food-img" />
      <div className="w-60 h-44 p-2">
        <h3 className="font-bold underline">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating : {avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
