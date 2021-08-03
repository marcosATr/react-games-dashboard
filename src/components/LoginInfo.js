import React from 'react';
import './LoginInfo.css';
import { Link } from 'react-router-dom';

function LoginInfo({ setStyles }) {
  return (
    <>
      <div className={`flex center row loginInfo ${setStyles}`}>
        <Link to="/cadastrar" className="font-small white tdn">
          Cadastrar
        </Link>
        <img
          className="ml1"
          src={
            'https://images.generated.photos/bICj2peGK5OTk520i_NHAhNZXav5mmOmiqNiU4NHjh4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAwMDYzMTIuanBn.jpg'
          }
        />
      </div>
    </>
  );
}

export default LoginInfo;
