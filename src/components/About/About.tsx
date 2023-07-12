import Image from "next/image";
import styles from "./About.module.css";
import Certification from "../Certification/Certification";

const About = () => {
  return (
    <div>
      <Certification
        year={2019}
        icon="/certificate.svg"
        text="Diploma de bacalaureat"
      />
      <Certification
        year={2020}
        icon="/graduation.svg"
        text="Business Administration - CEEF"
      />
      <Certification
        year={2021}
        icon="/certificate.svg"
        text="TOEFL iBT - English B2"
      />
      <Certification
        year={2022}
        icon="/certificate.svg"
        text="React Web Development - Tekwill Academy"
      />
      <Certification
        year={2023}
        icon="/graduation.svg"
        text="Informatics - Vasile Alecsandri University of Bacău"
      />
    </div>
  );
};

export default About;
