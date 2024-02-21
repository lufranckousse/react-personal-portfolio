import style from "./Portfolio.module.scss";
import weather from "../../assets/images/1.png";
import EmployeeTracker from "../../assets/images/2.jpg";
import TechBlog from "../../assets/images/3.jpg";
import passwordgenerator from "../../assets/images/4.png";
import workdayschdule from "../../assets/images/5.png";
import quizchallenge from "../../assets/images/6.png";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={style.body}>
      
      <div className={style["project-container"]}>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={weather} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Weather Dashboard</h4>
              <a
                href="https://github.com/lufranckousse/weather-dashboard"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={EmployeeTracker} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Employee Tracker</h4>
              <a
                href="https://github.com/lufranckousse/employee-tracker"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={passwordgenerator} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>passwordgenerator Online Shopping</h4>
              <a
                href="#"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>{" "}
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={TechBlog} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>The Tech Blog</h4>
              <a
                href="https://github.com/lufranckousse/tech-blog"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={workdayschdule} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Workday Schduler</h4>
              <a
                href="https://github.com/lufranckousse/work-day-scheduler"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={style["project-card"]}
        >
          <img src={quizchallenge} alt="Project Image" />
          {isHovered && (
            <div className={style["project-info"]}>
              <h4>Coding Quiz Challenge</h4>
              <a
                href="https://github.com/lufranckousse/coding-quiz"
                className={style.github}
              >
                <FaGithub style={{ color: "lightblue" }} size={40} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
