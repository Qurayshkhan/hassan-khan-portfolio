import React from "react";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section className="py-5" id="project-section">
      <div className="container px-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Projects</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {projects &&
              projects.map((item, index) => {
                return (
                  <div
                    className="card overflow-hidden shadow rounded-4 border-0 mb-5"
                    key={index}
                  >
                    <div className="card-body p-0">
                      <div className="row project-item">
                        <div className="col-md-6 p-5">
                          <a
                            href={item.link}
                            className="text-decoration-none"
                            target="__blank"
                          >
                            <h2 className="fw-bolder">{item.name}</h2>
                          </a>
                          <p>{item.description}</p>
                        </div>
                        <div className="col-md-6">
                          <div className="project-img">
                            <img src={item.image} alt="project" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
