import React from "react";
import styles from "../SectionTwo/SectionTwo.module.css";
const SectionTwo = () => {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.containerTwo}>
        <div className={styles.text}>
          <h1>New Arrivals</h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image}>
                 <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
              alt=""
            />
            </div>
           
            <h3>Thermo Ball Etip Gloves</h3>
            <span>$ 45,743</span>
          </div>
          <div className={styles.card}>
          <div className={styles.image}>
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
              alt=""
            />
            </div>
            <h3>Thermo Ball Etip Gloves</h3>
            <span>$ 45,743</span>
          </div>
          <div className={styles.card}>
          <div className={styles.image}>
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
              alt=""
            />
            </div>
            <h3>Thermo Ball Etip Gloves</h3>
            <span>$ 45,743</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

// import React from 'react'
// import styles from "../SectionTwo/SectionTwo.module.css"
// const SectionTwo = () => {
//   return (
//     <section className={styles.sectionTwo}>
// <div className={styles.containerTwo}>
//     <div className={styles.card}>
//         <h1>Women</h1>
//         <p>Spring 2018</p>
//     </div>
//     <div className={styles.card}>
//         <h1>Men</h1>
//         <p>Spring 2018</p>
//     </div>
//     <div className={styles.card}>
//         <h1>Accessories</h1>
//         <p>New Trend</p>
//     </div>
// </div>
//     </section>
//   )
// }

// export default SectionTwo
