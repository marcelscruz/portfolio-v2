import styled from 'styled-components'
import { sizes } from 'constants/sizes'

const { phoneWidth } = sizes

export const ContentWrapper = styled.div`
    color: var(--secondary);
    margin: 0 auto;
    max-width: 800px;
    padding: 50px 0;

    @media screen and (max-width: ${phoneWidth}) {
        padding: 0px;
    }
`
