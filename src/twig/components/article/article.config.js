module.exports = {
  title: 'Article',
  status: 'wip',
  context: {
    image: {
      srcset: 'https://placehold.co/660x470',
      src: 'https://placehold.co/660x470',
      alt: 'Test alt',
    },
    heading: 'This is an article',
    subheading: 'Articles leverage context components',
    paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat ultricies consectetur. Duis vel ligula non nisi dignissim commodo vel dignissim nibh.</p>'
  },
  variants: [
    {
      name: 'Parallel',
      context: {
        type: 'parallel',
        subheading: null,
        tags: [
          'institutions',
          'learners',
          'states',
        ],
        image: {
          srcset: 'https://placehold.co/80x80',
          src: 'https://placehold.co/80x80',
          alt: 'Test alt',
        },
        buttons: [
          {
            button: {
              title: 'Information for States',
              url: '/'
            }
          }
        ]
      }
    }
  ]
}