import React from 'react'
import { Header } from 'components'
import { Container, Content } from './layout.styles'
import './global-styles.scss'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Content>
        <Header />
        {children}
      </Content>
    </Container>
  )
}

export default Layout
