/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'lh3.googleusercontent.com'
            },
            {
                hostname: 'media.istockphoto.com'
            }
        ]
    }
}

module.exports = nextConfig
