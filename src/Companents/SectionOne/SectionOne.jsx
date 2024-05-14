import React from 'react'
import styles from '../SectionOne/SectionOne.module.css'
const SectionOne = () => {
  return (
    <section className={styles.sectionOne}>
<div className={styles.containerOne}>
<div className={styles.textOne}>
<h1>Select Your New Perfect Style</h1>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
<button>SHOP NOW</button>
</div>
<div className={styles.photo}>
<img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />

</div>
</div>
    </section>
  )
}

export default SectionOne