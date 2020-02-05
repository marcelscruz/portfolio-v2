export const prism = `
    pre[class*="language-"],
    pre[class*="language-"] > code {
        color: #a9a9b3;
        background: none;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;

    }

    /* Code blocks */
    pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
    }

    pre[class*="language-"] {
        background: #1a1a1d !important;
        border-radius: 8px;
    }

    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: rgba(255, 255, 255, .35);
    }

    .token.punctuation {
        color: #a9a9b3;
    }

    .token.tag,
    .token.attr-name,
    .token.namespace,
    .token.deleted {
        color: #e2777a;
    }

    .token.function-name {
        color: #6196cc;
    }

    .token.boolean,
    .token.number,
    .token.function {
        color: #f08d49;
    }

    .token.property,
    .token.class-name,
    .token.constant,
    .token.symbol {
        color: #f8c555;
    }

    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
        color: #cc99cd;
    }

    .token.string,
    .token.char,
    .token.attr-value,
    .token.regex,
    .token.variable {
        color: #7ec699;
    }

    .token.operator,
    .token.entity,
    .token.url {
        color: #67cdcc;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }

    .token.inserted {
        color: green;
    }

    pre[class*="language-"].line-numbers {
        position: relative;
        padding-left: 65px;
        counter-reset: linenumber;
    }

    pre[class*="language-"].line-numbers > code {
        position: relative;
        white-space: inherit;
    }

    .line-numbers .line-numbers-rows {
        position: absolute;
        pointer-events: none;
        top: 1em;
        font-size: 100%;
        left: 5px !important;
        width: 3em !important; /* works for line-numbers below 1000 lines */
        letter-spacing: -1px;
        border-right: 1px solid;
        opacity: .5;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

    }

        .line-numbers-rows > span {
            pointer-events: none;
            display: block;
            counter-increment: linenumber;
        }

            .line-numbers-rows > span:before {
                content: counter(linenumber);
                color: #999;
                display: block;
                padding-right: 0.8em;
                text-align: right;
            }

    div.code-toolbar {
        position: relative;
    }

    div.code-toolbar > .toolbar {
        position: absolute;
        top: .3em;
        right: .2em;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

    div.code-toolbar:hover > .toolbar {
        opacity: 1;
    }

    div.code-toolbar > .toolbar .toolbar-item {
        display: inline-block;
    }

    div.code-toolbar > .toolbar a {
        cursor: pointer;
    }

    div.code-toolbar > .toolbar button {
        background: none;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        -webkit-user-select: none; /* for button */
        -moz-user-select: none;
        -ms-user-select: none;
    }

    div.code-toolbar > .toolbar a,
    div.code-toolbar > .toolbar button,
    div.code-toolbar > .toolbar span {
        color: #bbb;
        font-size: .8em;
        padding: 0 .5em;
        background: #f5f2f0;
        background: rgba(224, 224, 224, 0.2);
        box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);
        border-radius: .5em;
    }

    div.code-toolbar > .toolbar a:hover,
    div.code-toolbar > .toolbar a:focus,
    div.code-toolbar > .toolbar button:hover,
    div.code-toolbar > .toolbar button:focus,
    div.code-toolbar > .toolbar span:hover,
    div.code-toolbar > .toolbar span:focus {
        color: inherit;
        text-decoration: none;
    }

    .command-line-prompt {
        border-right: 1px solid #999;
        display: block;
        float: left;
        font-size: 100%;
        letter-spacing: -1px;
        margin-right: 1em;
        pointer-events: none;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .command-line-prompt > span:before {
        color: #999;
        content: ' ';
        display: block;
        padding-right: 0.8em;
    }

    .command-line-prompt > span[data-user]:before {
        content: "[" attr(data-user) "@" attr(data-host) "] $";
    }

    .command-line-prompt > span[data-user="root"]:before {
        content: "[" attr(data-user) "@" attr(data-host) "] #";
    }

    .command-line-prompt > span[data-prompt]:before {
        content: attr(data-prompt);
    }
`

export default prism
