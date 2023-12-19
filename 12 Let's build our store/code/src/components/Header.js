import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export default Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex mb-8 m-1 justify-between border-solid border-black border-2">
      <div className="px-4 py-2">
        <Link to="./">
          <img className="w-28 rounded-full" src={LOGO_URL} alt="food Logo" />
        </Link>
      </div>
      <div className="flex ">
        <ul className="flex items-center p-4">
          <li className="p-4 font-semibold">Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-4 hover:underline font-semibold">
            <Link to="./">Home</Link>
          </li>
          <li className="p-4 hover:underline font-semibold">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-4 hover:underline font-semibold">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-4 hover:underline font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 hover:underline font-semibold">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <li className="py-2 px-4 hover:underline font-semibold border rounded-lg">
            {loggedInUser}
          </li>
          <button
            className="py-2 px-4 m-2 hover:underline font-semibold text-white bg-blue-500 rounded-md"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

// export default Header;
