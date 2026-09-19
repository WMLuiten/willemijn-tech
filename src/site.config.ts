export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  lang: string;
  ogLocale?: string;
  theme: {
    defaultColorMode: 'light' | 'dark' | 'system';
    showThemeToggle: boolean;
  };
  nav: {
    main: Array<{ name: string; href: string }>;
  };
}

const siteConfig: SiteConfig = {
  name: 'willemijn.tech',
  title: 'willemijn.tech',
  description: 'Personal website for Willemijn.',
  url: 'https://willemijn.tech',
  ogImage: '/og-image.png',
  lang: 'en',
  ogLocale: 'en_US',

  theme: {
    defaultColorMode: 'system',
    showThemeToggle: true,
  },

  nav: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about/' },
      { name: 'Contact', href: '/contact/' },
    ],
  },
};

export const resolvedOgLocale = siteConfig.ogLocale ?? 'en_US';

export default siteConfig;
