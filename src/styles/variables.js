import { sizes } from 'constants/sizes'

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
        --primary-hex: var(--dark-primary-hex);
        --secondary: var(--light-primary);
        --secondary-hex: var(--light-primary-hex);
    }

    :root.light-mode {
        /* Light theme */
        --primary: var(--light-primary);
        --primary-hex: var(--light-primary-hex);
        --secondary: var(--dark-primary);
        --secondary-hex: var(--dark-primary-hex);
    }
`

export default variables
