import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import ThemeToggle from '../theme-toggle/theme-toggle'
import {
    Container,
    InnerContainer,
    LeftContainer,
    RightContainer,
    Title,
    Cursor,
    MenuLink,
} from './header.styles'

export const Header = props => {
    return (
        <Container>
            <InnerContainer>
                <LeftContainer>
                    <Title to="/">
                        marcel cruz <Cursor />
                    </Title>
                </LeftContainer>
                <RightContainer>
                    <MenuLink
                        to="/blog"
                        onTouchEnd={e => {
                            e.preventDefault() // Doesn't allow outline (focus) when clicked

                            navigate('/blog')
                        }}
                    >
                        Blog
                    </MenuLink>
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
