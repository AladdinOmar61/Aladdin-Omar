import React from "react";

function Projects() {
  return (
    <div>
      <h2 className="project-header">Projects</h2>
      <ul className="projects">
        <li>
          <a
            href="http://bet-ch.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BET-CH
          </a>
        </li>
        <li>
          <a
            href="http://ricpic-and-mortyschmorty.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ric Pic & Morty Schmorty
          </a>
        </li>
        <li>
          <a
            href="http://cheetohphoto.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cheetoh Photo
          </a>
        </li>
        <li>
          <a
            href="http://peterpan.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peter Pan Donuts
          </a>
        </li>
        <li>
          <a
            href="http://smash-bros-deploy.s3-website-us-east-1.amazonaws.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Super Smash Bros. Infinity
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
