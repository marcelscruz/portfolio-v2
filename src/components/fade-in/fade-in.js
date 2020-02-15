import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import { Fader } from './fade-in.styles'

export const FadeIn = props => {
    const [isVisible, setIsVisible] = useState(false)

    const { children, minTopValue, partialVisibility, ...otherProps } = props

    const handleReveal = receivedState => {
        if (!isVisible) {
            setTimeout(() => setIsVisible(receivedState))
        }
    }

    return (
        <VisibilitySensor
            onChange={handleReveal}
            minTopValue={minTopValue}
            partialVisibility={partialVisibility}
        >
            <Fader isVisible={isVisible} {...otherProps}>
                {children}
            </Fader>
        </VisibilitySensor>
    )
}

FadeIn.propTypes = {
    up: PropTypes.bool,
    left: PropTypes.bool,
    bottom: PropTypes.bool,
    right: PropTypes.bool,
    delay: PropTypes.number,
    minTopValue: PropTypes.number,
    partialVisibility: PropTypes.bool,
}

FadeIn.defaultProps = {
    up: true,
    left: false,
    bottom: false,
    right: false,
    delay: 0,
    minTopValue: 100,
    partialVisibility: true,
}

export default FadeIn
