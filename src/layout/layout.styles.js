import styled from 'styled-components'
import { sizes } from 'constants/sizes'

const { maxOverallWidth, tabletWidth, phoneWidth } = sizes

export const Container = styled.div`
    background: var(--primary);
    min-height: calc(var(--vh) - 80px); /* Viewport height - header height */
    overflow-x: hidden;
    transition: var(--backgroundTransition);
`

export const Content = styled.div`
    flex-grow: 1;
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
