import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("Header rendered");

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);
  return (
    <div className="flex  justify-between bg-blue-100 shadow-lg mb-2">
      <div className="mt-1 px-1">
        <img
          className="w-20"
          src="data:image/png;base64,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"
          draggable="false"
          alt="app-logo"
        />
      </div>
      <div className="flex align-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="bg-green-100 rounded-lg px-2 hover:shadow-lg"
            onClick={() => {
              btnName.toLowerCase() === "login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
