import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      userInfo: {
        username: "Dummy UserName",
        name: "Dummy Name",
        location: "Dummy location",
      },
    };

    console.log("Constructor is called..!!");
  }

  async componentDidMount() {
    console.log("Component Did Mount is called..!!");
    const userData = await fetch("https://api.github.com/users/thejayeshsoni");
    const userJson = await userData.json();
    this.setState({
      userInfo: userJson,
    });
  }

  componentDidUpdate() {
    console.log("Component Did update is called..!!");
  }

  componentWillUnmount() {
    console.log("Component will unmount is called..!!");
  }

  render() {
    // const { name, location } = this.props;
    const { count } = this.state;

    const { name, location, login, avatar_url } = this.state.userInfo;

    console.log("Render is called..!!");
    return (
      <div className="user-card">
        <h2>Count : {count}</h2>
        <div className="count-btn">
          <button
            onClick={() => {
              this.setState({
                count: count + 1,
              });
            }}
          >
            Count++
          </button>
          <button
            onClick={() => {
              this.setState({
                count: 0,
              });
            }}
          >
            Reset
          </button>
        </div>
        <img src={avatar_url} className="github-image" />
        <h2>username : {login}</h2>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
      </div>
    );
  }
}
export default UserClass;

/**
 *
 * --- Mounting Phase ---
 * constructor (dummy data)
 * render (dummy data)
 *      <HTML loaded with dummy data>
 * componentDidMount
 *      <API calls>
 *      <this.setState>  -> state variable is updated
 *
 *  --- Update Phase ---
 *      render (with api data)
 *      <HTML loaded with updated data>
 *      componentDidUpdate
 */
