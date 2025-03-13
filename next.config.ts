import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  devIndicators: { position: 'bottom-left' },
  transpilePackages: ['three'],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
