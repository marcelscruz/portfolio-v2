import styled from 'styled-components'

export const IconWrapper = styled.button`
    align-items: center;
    background: var(--dark-background);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    height: 36px;
    justify-content: center;
    margin-left: 50px;
    overflow: hidden;
    position: relative;
    transition: opacity 0.3s ease;
    width: 40px;

    &:hover {
        opacity: 1;

        div:first-of-type {
            background: var(--yellow);
            border-color: var(--yellow);

            &::before {
                border-color: var(--yellow);
            }

            &::after {
                box-shadow: 0 -23px 0 var(--yellow), 0 23px 0 var(--yellow),
                    23px 0 0 var(--yellow), -23px 0 0 var(--yellow),
                    15px 15px 0 var(--yellow), -15px 15px 0 var(--yellow),
                    15px -15px 0 var(--yellow), -15px -15px 0 var(--yellow);
            }
        }
    }

    &:focus {
        outline: none;
    }

    &[data-a11y='true']:focus::after {
        background: rgba(var(--light-primary-hex), 0.01);
        border: 2px solid var(--light-primary);
        border-radius: 5px;
        content: '';
        height: 160%;
        left: 0;
        position: absolute;
        top: -30%;
        width: 100%;
    }
`

export const MoonOrSun = styled.div`
    background: var(--light-primary);
    border: ${p => (p.isDarkModeOn ? '4px' : '2px')} solid var(--light-primary);
    border-radius: 50%;
    height: 24px;
    overflow: ${p => (p.isDarkModeOn ? 'visible' : 'hidden')};
    position: relative;
    transform: scale(${p => (p.isDarkModeOn ? 0.55 : 1)});
    transition: all 0.3s ease;
    width: 24px;

    &::before {
        content: '';
        height: 24px;
        opacity: ${p => (p.isDarkModeOn ? 0 : 1)};
        position: absolute;
        right: -9px;
        top: -9px;
        transform: translate(${p => (p.isDarkModeOn ? '14px, -14px' : '0, 0')});
        transition: transform 0.3s ease;
        width: 24px;
    }

    &::after {
        border-radius: 50%;
        box-shadow: 0 -23px 0 var(--light-primary),
            0 23px 0 var(--light-primary), 23px 0 0 var(--light-primary),
            -23px 0 0 var(--light-primary), 15px 15px 0 var(--light-primary),
            -15px 15px 0 var(--light-primary), 15px -15px 0 var(--light-primary),
            -15px -15px 0 var(--light-primary);
        content: '';
        height: 8px;
        left: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        transform: scale(${p => (p.isDarkModeOn ? 1 : 0)});
        transition: all 0.3s ease;
        width: 8px;
    }
`

export const MoonMask = styled.div`
    background: var(--dark-primary);
    border: 0;
    border-radius: 50%;
    height: 24px;
    opacity: ${p => (p.isDarkModeOn ? 0 : 1)};
    pointer-events: none;
    position: absolute;
    right: 0;
    top: -2px;
    transform: translate(${p => (p.isDarkModeOn ? '14px, -14px' : '0, 0')});
    transition: background 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955),
        color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), transform 0.3s ease;
    width: 24px;
`
