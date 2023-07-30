// import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      {/* <User name="Jayesh's => Functional Component" /> */}
      {/* <UserClass name="Jayesh's => Class Based Component" location="Jaipur" /> */}
      <UserClass />
    </div>
  );
};

export default About;
