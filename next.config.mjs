/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src * 'unsafe-inline' 'unsafe-eval';
    script-src * 'unsafe-inline' 'unsafe-eval';
    style-src * 'unsafe-inline';
    img-src * data: blob:;
    font-src *;
    connect-src *;
`;

const nextConfig = {
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    }
  },
  eslint: {
    // Advertencia: Esto permitirá que la compilación se complete incluso si
    // tu proyecto tiene errores de ESLint.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          }
        ]
      }
    ];
  }
};

export default nextConfig;
