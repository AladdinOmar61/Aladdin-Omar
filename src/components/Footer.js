import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icon">&nbsp;</div>
      <div className="footer-flex">
        <div className="footer-contact">
          <h2 className="footer-contact-header">Contact</h2>
          <h4 className="footer-contact-email">
            Aladdin.Omar61@gmail.com
          </h4>
          <h4 className="footer-contact-phone">917-628-1184</h4>
        </div>
        <div className="footer-links">
          <h4 className="footer-links-header">Links</h4>
          <div className="footer-links-flex">
            <a
              className="footer-links-linkedin"
              href="https://www.linkedin.com/in/alaaeldean-omar61/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/alaaeldean-omar61/
            </a>
            <a
              className="footer-links-github"
              href="https://github.com/AladdinOmar61"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/AladdinOmar61
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
