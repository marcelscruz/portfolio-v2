import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    Container,
    LeftPanel,
    Title,
    TitleHighlight,
    Subtitle,
    RightPanel,
    Image,
    SocialMediaContainer,
    SocialMediaIcon,
} from 'components'
import me from 'images/me.jpg'

const Home = () => {
    const svgSize = {
        height: '18px',
        width: '18px',
    }

    return (
        <Container>
            <LeftPanel>
                <div>
                    <Title>
                        <TitleHighlight noMarginLeft>&lt;</TitleHighlight>
                        web
                        <br />
                        developer
                        <TitleHighlight noMarginRight>&gt;</TitleHighlight>
                    </Title>

                    <br />

                    <Subtitle>
                        I<span>'</span>m a full stack developer
                        <span>,</span> writing clean and efficient code
                        <span>.</span>
                    </Subtitle>
                </div>

                <SocialMediaContainer>
                    <SocialMediaIcon href="https://www.linkedin.com/in/marcelscruz/">
                        <FontAwesomeIcon style={svgSize} icon={faLinkedin} />
                    </SocialMediaIcon>

                    <SocialMediaIcon href="https://github.com/marcelscruz">
                        <FontAwesomeIcon style={svgSize} icon={faGithub} />
                    </SocialMediaIcon>

                    <SocialMediaIcon href="https://twitter.com/marcelcruz">
                        <FontAwesomeIcon style={svgSize} icon={faTwitter} />
                    </SocialMediaIcon>

                    <SocialMediaIcon href="mailto:marcelcruz@live.com">
                        <FontAwesomeIcon style={svgSize} icon={faEnvelope} />
                    </SocialMediaIcon>
                </SocialMediaContainer>
            </LeftPanel>

            <RightPanel>
                <Image src={me} alt="Marcel Cruz" />
            </RightPanel>
        </Container>
    )
}

export default Home
