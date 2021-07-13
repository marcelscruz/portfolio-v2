import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { SocialMediaIcon } from './social-media.styles'

export const SocialMedia = () => {
    const svgSize = {
        height: '18px',
        width: '18px',
    }

    return (
        <>
            <SocialMediaIcon href="https://twitter.com/marcelcruz">
                <FontAwesomeIcon style={svgSize} icon={faTwitter} />
            </SocialMediaIcon>

            <SocialMediaIcon href="https://github.com/marcelscruz">
                <FontAwesomeIcon style={svgSize} icon={faGithub} />
            </SocialMediaIcon>

            <SocialMediaIcon href="https://www.linkedin.com/in/marcelscruz/">
                <FontAwesomeIcon style={svgSize} icon={faLinkedin} />
            </SocialMediaIcon>

            {/* <SocialMediaIcon href="mailto:marcelcruz@live.com">
                <FontAwesomeIcon style={svgSize} icon={faEnvelope} />
            </SocialMediaIcon> */}
        </>
    )
}

export default SocialMedia
