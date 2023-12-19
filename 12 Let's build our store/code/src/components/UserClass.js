import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "mm",
        location: "mm",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/murtazarangwala99");
    const json = await data.json();

    console.log("Fetched Data: ", json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, html_url } = this.state.userInfo;

    return (
      <div className="flex flex-col p-4 border-2 border-black">
        <img src={avatar_url} alt="profile-pic" width="200px" />
        <h2>Name: {name}</h2>
        <h3>Location: {location} </h3>
        <button className="bg-blue-300 py-2 text-gray-100 hover:underline">
          <a href={html_url}>Profile</a>
        </button>

        {/* <a href={html_url}>Profile</a> */}
      </div>
    );
  }
}
export default UserClass;
