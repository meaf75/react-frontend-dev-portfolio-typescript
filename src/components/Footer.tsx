import React, { Component, useContext } from "react";
import { StateContext } from "../store/store";

const Footer = () => {

  const { translation } = useContext(StateContext);

  const networks = translation.social.map((network,i) => {
    return (
      <span key={i} className="m-4">
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <span className={`mdi mdi-${network.materialIcon}`} style={{ fontSize: 30 }}></span>
        </a>
      </span>
    );
  });

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>Copyright &copy;{" "}{translation.myName}</small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
