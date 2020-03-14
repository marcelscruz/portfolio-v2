import styled from 'styled-components'
import { sizes } from 'constants/sizes'

const { phoneWidth } = sizes

export const SocialMediaIcon = styled.a.attrs({
    rel: 'noopener noreferrer',
    target: '_blank',
})`
    margin-right: 15px;

    svg {
        color: var(--secondary);
        cursor: pointer;
        font-size: 20px;
        transition: var(--colorTransition);

        &:hover {
            color: var(--yellow);
        }

        @media screen and (max-width: ${phoneWidth}) {
            color: var(--light-primary);
        }
    }
`
