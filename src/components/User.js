import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="m-4 p-4 bg-slate-300 rounded-lg">
      <h2>Count : {count}</h2>
      <h2>{name}</h2>
      <h2>Location : Jaipur</h2>
      <h2>Contact : sonijayesh12345@gmail.com</h2>
    </div>
  );
};

export default User;
