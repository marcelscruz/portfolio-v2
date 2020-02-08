import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: calc(100vh - 80px); /* Viewport height - header height */
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    width: 100vw;
`

export const LeftPanel = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 50px 0 50px;
    text-align: left;
`

export const Title = styled.h1`
    color: var(--secondary);
    display: inline-block;
    font-size: 68px;
    letter-spacing: 1px;
    line-height: 1;
    margin: 50px 0;
    transition: var(--colorTransition);
`

export const TitleHighlight = styled.span`
    color: var(--yellow);
    font-size: 78px;
    font-weight: 500;
    margin: 0 5px;
    position: relative;
    top: 5px;

    ${({ noMarginLeft }) =>
        noMarginLeft &&
        css`
            margin-left: 0;
        `}

    ${({ noMarginRight }) =>
        noMarginRight &&
        css`
            margin-right: 0;
        `}
`

export const Subtitle = styled.h2`
    color: var(--secondary);
    display: inline-block;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.3;
    transition: var(--colorTransition);
    width: 250px;

    span {
        color: var(--yellow);
    }
`

export const RightPanel = styled.div`
    background-color: var(--dark-primary);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
    display: flex;
    height: 100%;
    justify-content: center;
    right: 0;
    width: 70%;
`

export const Image = styled.img`
    bottom: 0;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

export const SocialMediaIcon = styled.a.attrs({
    rel: 'noopener noreferrer',
    target: '_blank',
})`
    margin-right: 15px;

    &:visited {
        svg {
            color: var(--secondary);
        }
    }

    svg {
        color: var(--secondary);
        cursor: pointer;
        font-size: 20px;
        transition: var(--colorTransition);

        &:hover {
            color: var(--yellow);
        }
    }
`
