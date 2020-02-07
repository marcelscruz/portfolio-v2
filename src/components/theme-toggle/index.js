import React from 'react'
import PropTypes from 'prop-types'
import { IconWrapper, MoonOrSun, MoonMask } from './theme-toggle.styles'

const ThemeToggle = ({ isDarkModeOn, setIsDarkModeOn }) => {
    function toggleColorMode() {
        setIsDarkModeOn(!isDarkModeOn)
    }

    return (
        <IconWrapper
            isDarkModeOn={isDarkModeOn}
            onClick={toggleColorMode}
            data-a11y="false"
            aria-label={
                isDarkModeOn ? 'Activate light mode' : 'Activate dark mode'
            }
        >
            <MoonOrSun isDarkModeOn={isDarkModeOn} />
            <MoonMask isDarkModeOn={isDarkModeOn} />
        </IconWrapper>
    )
}

ThemeToggle.propTypes = {
    isDarkModeOn: PropTypes.bool.isRequired,
    setIsDarkModeOn: PropTypes.func.isRequired,
}

export default ThemeToggle
