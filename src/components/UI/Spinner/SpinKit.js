import React from "react";
import { useSelector } from "react-redux";

import Backdrop from "./Backdrop";
import "./Spinner.css";

function Spinner() {
  const { isOpen } = useSelector(state => state.spinner);

  if (!isOpen) return;

  return (
    <Backdrop>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </Backdrop>
  );
}

export default Spinner;
