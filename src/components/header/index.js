import React from 'react'
import PropTypes from 'prop-types'
import ThemeToggle from '../theme-toggle'
import {
    Container,
    InnerContainer,
    LeftContainer,
    RightContainer,
    Title,
    Cursor,
} from './header.styles'

export const Header = props => {
    return (
        <Container>
            <InnerContainer>
                <LeftContainer>
                    <Title to="/">marcel cruz</Title>
                    <Cursor />
                </LeftContainer>
                <RightContainer>
                    <ThemeToggle {...props} />
                </RightContainer>
            </InnerContainer>
        </Container>
    )
}

export default Header

Header.propTypes = {
    isDarkModeOn: PropTypes.bool.isRequired,
    setIsDarkModeOn: PropTypes.func.isRequired,
}
