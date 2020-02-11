import React from 'react'
import { Helmet } from 'react-helmet'
import { Header } from 'components'
import { GlobalStyle } from 'styles'
import { Container, Content } from './layout.styles'
import { useDarkMode } from 'hooks'

export const Layout = ({ children }) => {
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
                <Content>{children}</Content>
            </Container>
        </>
    )
}

export default Layout
