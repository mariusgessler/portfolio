const projects = [
  {
    title: 'Generated Static Site (JAM): Portfolio',
    icon: 'portfolio',
    description: 'I created this personal website to showcase some of my recent work - and experiment with new technology. You’re currently on it. :-)',
    tools: [
      'gatsby', 'graphql', 'styled_components', 'contenful',
    ],
    links: [
      {
        type: 'github',
        link: 'https://github.com/mariusgessler/portfolio',
      },
    ],
  },
  {
    title: 'Telegram Bot: Bored in the House',
    icon: 'paperplane',
    description: 'I\'m bored in the house and I\'m in the house bored. That\'s why I created this simple Telegram Bot to hopefully give user some ideas on what to do, while we were all stuck at home.',
    tools: [
      'express', 'js', 'firebase',
    ],
    links: [
      {
        type: 'live',
        link: 'https://t.me/boredinthehouse_bot'
      },
      {
        type: 'github',
        link: 'https://github.com/mariusgessler/bored_in_the_house',
      },
    ],
  },
  {
    title: 'Landing Pages: Hiber Global',
    icon: 'satellite',
    description: 'Some of the public-facing work I did at Hiber includes these two landing pages which I built in collaboration with our talented in-house designers',
    tools: [
      'nunjucks', 'eleventy', 'scss',
    ],
    links: [
      {
        type: 'live',
        link: 'https://hiber.global/solutions/private-lorawan/',
      },
      {
        type: 'live',
        link: 'https://hiber.global/solutions/well-integrity/',
      },
    ],
  },
];

export default projects;
