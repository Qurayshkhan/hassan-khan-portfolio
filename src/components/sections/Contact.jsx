import React from "react";

const Contact = () => {
  return (
    <section className="py-5" id="contact-section">
      <div className="container-fluid px-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">
              Let's work together!
            </p>
          </div>
          <div className="row gx-5">
            <div className="col-12">
              <div className="mb-0">
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
                  <div className="d-flex align-items-center">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <h5 className="fw-bolder mb-0">
                      <a
                        href="tel:+923090257859"
                        className="text-decoration-none"
                      >
                        <span className="text-gradient text-small-screen">
                          Call & Text: +923090257859
                        </span>
                      </a>
                    </h5>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <h5 className="fw-bolder mb-0">
                      <a
                        href="mailto:webdevhassankhan@gmail.com"
                        className="text-decoration-none"
                      >
                        <span className="text-gradient text-small-screen">
                          Email: webdevhassankhan@gmail.com
                        </span>
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
