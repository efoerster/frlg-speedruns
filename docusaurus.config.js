/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  title: 'FRLG Speedruns',
  url: 'https://frlg-speedruns.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'efoerster',
  projectName: 'frlg-speedruns',
  plugins: [path.resolve(__dirname, './plugins/ts-loader')],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://www.speedrun.com/pkmnfrlg',
          label: 'Leaderboard',
        },
        {
          href: 'https://discord.gg/NjQFEkc',
          position: 'right',
          className: 'header-discord-link',
          'aria-label': 'Discord server',
        },
        {
          href: 'https://github.com/efoerster/frlg-speedruns',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'src/docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/efoerster/frlg-speedruns/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
