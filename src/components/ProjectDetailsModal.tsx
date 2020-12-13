import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import { IProject } from "../constants/TranslationTypes";

export interface IProjectDetailsModalProps {
  show: boolean;
  data: IProject;
  onHide: () => void
}

const ProjectDetailsModal = (props: IProjectDetailsModalProps) => {

  if (!props.show)
    return null

  const images = props.data.images;

  const img = images.map((elem, i) => {
    return (
      <img key={i} src={elem} width='100%' height='100%' />
    )
  });

  const tech = props.data.technologies.map((t, i) => {
    return (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center">
            <span className={`mdi mdi-${t.materialIcon}`} style={{ fontSize: 40 }}></span>
            <p className="text-center">{t.name}</p>
          </div>
        </span>
      </li>
    );
  });

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
      {...props}
    >
      <span onClick={props.onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>{" "}
               &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{" "}
               &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>

          <Slider
            // autoplay
            className="slider-image"
            dots
            adaptiveHeight
            autoplay
          >
            {img}
          </Slider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {props.data.title}
            {props.data.link ? (
              <a
                href={props.data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            ) : null}
          </h3>
          <p className="modal-description">{props.data.description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProjectDetailsModal;
