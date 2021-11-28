import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div>
      <div class='container mx-auto mt-4'>
        <div class='row'>
          <div class='col-md-4'>
            <div class='card' style={{ width: "18rem" }}>
              <img
                src='https://i.imgur.com/ZTkt4I5.jpg'
                class='card-img-top'
                alt='...'
              />
              <div class='card-body'>
                <h5 class='card-title'>Tour de</h5>
                <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn mr-2'>
                  <i class='fas fa-link'></i> Visit Site
                </a>
                <a href='#' class='btn '>
                  <i class='fab fa-github'></i> Github
                </a>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='card' style={{ width: "18rem" }}>
              <img
                src='https://i.imgur.com/ZTkt4I5.jpg'
                class='card-img-top'
                alt='...'
              />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn  mr-2'>
                  <i class='fas fa-link'></i> Visit Site
                </a>
                <a href='#' class='btn'>
                  <i class='fab fa-github'></i> Github
                </a>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='card' style={{ width: "18rem" }}>
              <img
                src='https://i.imgur.com/ZTkt4I5.jpg'
                class='card-img-top'
                alt='...'
              />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn mr-2'>
                  <i class='fas fa-link'></i> Visit Site
                </a>
                <a href='#' class='btn '>
                  <i class='fab fa-github'></i> Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
