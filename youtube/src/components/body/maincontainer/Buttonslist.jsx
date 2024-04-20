import React from "react";
import { CONSTANTS } from "../../../utils/constant";
import Button from "./Button";

const Buttonslist = () => {
  return (
    <div className="flex">
      {CONSTANTS.VIDEO_CATEGORY.map((vid_cat) => (
        <Button key={vid_cat.id} btnName={vid_cat.btnName} />
      ))}
    </div>
  );
};

export default Buttonslist;
