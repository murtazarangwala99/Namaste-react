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
      <div className="user-card">
        <img src={avatar_url} alt="profile-pic" width="200px" />
        <h2>Name: {name}</h2>
        <h3>Location: {location} </h3>
        <button>
          <a href={html_url}>Profile</a>
        </button>

        {/* <a href={html_url}>Profile</a> */}
      </div>
    );
  }
}
export default UserClass;
