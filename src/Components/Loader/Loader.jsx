import React from "react";
import "../Loader/Loader.css";
import LoadingImg from "../Loader/Loading_GIF.gif";

const Loader = () => {
  return (
    <div className="loader-main flexColCenter  ">
      <img src={LoadingImg} alt="" />
    </div>
  );
};

export default Loader;
