import InterUIBold from 'fonts/Inter-UI-Bold.woff'
import InterUIBoldItalic from 'fonts/Inter-UI-BoldItalic.woff'
import InterUIItalic from 'fonts/Inter-UI-Italic.woff'
import InterUIMedium from 'fonts/Inter-UI-Medium.woff'
import InterUIMediumItalic from 'fonts/Inter-UI-MediumItalic.woff'
import InterUIRegular from 'fonts/Inter-UI-Regular.woff'

const fonts = `
    @font-face {
        font-family: 'Inter UI';
        font-style:  normal;
        font-weight: 400;
        font-display: swap;
        unicode-range: U+000-5FF;
        src: local('Inter UI'), url(${InterUIRegular}) format("woff");
    }

    @font-face {
        font-family: 'Inter UI';
        font-style:  italic;
        font-weight: 400;
        font-display: swap;
        unicode-range: U+000-5FF;
        src: local('Inter UI'), url(${InterUIItalic}) format("woff");
    }

    @font-face {
        font-family: 'Inter UI';
        font-style:  normal;
        font-weight: 600;
        font-display: swap;
        unicode-range: U+000-5FF;
        src: local('Inter UI'), url(${InterUIMedium}) format("woff");
    }

    @font-face {
        font-family: 'Inter UI';
        font-style:  italic;
        font-weight: 600;
        font-display: swap;
        unicode-range: U+000-5FF;
        src: local('Inter UI'), url(${InterUIMediumItalic}) format("woff");
    }

    @font-face {
        font-family: 'Inter UI';
        font-style:  normal;
        font-weight: 800;
        font-display: swap;
        unicode-range: U+000-5FF;
        src: local('Inter UI'), url(${InterUIBold}) format("woff");
    }
    
    @font-face {
        font-family: 'Inter UI';
        font-style:  italic;
        font-weight: 800;
        font-display: swap;
        unicode-range: U+000-5FF;
        src: local('Inter UI'), url(${InterUIBoldItalic}) format("woff");
    }  
`

export default fonts
