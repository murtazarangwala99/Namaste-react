import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ name, cuisines, avgRating, costForTwo, cloudinaryImageId }) => {
  // console.log(restaurantData.name);
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f2f2f2",
      }}>
      <img className="res-img" src={CDN_URL + cloudinaryImageId} alt="food-img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating : {avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
