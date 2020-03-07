export const generalConfiguration = `
    a {
        color: var(--secondary);
        text-decoration: none;
    }
    
    a:visited {
        color: var(--secondary);
    }

    code {
        background-color: var(--highlight);
        transition: var(--backgroundTransition);
        font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    }

    blockquote {
        border-left: 2px solid;
        margin: 40px;
        padding: 10px 20px;
      
        @media (--phone) {
          margin: 10px;
          padding: 10px;
        }
      
        p:first-of-type {
          margin-top: 0;
        }
      
        p:last-of-type {
          margin-bottom: 0;
        }
      }
`

export default generalConfiguration
