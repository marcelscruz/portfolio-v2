import styled from 'styled-components'

export const PostTitle = styled.h2`
    font-size: 42px;
    line-height: 1.3;
    margin: 0;
    margin-top: 40px;
    position: relative;

    /* @media screen and (max-width: 800px) {
        font-size: 32px;
    } */

    &::before {
        color: var(--yellow);
        content: '-';
        font-size: 34px;
        font-weight: 800;
        left: -26px;
        position: absolute;
        top: 3px;
    }
`

export const PostMetadata = styled.div`
    align-items: center;
    color: var(--primary-high-opacity);
    font-size: 12px;
    margin: 20px 0;
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
`
