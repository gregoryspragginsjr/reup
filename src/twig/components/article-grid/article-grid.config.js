module.exports = {
  title: 'Article Grid',
  status: 'wip',
  context: {
    items: [
      {
        image: {
          srcset: 'https://via.placeholder.com/660x470',
          src: 'https://via.placeholder.com/660x470',
          alt: 'Test alt',
        },
        heading: 'This is an article',
        subheading: 'Articles leverage context components',
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
      {
        image: {
          srcset: 'https://via.placeholder.com/660x470',
          src: 'https://via.placeholder.com/660x470',
          alt: 'Test alt',
        },
        heading: 'This is an article',
        subheading: 'Articles leverage context components',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat ultricies consectetur. Duis vel ligula non nisi dignissim commodo vel dignissim nibh.</p>'
      },
      {
        image: {
          srcset: 'https://via.placeholder.com/660x470',
          src: 'https://via.placeholder.com/660x470',
          alt: 'Test alt',
        },
        heading: 'This is an article',
        subheading: 'Articles leverage context components',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat ultricies consectetur. Duis vel ligula non nisi dignissim commodo vel dignissim nibh.</p>'
      },
      {
        image: {
          srcset: 'https://via.placeholder.com/660x470',
          src: 'https://via.placeholder.com/660x470',
          alt: 'Test alt',
        },
        heading: 'This is an article',
        subheading: 'Articles leverage context components',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat ultricies consectetur. Duis vel ligula non nisi dignissim commodo vel dignissim nibh.</p>'
      },
      {
        image: {
          srcset: 'https://via.placeholder.com/660x470',
          src: 'https://via.placeholder.com/660x470',
          alt: 'Test alt',
        },
        heading: 'This is an article',
        subheading: 'Articles leverage context components',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat ultricies consectetur. Duis vel ligula non nisi dignissim commodo vel dignissim nibh.</p>'
      },
      {
        image: {
          srcset: 'https://via.placeholder.com/660x470',
          src: 'https://via.placeholder.com/660x470',
          alt: 'Test alt',
        },
        heading: 'This is an article',
        subheading: 'Articles leverage context components',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat ultricies consectetur. Duis vel ligula non nisi dignissim commodo vel dignissim nibh.</p>'
      },
    ]
  },
  variants: [
    {
      name: '3 Column',
      context: {
        columns: 3,
      }
    },
    {
      name: '2 Column',
      context: {
        columns: 2,
      }
    },
  ]
}