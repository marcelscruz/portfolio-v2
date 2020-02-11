import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { sizes } from 'constants/sizes'

const { maxOverallWidth } = sizes

export const Container = styled.header`
    background: var(--dark-primary);
    height: 80px;
`

export const InnerContainer = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${maxOverallWidth};
    padding: 0 100px;
`

export const LeftContainer = styled.div`
    align-items: center;
    display: flex;
`

export const RightContainer = styled.div`
    align-items: center;
    display: flex;
`

export const Title = styled(Link)`
    color: var(--light-primary);
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
`

const blinkingCursor = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`

export const Cursor = styled.span`
    display: inline-block;
    width: 10px;
    height: 0.9rem;
    background: var(--yellow);
    margin-left: 5px;
    border-radius: 1px;
    animation: ${blinkingCursor} 1s infinite;
`
