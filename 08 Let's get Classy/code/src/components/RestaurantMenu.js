import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://corsproxy.io/?" + MENU_API + resId);
    const json = await data.json();
    console.log("RestaurantMenu: ", json);
    setResInfo(json.data);
    // setResInfo(json.data?.cards[0]?.card?.card?.info);
    // console.log("Res Info: ", resInfo);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  // object►data►cards►2►groupedCard►cardGroupMap->REGULAR-cards-2-card-card-itemCards-

  //   console.log(
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  //   );

  console.log("DDDD");

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - Rs. {item.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
