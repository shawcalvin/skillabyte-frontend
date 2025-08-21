/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.fallback = { fs: false };
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skillabyte-public.s3.us-west-1.amazonaws.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
