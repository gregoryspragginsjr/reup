module.exports = {
  title: "Hero",
  status: "wip",
  context: {
    heading: 'This is a Hero',
    subheading: 'The most familiar component',
    paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat ultricies consectetur. Duis vel ligula non nisi dignissim commodo vel dignissim nibh.</p>',
    buttons: [
      {
        button: {
          title: 'Active',
          url: 'https://welcometruth.com/'
        }
      },
      {
        button: {
          title: 'Active',
          url: 'https://welcometruth.com/'
        }
      }
    ],
    image: {
      srcset: 'https://via.placeholder.com/960x540',
      src: 'https://via.placeholder.com/960x540',
      alt: 'Test alt',
    },
  },
  variants: [
    {
      name: 'With Loop',
      context: {
        loop: 'https://experience.brynathyn.edu/wp-content/themes/bryn-athyn/dist/videos/videoplayback2.mp4',
      },
    },
    {
      name: 'With Video',
      context: {
        video: {
          id: '86jwyC1kFDk',
        },
      },
    }
  ],
}