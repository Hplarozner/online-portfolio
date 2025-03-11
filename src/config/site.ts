export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/project",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  links: [
    {
      text: 'Github',
      icon: 'pi pi-github',
      link: 'https://github.com/Hplarozner'
    },
    {
      text: 'Linkedin',
      icon: 'pi pi-linkedin',
      link: 'https://www.linkedin.com/in/hplarozner/'
    },
    {
      text: 'Discord',
      icon: 'pi pi-discord',
      link: 'https://discordapp.com/users/861825603418325043'
    },
    {
      text: 'Telegram',
      icon: 'pi pi-telegram',
      link: 'https://t.me/HplarOzner'
    },
  ],
};
