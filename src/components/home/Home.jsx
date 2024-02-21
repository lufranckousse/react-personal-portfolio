import style from "./Home.module.scss";
import { CgProfile } from "react-icons/cg";

export default function Home() {
  return (
    <div className={style.body}>
      <div>
        <CgProfile size={50} style={{ color: "#ffffff" }} />
        <h2>Lufrence</h2>
      </div>
      <div>
        <header>
          <h2>
          
            <br />I am a MERN Developer
          </h2>
          <p>
              Dedicated and detail-oriented professional with over 2 years of IT
              experience in programming. Leveraged a diverse skill set in HTML,
              CSS, JavaScript, Python, and Java to consistently contribute to
              successful IT project outcomes. Passionate about technologys
              transformative power and fueled by the pursuit of a career that
              continuously challenges and inspires growth.
          </p>
        </header>
      </div>
    </div>
  );
}
