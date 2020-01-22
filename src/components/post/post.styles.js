import styled from 'styled-components'

export const Container = styled.div`
  color: #493738;
  font-family: 'Montserrat', sans-serif;
`

export const Title = styled.h1`
  margin: 1.45rem 0;

  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`

export const PublishedDate = styled.p`
  color: rgba(87, 65, 66, 0.5);
  font-size: 0.7rem;
  margin-bottom: 3rem;
`

export const Body = styled.div`
  line-height: 1.7;
  text-align: justify;
`

export const Separator = styled.div`
  background: rgba(87, 65, 66, 0.2);
  height: 2px;
  width: 100%;
`
