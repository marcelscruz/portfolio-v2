import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import prism from './prism'
import reset from './reset'
import variables from './variables'
import generalConfiguration from './general-configuration'

export const GlobalStyle = createGlobalStyle`        
    ${reset}
    ${fonts}
    ${prism}
    ${variables}
    ${generalConfiguration}
`

export default GlobalStyle
