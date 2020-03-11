import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { IconWrapper, MoonOrSun, MoonMask } from './theme-toggle.styles'

const ThemeToggle = ({ isDarkModeOn, setIsDarkModeOn }) => {
    const [isOn, setIsOn] = useState(true)

    // Used to force the icon to update it's initial state.
    // Without it the icon starts in the light mode (moon)
    // even if dark mode is set. ¯\_(ツ)_/¯
    useEffect(() => {
        setIsOn(isDarkModeOn)
    }, [isDarkModeOn])

    function toggleColorMode(e) {
        e.preventDefault() // Doesn't allow outline (focus) when clicked

        setIsDarkModeOn(!isDarkModeOn)
    }

    return (
        <IconWrapper
            isDarkModeOn={isOn}
            onMouseDown={toggleColorMode}
            onTouchEnd={toggleColorMode}
            data-a11y="false"
            aria-label={isOn ? 'Activate light mode' : 'Activate dark mode'}
        >
            <MoonOrSun isDarkModeOn={isOn} />
            <MoonMask isDarkModeOn={isOn} />
        </IconWrapper>
    )
}

ThemeToggle.propTypes = {
    isDarkModeOn: PropTypes.bool.isRequired,
    setIsDarkModeOn: PropTypes.func.isRequired,
}

export default ThemeToggle
