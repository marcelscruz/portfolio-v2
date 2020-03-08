const path = require('path')

module.exports = {
    siteMetadata: {
        title: 'marcel cruz',
        author: 'Marcel Cruz',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                assets: path.join(__dirname, 'src/assets'),
                components: path.join(__dirname, 'src/components'),
                constants: path.join(__dirname, 'src/constants'),
                fonts: path.join(__dirname, 'src/assets/fonts'),
                hooks: path.join(__dirname, 'src/hooks'),
                images: path.join(__dirname, 'src/assets/images'),
                layout: path.join(__dirname, 'src/layout'),
                pages: path.join(__dirname, 'src/pages'),
                src: path.join(__dirname, 'src'),
                styles: path.join(__dirname, 'src/styles'),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `marcel cruz`,
                short_name: `marcel cruz`,
                start_url: `/`,
                background_color: `#111216`,
                theme_color: `#f4bf3a`,
                display: `standalone`,
                icon: 'src/assets/images/keyboard.png',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    `gatsby-remark-reading-time`,
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-embed-video',
                        options: {
                            related: false,
                            noIframeBorder: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/layout/layout.js`),
            },
        },
    ],
}
