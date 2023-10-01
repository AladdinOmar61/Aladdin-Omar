import React from "react";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__container">
        <div className="project project-1">
          <div className="project__side project__side-front">
            <div className="project__pic-1">&nbsp;</div>
            <div className="project__info">
              <p className="project__desc margin-top-medium">
                Collaboration project with UX design team to redesign Peter
                Pan's Donut and Pastry Shop's original website.
              </p>
              <div className="langs">
                <img
                  className="langs-img"
                  src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
                  alt="css"
                />
                <img
                  className="langs-img"
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  alt="react"
                />
              </div>
            </div>
          </div>
          <div className="project__side project__side-back">
            <a
              className="project__link"
              href="http://peterpan.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
            <a
              className="project__github"
              href="https://github.com/AladdinOmar61/peter-pan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project project-2">
          <div className="project__side project__side-front">
            <div className="project__pic-2">&nbsp;</div>
            <div className="project__info">
              <p className="project__desc margin-top-medium">
                JOUJOU is an apparel company that sells womens jackets and pants
                and are available in all retail stores in the country.
              </p>
              <div className="langs">
                <img
                  className="langs-img"
                  src="https://th.bing.com/th/id/OIP.6TPtbsN2PGlh8m2SZY541wHaHa?pid=ImgDet&rs=1"
                  alt="shopify"
                />
              </div>
            </div>
          </div>
          <div className="project__side project__side-back">
            <a
              className="project__link"
              href="https://joujou.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project__side project__side-front">
            <div className="project__pic-3">&nbsp;</div>
            <div className="project__info">
              <p className="project__desc margin-top-medium">
                Rick and Morty based social media app that lets you learn about
                the characters from the Adult Swim Series{" "}
                <span>Rick and Morty.</span> Look through the list of characters
                on the RicPics page then search the character by ID number on
                the search link for more details!
              </p>
              <div className="langs">
                <img
                  className="langs-img"
                  src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
                  alt="css"
                />
                <img
                  className="langs-img"
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  alt="react"
                />
                <img
                  className="langs-img"
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/api-development-3-805959.png"
                  alt="API"
                />
              </div>
            </div>
          </div>
          <div className="project__side project__side-back">
            <a
              className="project__link"
              href="http://ricpic-and-mortyschmorty.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
            <a
              className="project__github"
              href="https://github.com/AladdinOmar61/project-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
