import { sizes } from 'constants'

const { phoneWidth, tabletWidth, maxOverallWidth } = sizes

const variables = `
    :root {
        --light-primary: #ffffff;
        --light-primary-hex: 255, 255, 255;
        --light-secondary: #eaeaea;
        --light-tertiary: #999;
        --light-border-color: #dcdcdc;

        --dark-primary: #111216;
        --dark-primary-hex: 17, 18, 22;
        --dark-secondary: #3b3d42;
        --dark-tertiary: #73747b;
        --dark-border-color: #4a4b50;

        /* Theme agnostic */
        --yellow: #f4bf3a;
        --yellow-hex: 244, 191, 58;
        --yellow-light: #ffeccc;
        --white: #f2faff;

        /* Sizes */
        --phoneWidth: ${phoneWidth};
        --tabletWidth: ${tabletWidth};
        --maxWidth: ${maxOverallWidth};

        /* Transitions */
        --backgroundTransition: background 0.5s;
        --colorTransition: color 0.5s;

        /* Dark theme */
        --primary: var(--dark-primary);
        --secondary: var(--light-primary);
    }

    :root.light-mode {
        /* Light theme */
        --primary: var(--light-primary);
        --secondary: var(--dark-primary);
    }
`

export default variables
