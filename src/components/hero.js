import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import me from '../images/me.jpg'
import style from '../styles/hero.module.css'

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.left}>
        <div>
          <h1>
            <span>&lt;</span>web
            <br />
            developer<span>&gt;</span>
          </h1>
          <br />
          <h2>
            I<span>'</span>m a full stack developer<span>,</span> writing clean
            and efficient code<span>.</span>
          </h2>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/marcelscruz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={style.socialMediaIcon}
            />
          </a>

          <a
            href="https://github.com/marcelscruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={style.socialMediaIcon}
            />
          </a>

          <a
            href="https://twitter.com/marcelcruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className={style.socialMediaIcon}
            />
          </a>
        </div>
      </div>

      <div className={style.right}>
        <img className={style.image} src={me} alt="Marcel Cruz" />
        <span>i</span>
      </div>
    </div>
  )
}

export default Hero
