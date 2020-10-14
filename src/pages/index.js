import React from 'react'
import {
    Container,
    LeftPanel,
    Title,
    TitleHighlight,
    Subtitle,
    RightPanel,
    Image,
    SocialMediaContainer,
    SocialMedia,
} from 'components'
import me from 'images/me.jpg'

const Home = () => {
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
                        I<span>'</span>m a full-stack developer
                        <span>,</span> writing clean and efficient code
                        <span>.</span>
                    </Subtitle>
                </div>

                <SocialMediaContainer>
                    <SocialMedia />
                </SocialMediaContainer>
            </LeftPanel>

            <RightPanel>
                <Image src={me} alt="Marcel Cruz" />
            </RightPanel>
        </Container>
    )
}

export default Home
