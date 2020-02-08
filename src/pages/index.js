import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Layout from 'layout'
import {
    Container,
    LeftPanel,
    Title,
    TitleHighlight,
    Subtitle,
    RightPanel,
    Image,
    SocialMediaIcon,
} from 'components/home/home.styles'
import me from 'images/me.jpg'

const Home = () => {
    return (
        <Layout>
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

                    <div>
                        <SocialMediaIcon href="https://www.linkedin.com/in/marcelscruz/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </SocialMediaIcon>

                        <SocialMediaIcon href="https://github.com/marcelscruz">
                            <FontAwesomeIcon icon={faGithub} />
                        </SocialMediaIcon>

                        <SocialMediaIcon href="https://twitter.com/marcelcruz">
                            <FontAwesomeIcon icon={faTwitter} />
                        </SocialMediaIcon>
                    </div>
                </LeftPanel>

                <RightPanel>
                    <Image src={me} alt="Marcel Cruz" />
                </RightPanel>
            </Container>
        </Layout>
    )
}

export default Home
