import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconWrapper = styled.button`
  background: var(--dark-background);
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;
  height: 36px;
  overflow: hidden;

  &:hover {
    opacity: 1;

    div:first-of-type {
      background: #f4bf3a;
      border-color: #f4bf3a;

      &::before {
        border-color: #f4bf3a;
      }

      &::after {
        box-shadow: 0 -23px 0 #f4bf3a, 0 23px 0 #f4bf3a, 23px 0 0 #f4bf3a,
          -23px 0 0 #f4bf3a, 15px 15px 0 #f4bf3a, -15px 15px 0 #f4bf3a,
          15px -15px 0 #f4bf3a, -15px -15px 0 #f4bf3a;
      }
    }
  }

  &:focus {
    outline: none;
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid #f2faff;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  /* display: inline-flex;
    transform: scale(0.708);
    margin-left: 10px;


    &:hover {
      opacity: 0.5;
    } */
`

const MoonOrSun = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${p => (p.isDark ? '4px' : '2px')} solid #f2faff;
  background: #f2faff;
  transform: scale(${p => (p.isDark ? 0.55 : 1)});
  transition: all 0.3s ease;
  overflow: ${p => (p.isDark ? 'visible' : 'hidden')};

  /* &:hover {
    background: #f4bf3a;
    border-color: #f4bf3a;

    &::before {
      border-color: #f4bf3a;
    }

    &::after {
      box-shadow: 0 -23px 0 #f4bf3a, 0 23px 0 #f4bf3a, 23px 0 0 #f4bf3a,
        -23px 0 0 #f4bf3a, 15px 15px 0 #f4bf3a, -15px 15px 0 #f4bf3a,
        15px -15px 0 #f4bf3a, -15px -15px 0 #f4bf3a;
    }
  } */

  &::before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    /* border: 2px solid #f2faff;
    border-radius: 50%; */
    transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
    opacity: ${p => (p.isDark ? 0 : 1)};
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 #f2faff, 0 23px 0 #f2faff, 23px 0 0 #f2faff,
      -23px 0 0 #f2faff, 15px 15px 0 #f2faff, -15px 15px 0 #f2faff,
      15px -15px 0 #f2faff, -15px -15px 0 #f2faff;
    transform: scale(${p => (p.isDark ? 1 : 0)});
    transition: all 0.3s ease;
  }
`

const MoonMask = styled.div`
  position: absolute;
  pointer-events: none;
  right: 0;
  top: -2px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: #111216;
  transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
  opacity: ${p => (p.isDark ? 0 : 1)};
  transition: background 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), transform 0.3s ease;
`

const ThemeToggle = ({ onToggle }) => {
  const defaultThemeState =
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) ||
    null

  const [isDark, toggleIsDark] = useState(defaultThemeState === 'dark' && true)

  function toggleColorMode() {
    toggleIsDark(!isDark)
    onToggle()
  }

  return (
    <IconWrapper
      isDark={isDark}
      onClick={toggleColorMode}
      data-a11y="false"
      aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
      title={isDark ? 'Activate light mode' : 'Activate dark mode'}
    >
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} />
    </IconWrapper>
  )
}

ThemeToggle.propTypes = {
  onToggle: PropTypes.func,
}

export default ThemeToggle
