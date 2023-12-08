import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_LINK } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?" + API_LINK);
    const json = await data.json();
    // console.log(json);

    const restaurant_list =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    console.log("All RestaurantList: ", restaurant_list);
    setList(restaurant_list);
    setFilterList(restaurant_list);
  };
  if (list.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h1>Looks Like You are offline!! Please Check your Internet Connection</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter((res) => res.info.avgRating > 4);
            // setList(filteredList);
            setFilterList(filteredList);
          }}>
          Top Rated Restaurants
        </button>

        <div className="search-div">
          <input
            type="text"
            placeholder="Search a restaurant..."
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn btn-search"
            onClick={() => {
              const filteredRestaurant = list.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filteredRestaurant);
              console.log("FilteredRestaurant Array: ", filteredRestaurant);
              console.log("Filtered List: ", list);
            }}>
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {/* <RestaurantCard restaurantData={restaurantList.data} /> */}

        {filterList.map((res) => {
          const keys = res?.info;
          return (
            <Link key={keys.id} to={"/restaurant/" + keys.id}>
              {" "}
              <RestaurantCard {...res.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
/* 
object►data►cards►2►card►card►gridElements►infoWithStyle►restaurants►0►info►id
*/

export default Body;
