import * as React from "react";
import { bcgRED } from "./ShortCodes.module.css";

const ShortCodes = ({ children }) => {
  return (
    <>
      <div className={bcgRED}>{children}</div>
    </>
  );
};

export default ShortCodes;
