module.exports = {
  title: 'CTA Context Section',
  status: 'wip',
  context: {
    subheading: 'Optional heading',
    heading: 'Lorem ipsum dolor sit amet, consect adipiscing elit. ',
    paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum mauris orci, sed tincidunt mauris porta convallis. Proin id nunc porttitor tortor pretium interdum.</p>',
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
  },
  variants: [
    {
      name: 'small',
      context: {
        size: 'small',
        image: {
          srcset: 'https://placehold.co/60x60',
          src: 'https://placehold.co/60x60',
          alt: 'Test alt',
        },
        heading: 'Optional H2 Lorem Ipsum Dolor',
      }
    }
  ]
}