import React from "react";
import { education } from "../../data/education";
const Education = () => {
  return (
    <>
      <section id="education-section">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-secondary fw-bolder mb-4">Education</span>
            </h1>
          </div>
          {education &&
            education.map((item, index) => {
              return (
                <div className="row gx-5 justify-content-center" key={index}>
                  <div className="col-lg-11 col-xl-9 col-xxl-8">
                    <div className="card shadow border-0 rounded-4 mb-5">
                      <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                          <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                              <div className="text-secondary fw-bolder mb-2">
                                {item?.year ?? "N/A"}
                              </div>
                              <div className="mb-2">
                                <div className="small fw-bolder">
                                  {item.collage ?? "N/A"}
                                </div>
                                <div className="small text-muted">
                                  {item.location}
                                </div>
                              </div>
                              <div className="fst-italic">
                                <div className="small text-muted">
                                  {item.degree}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div>{item?.description ?? "N/A"}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Education;
