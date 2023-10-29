import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  function filterData(query, list) {
    const filterData = list.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(query.toLowerCase())
    );
    return filterData;
  }
  const [list, setList] = useState(restaurantList);
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn"
          onClick={() => {
            const filteredList = list.filter((res) => res.data.avgRating > 4);
            setList(filteredList);
            console.log(filteredList);
          }}>
          Top Rated Restaurants
        </button>
        <div>
          <input
            type="text"
            placeholder="Search a restaurant..."
            className="search-box"
            value={query}
            onChange={handleInput}
          />
          <button
            className="btn btn-search"
            onClick={() => {
              const data = filterData(query, restaurantList);
              setList(data);
            }}>
            Search
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            setList(restaurantList);
            console.log(restaurantList);
          }}>
          Show All Restaurant
        </button>
      </div>
      <div className="res-container">
        {list.map((res) => {
          return <RestaurantCard key={res.data.id} {...res.data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
