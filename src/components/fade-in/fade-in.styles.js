import styled, { css } from 'styled-components'

const config = {
    duration: 0.3, // seconds
    distance: 5, // pixels to move from bottom to top
    easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
}

const translateHelper = ({ up, left, bottom, right }) => {
    if (up) {
        return `0, ${config.distance}px, 0`
    }
    if (left) {
        return `${config.distance}px, 0, 0`
    }
    if (bottom) {
        return `0, ${config.distance * -1}px, 0`
    }
    if (right) {
        return `${config.distance * -1}px, 0, 0`
    }

    return '0, 0, 0'
}

export const Fader = styled.div`
    opacity: 0;
    transform: translate3d(${props => translateHelper(props)});
    transition: all ${config.duration}s ${config.easing};

    ${({ delay }) =>
        delay &&
        css`
            transition-delay: ${delay}ms;
        `};

    ${({ isVisible }) =>
        isVisible &&
        css`
            opacity: 1;
            transform: translate3d(0, 0, 0);
        `}
`
