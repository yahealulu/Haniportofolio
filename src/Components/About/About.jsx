import React from 'react';
import './About.css';
import about from '../../assets/ABOUT.svg'
const About = () => {
  return (
 <>
<div className="div-15">
  <div className="div-16">
    <div className="div-17">
      <img
        loading="lazy"
        src={about}
        className="img10"
      />
    </div>
    <div className="div-18">
      <div className="div-19">
        <div className="div-20">
          About me <br />
        </div>
        <div className="div-21">
          Hello, I'm Hani, a Frontend Developer who is dedicated to
          crafting sleek UI/UX experiences for users. Currently, I
          primarily work with React/Next.js, Tailwind CSS, and TypeScript
          in my projects.
          <br />
        </div>
      </div>
    </div>
  </div>
</div>

 </>
  );
};

export default About;
