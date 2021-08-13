import React from "react";
import "./LoginInfo.css";
import { Link } from "react-router-dom";

function LoginInfo({ setStyles }) {
  return (
    <>
      <div className={`flex center row loginInfo ${setStyles}`}>
        <Link to="/cadastrar" className="font-small white tdn">
          Cadastrar
        </Link>
        <img className="ml1" src={"faceimage.png"} />
      </div>
    </>
  );
}

export default LoginInfo;
