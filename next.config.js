/** @type {import('next').NextConfig} */
const nextConfig = {
    // i18n: {
    //     locales: ['en-US', 'fr', 'nl-NL'],
    //     defaultLocale: 'en-US',
    //   },
    i18n: {
        locales: ['default', 'en', 'de', 'fr'],
        defaultLocale: 'default',
        localeDetection: false,
    },
    trailingSlash: true,
}

module.exports = nextConfig
