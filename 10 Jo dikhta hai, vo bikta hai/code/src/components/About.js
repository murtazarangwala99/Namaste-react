import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount !");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl mb-8">About Us</h1>
        {/* <User name={"Murtuza Rangwala(Functional)"} location={"Vansda"} /> */}
        <UserClass name={"1st "} location={"Vansda"} />
        {/* <UserClass name={"2nd "} location={"USA"} /> */}
        {/* <UserClass name={"3rd "} location={"Dehradun"} /> */}
      </div>
    );
  }
}
/* 
Parent Constructor
- Parent Render
  - 1st Child Contructor
  - 1st Child Render
  - 2nd Child Contructor
  - 2nd Child Render
  - 3rd Child Contructor
  - 3rd Child Render
  - 1st Child Component Did Mount !
  - 2nd Child Component Did Mount !
  - 3rd Child Component Did Mount !
- Parent Component Did Mount !
*/

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       {/* <User name={"Murtuza Rangwala(Functional)"} location={"Vansda"} /> */}
//       <UserClass name={"Murtuza Rangwala(Class)"} location={"Vansda"} />
//     </div>
//   );
// };

export default About;
