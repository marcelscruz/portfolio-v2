import sizes from './sizes'

const { phoneWidth, tabletWidth, maxOverallWidth } = sizes

export const mediaQueries = {
    phoneMediaQuery: `max-width: ${phoneWidth}`,
    tabletMediaQuery: `max-width: ${tabletWidth}`,
    maxOverallMediaQuery: `max-width: ${maxOverallWidth}`,
}

export default mediaQueries
