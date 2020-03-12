import styled, { css } from 'styled-components'
import { sizes } from 'constants/sizes'

const { tabletWidth, phoneWidth, iPhone5Width, phoneHeight } = sizes

export const Container = styled.div`
    display: flex;
    height: calc(var(--vh) - 80px); /* Viewport height - header height */
    justify-content: space-between;
    position: relative;
    width: 100vw;

    @media screen and (max-width: ${phoneWidth}) {
        flex-direction: column;
    }
`

export const LeftPanel = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 50px 0;
    text-align: left;

    @media screen and (max-width: ${tabletWidth}) {
        height: 30%;
        padding: 20px 0;
    }

    @media screen and (max-width: ${phoneWidth}) {
        flex: 1;
        height: unset;
        padding: 0;
        padding-top: 20px;
    }

    @media screen and (max-width: ${iPhone5Width}) {
        height: 35%;
        padding-top: 10px;
    }

    @media screen and (max-height: ${phoneHeight}) {
        padding: 0 0 20px;
    }
`

export const Title = styled.h1`
    color: var(--secondary);
    display: inline-block;
    font-size: 68px;
    letter-spacing: 1px;
    line-height: 1;
    margin: 50px 0;
    transition: var(--colorTransition);

    @media screen and (max-width: ${phoneWidth}) {
        font-size: 48px;
        margin: 0;
        margin-bottom: 20px;
    }

    @media screen and (max-width: ${iPhone5Width}) {
        font-size: 38px;
    }

    @media screen and (max-height: ${phoneHeight}) {
        font-size: 38px;
        margin: 20px 0;
    }
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

    @media screen and (max-width: ${tabletWidth}) {
        font-size: 58px;
    }

    @media screen and (max-width: ${iPhone5Width}) {
        font-size: 48px;
    }

    @media screen and (max-height: ${phoneHeight}) {
        font-size: 48px;
    }
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

    @media screen and (max-width: ${phoneWidth}) {
        font-size: 18px;
    }

    @media screen and (max-height: ${phoneHeight}) {
        font-size: 18px;
    }

    @media screen and (max-width: ${iPhone5Width}) {
        font-size: 14px;
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

    @media screen and (max-width: ${phoneWidth}) {
        clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 0 41%);
        left: -60px; /* Layout Content left padding */
        position: relative;
        width: 100vw;
    }

    @media screen and (max-width: ${phoneWidth}) {
        flex: 2;
        height: unset;
        left: -20px; /* Layout Content left padding */
    }
`

export const Image = styled.img`
    bottom: 0;
    height: 100%;
    object-fit: cover;
    position: absolute;

    @media screen and (max-width: ${tabletWidth}) {
        height: 70%;
    }
`

export const SocialMediaContainer = styled.div`
    height: 20px;

    @media screen and (max-width: ${tabletWidth}) {
        bottom: 20px;
        position: absolute;
        z-index: 10;
    }
`
