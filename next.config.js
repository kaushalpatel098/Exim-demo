const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGitHubPages ? '/Exim-demo' : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
};

module.exports = nextConfig;
