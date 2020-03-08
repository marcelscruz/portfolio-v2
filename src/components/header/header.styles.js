import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { sizes } from 'constants/sizes'

const { maxOverallWidth, tabletWidth, phoneWidth } = sizes

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

    @media screen and (max-width: ${tabletWidth}) {
        padding: 0 60px;
    }

    @media screen and (max-width: ${phoneWidth}) {
        padding: 0 20px;
    }
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

    &:visited {
        color: var(--light-primary);
    }
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
    animation: ${blinkingCursor} 1s infinite;
    background: var(--yellow);
    border-radius: 1px;
    display: inline-block;
    height: 0.85rem;
    position: relative;
    top: 1px;
    width: 10px;
`

export const MenuLink = styled(Link)`
    font-weight: 600;
    transition: var(--colorTransition);

    &:hover {
        color: var(--yellow);
    }
`
