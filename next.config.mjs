/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  webpack(config) {
    // Find the existing rule that handles images/assets and make sure it DOESN'T grab svg
    const assetRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));
    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }

    // Add a dedicated SVG rule:
    // - `import iconUrl from "./icon.svg?url"` -> gives URL string (asset)
    // - `import Icon from "./icon.svg"` -> gives React component (SVGR)
    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        {
          resourceQuery: /url/, // *.svg?url
          type: "asset/resource",
        },
        {
          // default: treat as React component
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                exportType: "default",
                svgo: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          // keep viewBox so sizing works
                          removeViewBox: false,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
