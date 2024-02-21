import resume from "../../assets/resume/resume.pdf";
import style from "./Resume.module.scss";

export default function Resume() {
  return (
    <div className={style.body}>
      <div className={style.title}>
        <h1>Resume</h1>
        <a href={resume} download="resume.pdf">
          Download My Resume
        </a>
      </div>
      <div className={style.list}>
        <div>
          <ul>
            <b>Front End Proficiencies</b>
            <li>HTML</li>
            <li>CSS</li>
            <li>JQuery</li>
            <li>JavaScript</li>
            <li>Web API</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <ul>
            <b>Back End Proficiencies</b>
            <li>Nodejs</li>
            <li>Express</li>
            <li>SQL</li>
            <li>ORM</li>
            <li>MVC</li>
            <li>NOSQL/MongoDB</li>
            <li>Mongoose</li>
            <li>MERN</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
