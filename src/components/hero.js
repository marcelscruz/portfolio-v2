import React from 'react'
import me from '../images/me.jpg'

import style from '../styles/hero.module.css'

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.left}>I'm a web developer</div>

      <div className={style.right}>
        <img className={style.image} src={me} alt="Marcel Cruz" />
      </div>
    </div>
  )
}

export default Hero
