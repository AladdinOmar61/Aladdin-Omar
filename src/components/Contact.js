import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <h4>Email: Aladdin.Omar61@gmail.com</h4>
      <h4>Phone: 917-628-1184</h4>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/aladdin-omar61/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_JOf78KjI6V83p4-v83zQ4xElbNA3zmCM_Xwi04FSqnlgXCgE"
            alt="linkedIn"
          />
        </a>
        <a
          href="https://github.com/AladdinOmar61"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
