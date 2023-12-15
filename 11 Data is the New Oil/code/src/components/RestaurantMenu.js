import React, { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(categories);
  return (
    <div className="text-center ">
      <h1 className="font-bold text-3xl mb-4 underline">{name}</h1>
      <p className="font-medium">{cuisines.join(", ")}</p>
      <p className="font-medium">{costForTwoMessage}</p>

      {/* Categories Accordian */}
      {/* This is the Controlled Component */}
      {categories.map((category, index) => (
        <RestaurantMenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          // showItems={index === 0 ? true : false}
          showItems={index === showIndex ? true : false}
          // setShowIndex={() => setShowIndex(index)}
          setShowIndex={(index) => {
            console.log(index);
            setShowIndex(index);
          }}
          index={index}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
