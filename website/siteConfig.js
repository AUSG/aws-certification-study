/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Yoonho',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://avatars0.githubusercontent.com/u/6959851?s=460&v=4',
    infoLink: 'https://github.com/yoonhoGo',
    pinned: true,
  },
  {
    caption: 'Seohyun',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://avatars1.githubusercontent.com/u/35247295?s=460&v=4',
    infoLink: 'https://github.com/seohyun0120',
    pinned: true,
  },
  {
    caption: 'Juneseok',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://avatars1.githubusercontent.com/u/29401441?s=460&v=4',
    infoLink: 'https://github.com/byunjuneseok',
    pinned: true,
  },
  {
    caption: 'Dongsun',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://avatars3.githubusercontent.com/u/52663248?s=460&v=4',
    infoLink: 'https://github.com/shindongsun0',
    pinned: true,
  },
  {
    caption: 'Siyeon Lee',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://avatars0.githubusercontent.com/u/35549653?s=460&v=4',
    infoLink: 'https://github.com/siyeons',
    pinned: true,
  },
  {
    caption: 'tinyjin',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://avatars3.githubusercontent.com/u/11167117?s=460&v=4',
    infoLink: 'https://github.com/tinyjin',
    pinned: true,
  },
]

const siteConfig = {
  title: 'AWS Certification Study', // Title for your website.
  tagline: 'AUSG의 AWS 자격증 스터디',
  url: 'https://AUSG.github.io', // Your website URL
  baseUrl: '/aws-certification-study/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  facebookAppId: 'ausgkr',

  // Used for publishing and more
  projectName: 'aws-certification-study',
  organizationName: 'AUSG',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{ doc: 'doc1', label: 'Docs' }, { page: 'users', label: 'Authors'}],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/ausg logo.png',
  footerIcon: 'img/ausg logo.png',
  favicon: 'img/ausg logo.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#FF9900',
    secondaryColor: '##503df5',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} @ausg`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/ausg/aws-certification-study',
}

module.exports = siteConfig
