import React from "react";
import { languages, skills, tools } from "../../data/skills";

const Skills = () => {
  return (
    <>
      <section id="skills-section">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-secondary fw-bolder mb-4">Skills</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-tools"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">
                          Professional Skills
                        </span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
                      {skills &&
                        skills.map((item, index) => (
                          <div key={index} className="col">
                            <div className="bg-light rounded-4 h-100 p-3">
                              <div>{item.name}</div>
                              <div className="small text-muted">
                                {item.description ?? "N/A"}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">
                          Stack Languages
                        </span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
                      {languages &&
                        languages.map((item, index) => (
                          <div key={index} className="col">
                            <div className="bg-light rounded-4 h-100 p-3">
                              <div>{item.name}</div>
                              <div className="small text-muted">
                                {item.description ?? "N/A"}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-gear"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">Tools</span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
                      {tools &&
                        tools.map((item, index) => (
                          <div key={index} className="col">
                            <div className="bg-light rounded-4 h-100 p-3">
                              <div>{item.name}</div>
                              <div className="small text-muted">
                                {item.description ?? "N/A"}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
