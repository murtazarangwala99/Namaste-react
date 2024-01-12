import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_LINK } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);
  // const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://corsproxy.io/?" + API_LINK);
    const data = await fetch("https://thingproxy.freeboard.io/fetch/" + API_LINK);
    const json = await data.json();
    console.log(json);

    const restaurant_list =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    // console.log("All RestaurantList: ", restaurant_list);
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
    <div className="flex flex-col mb-12">
      <div className="flex justify-between mx-6 mb-6">
        <button
          className="bg-blue-500 px-4 py-2 rounded-md text-white hover:underline"
          onClick={() => {
            const filteredList = list.filter((res) => res.info.avgRating > 4);
            // setList(filteredList);
            setFilterList(filteredList);
          }}>
          Top Rated Restaurants
        </button>

        <div>
          <input
            type="text"
            placeholder="Search a restaurant..."
            data-testid = "searchInput"
            className="border-2 border-black rounded-md px-3 py-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 mx-2 px-4 py-2 rounded-md text-white hover:underline"
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

        {/* <div>
          <label>User Name : </label>
          <input
            type="text"
            className="border border-black rounded-md px-2 py-1"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div> */}
      </div>

      <div className="flex flex-wrap gap-5 mx-24">
        {/* <RestaurantCard restaurantData={restaurantList.data} /> */}

        {filterList.map((res) => {
          // console.log(res)
          const keys = res?.info;
          return (
            <Link key={keys?.id} to={"/restaurant/" + keys?.id}>
              {res?.info?.veg ? (
                <RestaurantCardPromoted {...res.info} />
              ) : (
                <RestaurantCard {...res.info} />
              )}
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
