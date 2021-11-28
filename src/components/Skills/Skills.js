import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div className=' '>
      <h1 class='title'>Skills</h1>

      <div class='containers'>
        <div class='button-container'>
          <a href='#' class='cards'>
            <p>
              <i class='fab fa-laravel cards-icon'></i>
            </p>
            <p class='cards-title'>Laravel</p>
          </a>
        </div>

        <div class='button-container'>
          <a href='#' class='cards'>
            <p>
              <i class='fab fa-react cards-icon'></i>
            </p>
            <p class='cards-title'>React Js</p>
          </a>
        </div>

        <div class='button-container'>
          <a href='#' class='cards'>
            <p>
              <i class='fab fa-js-square cards-icon'></i>
            </p>
            <p class='cards-title'>JavaScript</p>
          </a>
        </div>

        <div class='button-container'>
          <a href='#' class='cards'>
            <p>
              <i class='fab fa-php cards-icon'></i>
            </p>
            <p class='cards-title'>php</p>
          </a>
        </div>

        <div class='button-container'>
          <a href='#' class='cards'>
            <p>
              <i class='fab fa-bootstrap cards-icon'></i>
            </p>
            <p class='cards-title'>Bootstrap</p>
          </a>
        </div>

        <div class='button-container'>
          <a href='#' class='cards'>
            <p>
              <i class='fab fa-css3-alt cards-icon'></i>
            </p>
            <p class='cards-title'>Css</p>
          </a>
        </div>

        <div class='button-container'>
          <a href='#' class='cards'>
            <p>
              <i class='fab fa-html5 cards-icon'></i>
            </p>
            <p class='cards-title'>Htmll 5</p>
          </a>
        </div>

        <div class='button-container'>
          <a href='#' class='cards'>
            <p>
              <i class='fa fa-code cards-icon'></i>
            </p>
            <p class='cards-title'>Code</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
