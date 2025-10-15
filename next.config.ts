import type { NextConfig } from 'next'
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
    webpack(config: Configuration) {
        const fileLoaderRule = (config.module?.rules as any[])?.find((rule) =>
            rule?.test?.test?.('.svg')
        )

        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i
        }

        config.module?.rules?.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        svgoConfig: {
                            plugins: [
                                { name: 'removeViewBox', active: false },
                                { name: 'removeDimensions', active: true },
                            ],
                        },
                    },
                },
            ],
        })

        return config
    },
}

export default nextConfig
