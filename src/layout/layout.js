import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import {
    // Header,
    // FadeIn,
    // UnderConstruction,
    Title,
    TitleHighlight,
    SocialMediaContainer,
    SocialMedia,
} from 'components'
import { GlobalStyle } from 'styles'
// import { Container, Content } from './layout.styles'
// import { useDarkMode } from 'hooks'
import getViewportHeight from 'utils/get-viewport-height'

export const Layout = ({ children }) => {
    // const [isDarkModeOn, setIsDarkModeOn] = useDarkMode()

    useEffect(() => {
        getViewportHeight()
    }, [])

    return (
        <>
            <GlobalStyle />
            <Helmet title="Marcel Cruz • Full-Stack Developer" />

            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    width: '100vw',
                }}
            >
                <Title>
                    <TitleHighlight noMarginLeft>&lt;</TitleHighlight>
                    MarcelCruz/
                    <TitleHighlight noMarginRight>&gt;</TitleHighlight>
                </Title>

                {/* <SocialMediaContainer> */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '80px',
                    }}
                >
                    <SocialMedia />
                </div>
                {/* </SocialMediaContainer> */}
            </div>

            {/* <Container>
                <UnderConstruction />
                <Header
                    isDarkModeOn={isDarkModeOn}
                    setIsDarkModeOn={setIsDarkModeOn}
                />
                <Content>
                    <FadeIn>{children}</FadeIn>
                </Content>
            </Container> */}
        </>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    hasFooter: PropTypes.bool,
}
