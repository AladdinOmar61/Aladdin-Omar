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
                the cheetah based social media app! Log in and create, edit or
                delete your posts as well as comment on others, or just check
                out what other users have sent if you do not feel like loggin
                in.
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
                  src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"
                  alt="express"
                />
              </div>
            </div>
          </div>
          <div className="project__side project__side-back">
            <a
              className="project__link"
              href="http://cheetohphoto.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
            <a
              className="project__github"
              href="https://github.com/AladdinOmar61/full-stack-photo-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
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
        <div className="project">
          <div className="project__side project__side-front">
            <div className="project__pic-4">&nbsp;</div>
            <div className="project__info">
              <p className="project__desc margin-top-medium">
                The Super Smash Bros. Ultimate fan site where you can create
                your own fun little fighter image with a set of four moves! Use
                the characters set in the original roster of the game as
                inspiration if you can't think of anything.
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
                  src="https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_375/f_auto/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/32/rails-badge.png"
                  alt="ruby on rails"
                />
                <img
                  className="langs-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
                  alt="postgresql"
                />
              </div>
            </div>
          </div>
          <div className="project__side project__side-back">
            <a
              className="project__link"
              href="http://smash-bros-deploy.s3-website-us-east-1.amazonaws.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
            <a
              className="project__github"
              href="https://github.com/AladdinOmar61/smash-bros-roster"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
    //   <ul className="projects">
    //   <li className="single-project">
    //     <div className="project-flex-div">
    //       <a
    //         href="http://peterpan.surge.sh/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <div className="peterpan-div">
    //         <img
    //           className="project-img"
    //           src="https://i.imgur.com/7YHYFEa.png"
    //           alt="peter pan donuts"
    //         />
    //         </div>
    //       </a>
    //       </div>
    //       <div className="desc-w-img">
    //         <p className="project-desc">
    //           <span className="project-name">PETER PAN DONUTS: <br></br></span> Special
    //           collaboration project with UX design team to redesign Peter Pan's
    //           Donut and Pastry Shop's original website. Original site can be
    //           found
    //           <a
    //             className="old-peter-pan"
    //             href="http://peterpandonuts.com/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <span> here</span>
    //           </a>
    //         </p>
    //         <p className="github-link">
    //           Github:{" "}
    //           <a
    //             className="github-path"
    //             href="https://github.com/AladdinOmar61/peter-pan"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="project-github"
    //               src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    //               alt="github"
    //             />
    //           </a>
    //         </p>
    //         <div className="img-flex">
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
    //             alt="css"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    //             alt="react"
    //           />
    //         </div>
    //       </div>
    //     </li>
    //     <li className="single-project">
    //     <div className="project-flex-div">
    //       <a
    //         href="http://ricpic-and-mortyschmorty.surge.sh/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <div className="rickmorty-div">
    //         <img
    //           className="project-img"
    //           src="https://i.imgur.com/ESmPZuS.png"
    //           alt="rick and morty"
    //         />
    //         </div>
    //       </a>
    //       </div>
    //       <div className="desc-w-img">
    //         <p className="project-desc">
    //           <span className="project-name">RICPIC & MORTY SCHMORTY: <br></br> </span> the
    //           Rick and Morty based social media app that lets you learn about
    //           the characters from the Adult Swim Series{" "}
    //           <span>Rick and Morty.</span> Look through the list of characters
    //           on the RicPics page then search the character by ID number on the
    //           search link for more details!
    //         </p>
    //         <p className="github-link">
    //           Github:{" "}
    //           <a
    //             className="github-path"
    //             href="https://github.com/AladdinOmar61/project-2"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="project-github"
    //               src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    //               alt="github"
    //             />
    //           </a>
    //         </p>
    //         <div className="img-flex">
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
    //             alt="css"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    //             alt="react"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://cdn.iconscout.com/icon/premium/png-256-thumb/api-development-3-805959.png"
    //             alt="API"
    //           />
    //         </div>
    //       </div>
    //     </li>
    //     <li className="single-project">
    //     <div className="project-flex-div">
    //       <a
    //         href="http://cheetohphoto.surge.sh/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <div className="cheetoh-div">
    //         <img
    //           className="project-img"
    //           src="https://i.imgur.com/p1kOJoW.png"
    //           alt="cheetoh"
    //         />
    //         </div>
    //       </a>
    //       </div>
    //       <div className="desc-w-img">
    //         <p className="project-desc">
    //           <span className="project-name">CHEETOH PHOTO: <br></br></span> the cheetah
    //           based social media app! Log in and create, edit or delete your
    //           posts as well as comment on others, or just check out what other
    //           users have sent if you do not feel like loggin in.
    //         </p>
    //         <p className="github-link">
    //           Github:{" "}
    //           <a
    //             className="github-path"
    //             href="https://github.com/AladdinOmar61/full-stack-photo-app"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="project-github"
    //               src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    //               alt="github"
    //             />
    //           </a>
    //         </p>
    //         <div className="img-flex">
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
    //             alt="css"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    //             alt="react"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"
    //             alt="express"
    //           />
    //         </div>
    //       </div>
    //     </li>
    //     <li className="single-project">
    //     <div className="project-flex-div">
    //     <a
    //         href="http://bet-ch.surge.sh/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <div className="betcha-div">
    //         <img
    //           className="project-img"
    //           src="https://i.imgur.com/TS5uk53.png"
    //           alt="betch"
    //         />
    //         <p className="placeholder-img">placeholder text</p>
    //         </div>
    //       </a>
    //       </div>
    //       <div className="desc-w-img">
    //         <p className="project-desc">
    //           <span className="project-name">BET-CHA: <br></br></span> the high-low
    //           betting card game! Guess if the next card drawn will be higher,
    //           lower, or the same as the current one on the screen.{" "}
    //           <span>bet-cha</span> can't beat it first try!
    //         </p>

    //         <p className="github-link">
    //           Github:{" "}
    //           <a
    //             className="github-path"
    //             href="https://github.com/AladdinOmar61/project-1"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="project-github"
    //               src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    //               alt="github"
    //             />
    //           </a>
    //         </p>
    //         <div className="img-flex">
    //           <img
    //             className="lang-img"
    //             src="https://image.flaticon.com/icons/svg/1216/1216733.svg"
    //             alt="html"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
    //             alt="css"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png"
    //             alt="javascript"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://cdn.iconscout.com/icon/premium/png-256-thumb/api-development-3-805959.png"
    //             alt="API"
    //           />
    //         </div>
    //       </div>
    //       </li>
    //     <li className="single-project">
    //     <div className="project-flex-div">
    //       <a
    //         href="http://smash-bros-deploy.s3-website-us-east-1.amazonaws.com/"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //       >
    //         <div className="smashbros-div">
    //         <img
    //           className="project-img"
    //           src="https://i.imgur.com/8iQVpJF.png"
    //           alt="super smash bros infinity"
    //         />
    //         </div>
    //       </a>
    //       </div>
    //       <div className="desc-w-img">
    //         <p className="project-desc">
    //           <span className="project-name">
    //             SUPER SMASH BROTHERS INFINITY: <br></br>
    //           </span>{" "}
    //           The Super Smash Bros. Ultimate fan site where you can create your
    //           own fun little fighter image with a set of four moves! Use the
    //           characters set in the original roster of the game as inspiration
    //           if you can't think of anything.
    //         </p>
    //         <p className="github-link">
    //           Github:{" "}
    //           <a
    //             className="github-path"
    //             href="https://github.com/AladdinOmar61/smash-bros-roster"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="project-github"
    //               src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    //               alt="github"
    //             />
    //           </a>
    //         </p>
    //         <div className="img-flex">
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
    //             alt="css"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    //             alt="react"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_375/f_auto/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/32/rails-badge.png"
    //             alt="ruby on rails"
    //           />
    //           <img
    //             className="lang-img"
    //             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
    //             alt="postgresql"
    //           />
    //         </div>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Projects;
