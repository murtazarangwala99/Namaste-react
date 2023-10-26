import React from "react";
import ReactDOM from "react-dom/client";

/* 
02: Create a `Header Component` from scratch using `Functional Component` with JSX

- Add a `Logo on Left`
- Add a `search bar in middle`
- Add `User icon on right`
- Add `CSS to make it look nice`
*/

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <img
            className="logo"
            src="https://www.bairesdev.com/wp-content/uploads/2022/06/Picture6-1.svg"
            alt="logo"
          />
        </div>
        <div className="search">
          <input className="searchbar" type="text" placeholder="Search anything " />
          <button className="sub-btn">Submit</button>
        </div>
        <div className="person">
          <img
            className="personimg"
            src="https://www.iconbolt.com/preview/facebook/ionicons-regular/person.svg"
            alt="person"
          />
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
