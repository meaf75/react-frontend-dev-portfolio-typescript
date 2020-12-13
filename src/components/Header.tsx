import React, { Component, useContext, useState } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { DATA_THEME_ATTRIBUTE } from "../constants/DataThemeAttribute";
import { StateContext } from "../store/store";

export const Header = () => {

  const { translation } = useContext(StateContext);
  const [checked,setChecked] = useState(false);
  
  const onThemeSwitchChange = (checked : boolean) => {
    setChecked(checked);

    var body = document.body;
    var newTheme = body.getAttribute(DATA_THEME_ATTRIBUTE) === "dark" ? "light" : "dark";
    body.setAttribute(DATA_THEME_ATTRIBUTE, newTheme);
  }

  return (
    <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div className="row aligner" style={{height: '100%'}}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br/>
            <h1 className="mb-0">
              <Typical steps={[translation.myName]} wrapper="p"/>
            </h1>
            <Typical className="title-styles" steps={[translation.myRole]} wrapper="p" />
            <Switch 
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
