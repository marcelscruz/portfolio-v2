import styled from 'styled-components'
import { sizes } from 'constants/sizes'

const { phoneWidth } = sizes

export const PostTitle = styled.h1`
    font-size: 42px;
    line-height: 1.3;
    margin: 0;
    position: relative;

    @media screen and (max-width: ${phoneWidth}) {
        font-size: 36px;
    }

    &::before {
        color: var(--yellow);
        content: '-';
        font-size: 34px;
        font-weight: 800;
        left: -26px;
        position: absolute;
        top: 3px;

        @media screen and (max-width: ${phoneWidth}) {
            content: '|';
            font-size: 26px;
            left: -23px;
            top: 6px;
        }
    }
`

export const PostMetadata = styled.div`
    align-items: center;
    color: var(--primary-high-opacity);
    font-size: 12px;
    margin: 20px 0 40px;

    @media screen and (max-width: ${phoneWidth}) {
        margin-bottom: 30px;
    }
`

export const PostTimestamp = styled.span``

export const PostReadTimeContainer = styled.div`
    align-items: center;
    display: flex;
`

export const PostReadTimeIcon = styled.img`
    align-items: center;
    display: flex;
    height: 10px;
    margin-right: 5px;
    width: 10px;
`

export const PostReadTimeText = styled.span``

export const PostBody = styled.div`
    line-height: 1.7;
    text-align: justify;

    p {
        &:last-of-type {
            margin-bottom: 0;
        }
    }
`
