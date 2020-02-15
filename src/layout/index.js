import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Header, FadeIn } from 'components'
import { GlobalStyle } from 'styles'
import { Container, Content } from './layout.styles'
import { useDarkMode } from 'hooks'

export const Layout = ({ children, hasFooter }) => {
    const [isDarkModeOn, setIsDarkModeOn] = useDarkMode()

    return (
        <>
            <GlobalStyle />
            <Helmet title="marcel cruz" />
            <Container>
                <Header
                    isDarkModeOn={isDarkModeOn}
                    setIsDarkModeOn={setIsDarkModeOn}
                />
                <Content>
                    <FadeIn>{children}</FadeIn>
                </Content>
                {hasFooter && <h2>Footer</h2>}
            </Container>
        </>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    hasFooter: PropTypes.bool,
}
