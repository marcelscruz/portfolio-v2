import { createGlobalStyle } from 'styled-components'
import prism from './prism'
import reset from './reset'
import variables from './variables'
import generalConfiguration from './general-configuration'

export const GlobalStyle = createGlobalStyle`        
    ${reset}
    ${prism}
    ${variables}
    ${generalConfiguration}
`

export default GlobalStyle
