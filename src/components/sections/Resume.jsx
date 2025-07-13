import React from "react";

import { experience } from "../../data/experience";
const Resume = () => {
  return (
    <section id="resume-section">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4 experience-heading">
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>

                <a
                  className="btn btn-primary px-4 py-3"
                  href="/assets/resume/hassan_khan_resume.pdf"
                  download
                >
                  <div className="d-inline-block bi bi-download me-2"></div>
                  Download Resume
                </a>
              </div>
              {experience &&
                experience.map((item, index) => {
                  return (
                    <div
                      className="card shadow border-0 rounded-4 mb-5"
                      key={index}
                    >
                      <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                          <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                              <div className="text-primary fw-bolder mb-2">
                                {item?.year ?? "N/A"}
                              </div>
                              <div className="small fw-bolder">
                                {item?.role ?? "N/A"}
                              </div>
                              <div className="small text-muted">
                                {item?.company ?? "N/A"}
                              </div>
                              <div className="small text-muted">
                                {item?.address ?? "N/A"}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div>{item?.description ?? "N/A"}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </section>

            <div className="pb-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
