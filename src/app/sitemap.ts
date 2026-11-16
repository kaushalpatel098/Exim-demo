import type { MetadataRoute } from 'next';
import siteConfig from '@site-config';

const routes = [...siteConfig.nav.map((item) => item.href), '/privacy'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route === '/' ? '' : route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
