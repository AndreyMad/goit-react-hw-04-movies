import Spinner from "react-loader-spinner";
import React from "react";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.overlay}>
      <Spinner type="Puff" color="#00BFFF" height={60} width={60} />
    </div>
  );
};

export default Loader;
