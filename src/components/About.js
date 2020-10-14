import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <img
          className="selfie"
          src="https://i.imgur.com/JJ6tiiM.jpg?1"
          alt="linkedin profile"
        />
        <h3 className="about__header margin-top-medium">About me</h3>
        <p className="about__content">
          I am an enthusiastic and adaptive Web Developer who is passionate
          about creating websites, games, and applications that provide users
          with convenience and entertainment. With foundations in both Computer
          Science and Software Engineering, I seek the opportunity to work for a
          company that places strong emphasis on learning and development so I
          can continue to grow as both a developer and a professional.
        </p>
      </div>
    </div>
  );
}

export default About;
