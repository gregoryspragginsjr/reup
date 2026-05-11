module.exports = {
  title: 'Media Context',
  status: 'wip',
  context: {
    image: {
      srcset: 'https://placehold.co/660x660',
      src: 'https://placehold.co/660x660',
      alt: 'Test alt',
    },
    tags: true,
    subheading: 'Optional Heading',
    heading: 'Headline Lorem Ipsum Dolor Sit Amet Conse.',
    paragraphs: '<p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Vestibulum orci est, auctor nec neque non, hendrerit luctus.</p>',
    buttons: [
      {
        button: {
          title: 'Button Text',
          url: 'https://welcometruth.com/'
        }
      },
      {
        button: {
          title: 'Button Text',
          url: 'https://welcometruth.com/'
        }
      }
    ],
  },
  variants: [
    {
      name: 'Reverse',
      context: {
        reverse: true,
      }
    },
    {
      name: 'With Testimonials',
      context: {
        testimonials: [
          {
            image: {
              srcset: 'https://placehold.co/40x40',
              src: 'https://placehold.co/40x40',
              alt: 'Test alt',
            },
            quote: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Vestibulum orci est, auctor nec neque non, hendrerit luctus lorem ipsum dolor sit.',
            name: 'Jake A,',
            role: 'Role or Company Name'
          },
          {
            image: {
              srcset: 'https://placehold.co/40x40',
              src: 'https://placehold.co/40x40',
              alt: 'Test alt',
            },
            quote: 'Donec a urna vitae tellus ultrices suscipit. Suspendisse potenti. Vestibulum nulla lorem, rhoncus sit amet ultricies ut, aliquet eu tortor.',
            name: 'Sally T',
            role: 'Role or Company Name'
          },
          {
            image: {
              srcset: 'https://placehold.co/40x40',
              src: 'https://placehold.co/40x40',
              alt: 'Test alt',
            },
            quote: 'Fusce vestibulum consectetur massa, a viverra nisi consectetur nec. Praesent posuere faucibus sapien, a hendrerit metus hendrerit eget. Aliquam lacinia libero nisi, fermentum luctus tortor convallis at.',
            name: 'Jennifer M',
            role: 'Role or Company Name'
          },
          {
            image: {
              srcset: 'https://placehold.co/40x40',
              src: 'https://placehold.co/40x40',
              alt: 'Test alt',
            },
            quote: 'Sed nulla tortor, dapibus porttitor arcu et, volutpat auctor erat. Quisque lobortis justo vel posuere varius. Maecenas hendrerit blandit fringilla.',
            name: 'Tony R',
            role: 'Role or Company Name'
          },
        ]
      }
    },
    {
      name: 'Reverse with Testimonials',
      context: {
        reverse: true,
        testimonials: [
          {
            image: {
              srcset: 'https://placehold.co/40x40',
              src: 'https://placehold.co/40x40',
              alt: 'Test alt',
            },
            quote: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Vestibulum orci est, auctor nec neque non, hendrerit luctus lorem ipsum dolor sit.',
            name: 'Jake A,',
            role: 'Role or Company Name'
          },
          {
            image: {
              srcset: 'https://placehold.co/40x40',
              src: 'https://placehold.co/40x40',
              alt: 'Test alt',
            },
            quote: 'Donec a urna vitae tellus ultrices suscipit. Suspendisse potenti. Vestibulum nulla lorem, rhoncus sit amet ultricies ut, aliquet eu tortor.',
            name: 'Sally T',
            role: 'Role or Company Name'
          },
          {
            image: {
              srcset: 'https://placehold.co/40x40',
              src: 'https://placehold.co/40x40',
              alt: 'Test alt',
            },
            quote: 'Fusce vestibulum consectetur massa, a viverra nisi consectetur nec. Praesent posuere faucibus sapien, a hendrerit metus hendrerit eget. Aliquam lacinia libero nisi, fermentum luctus tortor convallis at.',
            name: 'Jennifer M',
            role: 'Role or Company Name'
          },
          {
            image: {
              srcset: 'https://placehold.co/40x40',
              src: 'https://placehold.co/40x40',
              alt: 'Test alt',
            },
            quote: 'Sed nulla tortor, dapibus porttitor arcu et, volutpat auctor erat. Quisque lobortis justo vel posuere varius. Maecenas hendrerit blandit fringilla.',
            name: 'Tony R',
            role: 'Role or Company Name'
          },
        ]
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