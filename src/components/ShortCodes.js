import React from "react";
import { bcgRED } from "./shortCodes.module.css";

const ShortCodes = ({ children }) => {
  return (
    <>
      <div className={bcgRED}>{children}</div>
    </>
  );
};

export default ShortCodes;
