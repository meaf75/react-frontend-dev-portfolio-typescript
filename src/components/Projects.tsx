import React, { Component, useContext, useState } from "react";
import { IProject } from "../constants/TranslationTypes";
import { StateContext } from "../store/store";
import ProjectDetailsModal from "./ProjectDetailsModal";

export const Projects = () => {
  
  const { translation } = useContext(StateContext);
  const [projectModalData, setProjectModalData ] = useState<IProject | null>(null);

  const MyProjectsData = translation.projects;

  const detailsModalShow = (data : IProject) => {
    setProjectModalData(data)
  };

  const detailsModalClose = () => setProjectModalData(null);

  const projectsComponents = MyProjectsData.map(function (projects) {
    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={projects.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => detailsModalShow(projects)}>
            <div>
              <img
                src={projects.images[0]}
                alt="projectImages"
                height="230"
                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
              />
              <span className="project-date">{projects.year}</span>
              <br />
              <p className="project-title-settings mt-3">
                {projects.title}
              </p>
            </div>
          </div>
        </span>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{translation.projectsSectionTitle}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projectsComponents}</div>
        </div>
        <ProjectDetailsModal
          show={!!projectModalData}
          onHide={detailsModalClose}
          data={projectModalData as IProject}
        />
      </div>
    </section>
  )
}

export default Projects;
