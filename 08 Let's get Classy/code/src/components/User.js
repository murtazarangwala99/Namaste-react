import React, { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <>
      <div className="user-card">
        <h1>Count: {count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h3>@mkaizar95</h3>
      </div>
    </>
  );
};
export default User;
