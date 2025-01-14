import React from "react";

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills__header margin-top-small">Skills</h2>
      <div className="skills-grid margin-top-medium">
        <div className="skills-div">
          <p className="skills-div-name">SASS</p>
          <img className="skills-div-img" src={"sass.png"} alt="sass" />
        </div>
        <div className="skills-div">
          <p className="skills-div-name">REACT</p>
          <img className="skills-div-img" src={"react.png"} alt="react" />
        </div>
        <div className="skills-div">
          <p className="skills-div-name">NODE</p>
          <img className="skills-div-img" src={"nodejs.png"} alt="node" />
        </div>
        <div className="skills-div">
          <p className="skills-div-name">SEQUELIZE</p>
          <img
            className="skills-div-img"
            src={"sequelize.png"}
            alt="sequelize"
          />
        </div>
        <div className="skills-div">
          <p className="skills-div-name">SQL</p>
          <img
            className="skills-div-img"
            src={"sql-file-format-symbol.png"}
            alt="sql"
          />
        </div>
        <div className="skills-div">
          <p className="skills-div-name">EXPRESS</p>
          <img className="skills-div-img" src={"express.png"} alt="express" />
        </div>
        <div className="skills-div">
          <p className="skills-div-name">PYTHON</p>
          <img className="skills-div-img" src={"python.png"} alt="python" />
        </div>
        <div className="skills-div">
          <p className="skills-div-name">MONGO DB</p>
          <img className="skills-div-img" src={"mongodb.png"} alt="mongodb" />
        </div>
        <div className="skills-div">
          <p className="skills-div-name">SHOPIFY</p>
          <img className="skills-div-img" src={"shopify-logo.jpg"} alt="mongodb" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
