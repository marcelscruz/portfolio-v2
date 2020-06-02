import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Header, FadeIn, UnderConstruction } from 'components'
import { GlobalStyle } from 'styles'
import { Container, Content } from './layout.styles'
import { useDarkMode } from 'hooks'
import getViewportHeight from 'utils/get-viewport-height'

export const Layout = ({ children }) => {
    const [isDarkModeOn, setIsDarkModeOn] = useDarkMode()

    useEffect(() => {
        getViewportHeight()
    }, [])

    return (
        <>
            <GlobalStyle />
            <Helmet title="marcel cruz • web developer" />
            <Container>
                <UnderConstruction />
                <Header
                    isDarkModeOn={isDarkModeOn}
                    setIsDarkModeOn={setIsDarkModeOn}
                />
                <Content>
                    <FadeIn>{children}</FadeIn>
                </Content>
            </Container>
        </>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    hasFooter: PropTypes.bool,
}
