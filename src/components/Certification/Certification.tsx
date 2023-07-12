import React from "react";
import { FC } from "react";
import Image from "next/image";
import styled from "./Certification.module.css";
interface CertificationProps {
  year: number;
  icon?: string;
  text: string;
}

const Certification: FC<CertificationProps> = (props) => {
  return (
    <div className={styled.container}>
      <Image
        className={styled.icon}
        src={props.icon}
        width={100}
        height={100}
        alt="icon"
      />
      <span>{props.year} - </span>
      <p> {props.text}</p>
    </div>
  );
};

export default Certification;
