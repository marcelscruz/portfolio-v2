import React from 'react'

import { Container, InnerContainer, Title, Cursor } from './header.styles'

export const Header = () => {
    return (
        <Container>
            <InnerContainer>
                <Title to="/">marcel cruz</Title>
                <Cursor />
            </InnerContainer>
        </Container>
    )
}

export default Header
