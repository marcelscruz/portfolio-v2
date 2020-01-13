import React from 'react'
import me from '../images/me.jpg'

import style from '../styles/hero.module.css'

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.left}>
        <h1>
          I<span>'</span>m a web developer<span>.</span>
        </h1>
      </div>

      <div className={style.right}>
        <img className={style.image} src={me} alt="Marcel Cruz" />
        <span>i</span>
      </div>
    </div>
  )
}

export default Hero
