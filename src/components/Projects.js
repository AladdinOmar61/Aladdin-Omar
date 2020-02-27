import React from "react";

function Projects() {
  return (
    <div id="projects">
      <h2 className="project-header">Projects</h2>
      <ul className="projects">
        <li>
          <a
            href="http://bet-ch.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-img"
              src="https://i.imgur.com/TS5uk53.png"
              alt="betch"
            />
          </a>
          <p className="project-desc"><span className="betch">BET-CH:</span> the high-low betting card game! Guess if the next card drawn will be higher, lower, or the same as the current one on the screen. <span>bet-cha</span> can't beat it first try!</p>
        </li>
        <li>
          <a
            href="http://ricpic-and-mortyschmorty.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-img"
              src="https://i.imgur.com/ESmPZuS.png"
              alt="rick and morty"
            />
          </a>
          <p className="project-desc"><span>Ricpic & Morty Schmorty: </span>the Rick and Morty based social media app that lets you learn about the characters from the Adult Swim Series <span>Rick and Morty.</span> Look through the list of characters on the RicPics page then search the character by ID number on the search link for more details!</p>
        </li>
        <li>
          <a
            href="http://cheetohphoto.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-img"
              src="https://i.imgur.com/p1kOJoW.png"
              alt="cheetoh"
            />
          </a>
          <p className="project-desc"><span>Cheetoh Photo:</span> the cheetah based social media app! Log in and create, edit or delete your posts as well as comment on others, or just check out what other users have sent if you do not feel like loggin in.</p>
        </li>
        <li>
          <a
            href="http://peterpan.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-img"
              src="https://i.imgur.com/7YHYFEa.png"
              alt="peter pan donuts"
            />
          </a>
          <p className="project-desc"><span>Peter Pan Donuts:</span> Special collaboration project with UX design team to redesign Peter Pan's Donut and Patry Shop's original website. Original site: <a href="http://peterpandonuts.com/" target="_blank" rel="noopener noreferrer"><span>http://peterpandonuts.com/</span></a></p>
        </li>
        <li className="project-flex">
          <a
            href="http://smash-bros-deploy.s3-website-us-east-1.amazonaws.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-img"
              src="https://i.imgur.com/8iQVpJF.png"
              alt="super smash bros infinity"
            />
          </a>
          <p className="project-desc"><span>Super Smash Brothers Infinity:</span> The Super Smash Bros. Ultimate fan site where you can create your own fun little fighter image with a set of four moves! Use the characters set in the original roster of the game as inspiration if you can't think of anything.</p>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
