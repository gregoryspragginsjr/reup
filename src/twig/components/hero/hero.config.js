module.exports = {
  title: "Hero",
  status: "wip",
  context: {
    heading: 'We’re on your team.',
    paragraphs: '<p>Everyone levels up when adult learners go back to school. </p>',
    image: {
      srcset: 'https://placehold.co/960x540',
      src: 'https://placehold.co/960x540',
      alt: 'Test alt',
    },
    video: {
      id: '86jwyC1kFDk',
    },
  },
  variants: [
    {
      name: 'Reversed',
      context: {
        reverse: true,
      }
    },
    {
      name: 'Parallel',
      context: {
        type: 'parallel',
        tags: true,
        subheading: 'Optional Heading',
        heading: 'Headline Lorem Ipsum.',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Vestibulum orci est, auctor nec.</p>',
        buttons: [
          {
            button: {
              title: 'Button text',
              url: '/'
            }
          },
          {
            button: {
              title: 'Button text',
              url: '/'
            }
          }
        ]
      }
    },
    {
      name: 'Parallel Image Only',
      context: {
        video: null,
        type: 'parallel',
        tags: true,
        subheading: 'Optional Heading',
        heading: 'Headline Lorem Ipsum.',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Vestibulum orci est, auctor nec.</p>',
        buttons: [
          {
            button: {
              title: 'Button text',
              url: '/'
            }
          },
          {
            button: {
              title: 'Button text',
              url: '/'
            }
          }
        ]
      }
    },
    {
      name: 'Parallel No Media',
      context: {
        video: null,
        image: null,
        type: 'parallel',
        tags: true,
        subheading: 'Optional Heading',
        heading: 'Resources for Learners',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Vestibulum orci est, auctor nec neque non, hendrerit luctus.</p>',
        buttons: [
          {
            button: {
              title: 'Button text',
              url: '/'
            }
          },
          {
            button: {
              title: 'Button text',
              url: '/'
            }
          }
        ]
      }
    },
    // {
    //   name: 'Reverse Parallel',
    //   context: {
    //     type: 'parallel',
    //     reverse: true,
    //     tags: true,
    //     subheading: 'Optional Heading',
    //     heading: 'Headline Lorem Ipsum.',
    //     paragraphs: '<p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Vestibulum orci est, auctor nec.</p>',
    //     buttons: [
    //       {
    //         button: {
    //           title: 'Button text',
    //           url: '/'
    //         }
    //       },
    //       {
    //         button: {
    //           title: 'Button text',
    //           url: '/'
    //         }
    //       }
    //     ]
    //   }
    // }
  ],
}