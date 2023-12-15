import React, { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantMenuCategory = ({ data, showItems, setShowIndex, index }) => {
  //   console.log(data);
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    // setShowIndex();
    showItems ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <MenuItemList items={data.itemCards} />}
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantMenuCategory;
