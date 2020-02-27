import styled from 'styled-components'

export const BlogEntryContent = styled.div`
    padding: 30px 0;

    &:not(:last-child) {
        border-bottom: 1px dashed var(--border);
    }
`

export const BlogEntryTitle = styled.h2`
    font-size: 32px;
    line-height: 1.3;
    margin: 0;
`

export const BlogEntryMetadata = styled.div`
    align-items: center;
    color: var(--highlight);
    display: flex;
    font-size: 12px;
    margin: 15px 0;
`

export const BlogEntryTimestamp = styled.span``

export const BlogEntryMetadataSeparator = styled.span`
    margin: 0 5px;
`

export const BlogEntryReadTimeIcon = styled.span`
    margin-right: 5px;

    svg {
        color: var(--highlight);
        position: relative;
        top: 1px;
    }
`

export const BlogEntryReadTimeText = styled.span``

export const BlogEntryDescription = styled.h3`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    margin: 0;
`
