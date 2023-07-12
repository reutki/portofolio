"use client";
import Image from "next/image";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>
          Hello👋,
          <br />
          My name is Marcu
        </span>
        {/* <span>I am a Front-End Engineer</span> */}
      </div>
      <div className={styles.picture}>
        <Image
          src={"/portrait-transparent.png"}
          alt="Portrait"
          className={styles.portrait}
          width={1080}
          height={1920}
        />
      </div>
    </div>
  );
};

export default Header;
