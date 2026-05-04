module.exports = {
  title: 'Media Context',
  status: 'wip',
  context: {
    image: {
      srcset: 'https://via.placeholder.com/660x470',
      src: 'https://via.placeholder.com/660x470',
      alt: 'Test alt',
    },
    heading: 'This is a Media Context',
    subheading: 'The most self explanatory component',
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
    ]
  },
  variants: [
    {
      name: 'Reverse',
      context: {
        reverse: true,
      }
    },
    {
      name: 'With Video',
      context: {
        video: {
          id: '86jwyC1kFDk',
        },
        button: null,
      }
    }
  ]
}