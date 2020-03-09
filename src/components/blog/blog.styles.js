import styled from 'styled-components'
import { sizes } from 'constants/sizes'

const { phoneWidth } = sizes

export const BlogEntryContent = styled.div`
    padding: 40px 0;

    @media screen and (max-width: ${phoneWidth}) {
        padding: 30px 0;
    }

    ${({ isFirstOfType }) =>
        isFirstOfType &&
        `
        padding-top: 0 !important;
    `}

    ${({ isLastOfType }) =>
        isLastOfType &&
        `
        padding-bottom: 0 !important;
    `}

    ${({ isLastOfType }) =>
        !isLastOfType &&
        `
        border-bottom: 1px dashed var(--primary-low-opacity);
    `}

    
`

export const BlogEntryTitle = styled.h2`
    font-size: 32px;
    line-height: 1.3;
    margin: 0;
    position: relative;

    &::before {
        color: var(--yellow);
        content: '-';
        font-size: 24px;
        font-weight: 800;
        left: -20px;
        position: absolute;
        top: 3px;

        @media screen and (max-width: ${phoneWidth}) {
            content: '|';
            left: -23px;
            top: 5px;
        }
    }
`

export const BlogEntryMetadata = styled.div`
    align-items: center;
    color: var(--primary-high-opacity);
    font-size: 12px;
    margin: 10px 0;
`

export const BlogEntryTimestamp = styled.span``

export const BlogEntryReadTimeContainer = styled.div`
    align-items: center;
    display: flex;
`
export const BlogEntryReadTimeIcon = styled.img`
    align-items: center;
    display: flex;
    height: 10px;
    margin-right: 5px;
    width: 10px;
`

export const BlogEntryReadTimeText = styled.span``

export const BlogEntryDescription = styled.h3`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    margin: 0;

    @media screen and (max-width: ${phoneWidth}) {
        font-size: 16px;
    }
`
