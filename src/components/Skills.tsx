import React, { Component, useContext } from "react";
import { StateContext } from "../store/store";

const Skills = () => {

  const { translation } = useContext(StateContext);

  var skills = translation.skills.map(function (skill, i) {
    return (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-tile">
            <span className={`mdi mdi-${skill.materialIcon}`} style={{ fontSize: 40 }}></span>
            <p className="text-center">{skill.name}</p>            
          </div>
        </span>
      </li>
    );
  });

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{translation.skillsSectionTitle}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </div>
    </section>
  );

}

export default Skills;
