import React from "react";

const Button = ({ btnName }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-300 rounded-lg">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
