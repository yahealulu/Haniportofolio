import React, { useEffect, useState } from 'react';
import './Header.css';
import personal from '../../assets/icons/personal.svg';
import htmlIcon from '../../assets/icons/html.svg';
import cssIcon from '../../assets/icons/css.svg';
import tailwindIcon from '../../assets/icons/wave.svg';
import jsIcon from '../../assets/icons/js.svg';
import reactIcon from '../../assets/icons/react.svg';
import sassIcon from '../../assets/icons/sass.svg';

const Header = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  return (
    <div className="div">
      <div className={`div-2 ${showIcons ? 'hidden' : ''}`}>
        <img loading="lazy" src={htmlIcon} className="img" />
        <img loading="lazy" src={cssIcon} className="img-2" />
      </div>
      <div className="div-3">
        <div className="div-4">
          <div className={`div-5 ${showIcons ? 'hidden' : ''}`}>
            <div className="column">
              <img loading="lazy" src={tailwindIcon} className="img-3" />
            </div>
            <div className="column-2">
              <img loading="lazy" src={jsIcon} className="img-4" />
            </div>
          </div>
        </div>
        <div className="div-6">
          Front-End React Developer
          <br />
        </div>
        <div className="div-7">
          Hi, I am Hani Hadid, a passionate Front-End Developer from Syria{' '}
        </div>
        <div className="div-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03e7ba0aa08a8c3f3718873dc91e16c82ddac7f7bb0002c3501ade7f52ffc25e?"
            className="img-5"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/508ee2b141df631709d5268967900f0cf5dd9ad7ed83eeabd1714179e4743ac6?"
            className="img-6"
          />
        </div>
        <div className="div-9">
          <div className="div-10">Tech stack</div>
          
          {showIcons && (
            <div className="icon-container">
              <img loading="lazy" src={htmlIcon} className="img" />
              <img loading="lazy" src={cssIcon} className="img-2" />
              <img loading="lazy" src={tailwindIcon} className="img-3" />
              <img loading="lazy" src={jsIcon} className="img-4" />
              <img loading="lazy" src={reactIcon} className="img-8" />
              <img loading="lazy" src={sassIcon} className="img-9" />
            </div>
          )}
        </div>
      </div>
      <div className="div-12">
        <div className="div-13">
          <div className="column-3">
            <img loading="lazy" src={personal} className="img-7" />
          </div>
          <div className="column-4">
            <div className="div-14">
              <img loading="lazy" src={reactIcon} className="img-8" />
              <img loading="lazy" src={sassIcon} className="img-9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
