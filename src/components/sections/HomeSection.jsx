import React from "react";

import { Link } from "react-router-dom";
const HomeSection = () => {
  return (
    <section className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">About Me</span>
              </h2>
              <p className="lead fw-light mb-4">
                My name is <strong>Hassan khan</strong> and I help brands grow.
              </p>
              <p className="text-muted">
                I’m a passionate Web Developer with over 3+ years of hands-on
                experience building modern, scalable web applications. I
                specialize in Laravel, Vue.js, and React.js, and I love crafting
                clean, efficient code that solves real-world problems. Whether
                it's developing robust backends with Laravel, building dynamic
                frontends with Vue or React, or integrating APIs and third-party
                services, I focus on delivering high-quality digital experiences
                that help brands grow and succeed online. Let’s build something
                great together.
              </p>
              <div className="d-flex justify-content-center fs-2 gap-4">
                <Link
                  className="text-gradient"
                  to="https://x.com/HassanKhan0309?t=CTdo0Sy5QMmR50dXjIHcNw&s=09"
                >
                  <i className="bi bi-twitter"></i>
                </Link>
                <a
                  className="text-gradient"
                  href="https://www.linkedin.com/in/hassan-khan-75968b217/"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  className="text-gradient"
                  href="https://github.com/Qurayshkhan"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
