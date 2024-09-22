import React from 'react';
import './Portofolio.css';
import ErickCoffe from '../../assets/ErickCoffe.svg'
import Chicken from '../../assets/Chickensvg.svg'
import Elevate from '../../assets/Elevate.svg'
import Gitpic from '../../assets/ABOUT.svg'
const Portfolio = () => {
  return (
    <div className="card">
      <div className="portfolio-title">Portfolio </div>
      <div className="portfolio-description">
        I would like to present my portfolio for your consideration.
      </div>
      <div className="project-section">
        <div className="project">
          <div className="project-image-column">
            <img
              loading="lazy"
              src={ErickCoffe}
              className="project-image"
            />
          </div>
          <div className="project-details-column">
            <div className="project-details">
              <div className="project-title">Erick Coffee </div>
              <div className="project-description">
                The website features a modern and sleek design, showcasing
                Erick Coffee's products and brand story.
              </div>
              <div className="tech-stack">
                <div className="tech-item">React</div>
                <div className="tech-item">SCSS</div>
              </div>
              <div className="project-links">
                <div className="project-link">
                  <img
                    loading="lazy"
                    src={Gitpic}
                    className="project-link-image"
                  />
                  Code
                </div>
                <div className="live-demo">
                  <div className="live-demo-text">Live Demo</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/488761a7a5b43f2eaf72e956bd465c1ea4da11a3856f78094b3a8d2f70eb013b?"
                    className="live-demo-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-section">
        <div className="project">
          <div className="project-details-column">
            <div className="project-details">
              <div className="project-title">Chicken</div>
              <div className="project-description">
                I designed a website for the restaurant Chicken, featuring an
                elegant and user-friendly interface to showcase their menu
                offerings and services.
              </div>
              <div className="tech-stack">
                <div className="tech-item">React</div>
                <div className="tech-item">SCSS</div>
              </div>
              <div className="project-links">
                <div className="project-link">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="project-link-image"
                  />
                  Code
                </div>
                <div className="live-demo">
                  <div className="live-demo-text">Live Demo</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb5b7b0a134540a46c78e20839692e54ab49b6ae62b23eb87aec87bc8ebbe56a?"
                    className="live-demo-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-image-column">
            <img
              loading="lazy"
              src={Chicken}
              className="project-image"
            />
          </div>
        </div>
      </div>
      <div className="project-section">
        <div className="project">
          <div className="project-image-column">
            <img
              loading="lazy"
              src={Elevate}
              className="project-image"
            />
          </div>
          <div className="project-details-column">
            <div className="project-details">
              <div className="project-title">Elevate </div>
              <div className="project-description">
              I crafted a website for Elevate Airlines that prioritizes both sophistication and ease of use. This user-friendly interface will seamlessly showcase our flight destinations, services, and booking options.
              </div>
              <div className="tech-stack">
                <div className="tech-item">React</div>
                <div className="tech-item">SCSS</div>
              </div>
              <div className="project-links">
                <div className="project-link">
                  <img
                    loading="lazy"
                    src={Gitpic}
                    className="project-link-image"
                  />
                  Code
                </div>
                <div className="live-demo">
                  <div className="live-demo-text">Live Demo</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/488761a7a5b43f2eaf72e956bd465c1ea4da11a3856f78094b3a8d2f70eb013b?"
                    className="live-demo-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
