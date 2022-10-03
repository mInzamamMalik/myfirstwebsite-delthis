import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Hi() {
  return (
    <div className="container">
      <div className="name-div">
        <span className="name">Asharib Ali</span>
        <span className="profession">Web Developer</span>
      </div>

      <div className="left-div">
        <div className="info-box">
          <p className="heading">Contacts</p>
          <p>
            <span className="bold-span">Phone:</span>03161109240
          </p>
          <p>
            <span className="bold-span">Email:</span>asharib920@gmail.com
          </p>
          <p>
            <span className="bold-span">Address:</span>Karachi, Pakistan
          </p>
        </div>
      </div>

      <div className="right-div">
        <p className="heading">About Me</p>
        <p>
          I'm a Junior Web developer, improving my skills by doing Web and App
          development course at Saylani Institute.
        </p>
        <p className="heading">Education</p>
        <ul>
          <li>Matriculation from R.R.B.K Public School</li>
          <li>Intermediate from D.J Sindh Government Science College</li>
          <li>Undergradute in PAF-KIET</li>
        </ul>
        <p className="heading">Experience</p>
        <ul>
          <li>No Professional experience yet.</li>
        </ul>
        <p className="heading">Skills</p>
        <ul>
          <li>UI Designer</li>
          <li>Can make interactive website</li>
          <li>Have command on HTML, CSS and JS</li>
        </ul>
      </div>
    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
