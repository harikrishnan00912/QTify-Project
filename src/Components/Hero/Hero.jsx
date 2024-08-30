import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.heading}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.heading}>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../../assets/vib.headphone.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
