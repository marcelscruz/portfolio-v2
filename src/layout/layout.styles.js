import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  hyphens: auto;
  margin: 0 auto;
  max-width: 750px;
  min-height: 100vh;
  padding: 3rem 0;

  @media screen and (max-width: 800px) {
    padding: 3rem 1.5rem;
  }
`

export const Content = styled.div`
  flex-grow: 1;
`
