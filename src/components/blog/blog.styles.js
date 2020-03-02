import styled from 'styled-components'

export const BlogEntryContent = styled.div`
    padding: 40px 0;

    &:not(:last-child) {
        border-bottom: 1px dashed var(--primary-low-opacity);
    }
`

export const BlogEntryTitleContainer = styled.div`
    align-items: center;
    display: flex;
    height: auto;
`

export const BlogEntryTitle = styled.h2`
    font-size: 32px;
    line-height: 1.3;
    margin: 0;
    position: relative;

    &::before {
        color: var(--yellow);
        content: '•';
        font-size: 20px;
        font-weight: 800;
        left: -20px;
        position: absolute;
        top: 10px;
    }
`

export const BlogEntryMetadata = styled.div`
    align-items: center;
    color: var(--primary-high-opacity);
    font-size: 12px;
    margin: 15px 0;
`

export const BlogEntryTimestampContainer = styled.div`
    display: flex;
`

export const BlogEntryTimestamp = styled.span``

export const BlogEntryReadTimeIcon = styled.span`
    align-items: center;
    display: flex;
    margin-right: 5px;

    svg {
        position: relative;
    }
`

export const BlogEntryReadTimeText = styled.span``

export const BlogEntryDescription = styled.h3`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    margin: 0;
`
