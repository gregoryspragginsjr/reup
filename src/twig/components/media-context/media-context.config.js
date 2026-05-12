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
      name: 'Medium',
      context: {
        size: 'medium',
        image: {
          srcset: 'https://placehold.co/400x300',
          src: 'https://placehold.co/400x300',
          alt: 'Test alt',
        },
        heading: 'Headline Lorem Ipsum Dolor Sit'
      }
    },
    {
      name: 'Medium Reverse',
      context: {
        size: 'medium',
        reverse: true,
        image: {
          srcset: 'https://placehold.co/400x300',
          src: 'https://placehold.co/400x300',
          alt: 'Test alt',
        },
        heading: 'Headline Lorem Ipsum Dolor Sit'
      }
    },
    {
      name: 'Medium with Cards',
      context: {
        size: 'medium',
        image: {
          srcset: 'https://placehold.co/400x300',
          src: 'https://placehold.co/400x300',
          alt: 'Test alt',
        },
        heading: 'Headline Lorem Ipsum Dolor Sit',
        cards: [
          {
            image: {
              srcset: 'https://placehold.co/400x400',
              src: 'https://placehold.co/400x400',
              alt: 'Test alt',
            },
            tags: true,
            subheading: 'Optional heading',
            heading: 'Block headline lorem',
            paragraphs: '<p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Vestibulum orci est, auctor nec neque non.</p>',
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
          {
            image: {
              srcset: 'https://placehold.co/400x400',
              src: 'https://placehold.co/400x400',
              alt: 'Test alt',
            },
            tags: true,
            subheading: 'Optional heading',
            heading: 'Block headline lorem',
            paragraphs: '<p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Vestibulum orci est, auctor nec neque non.</p>',
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
          }
        ]
      }
    },
    {
      name: 'Display',
      context: {
        size: 'display',
        image: {
          srcset: 'https://placehold.co/640x720',
          src: 'https://placehold.co/400x400',
          alt: 'Test alt',
        },
        subheading: null,
        tags: null,
        heading: 'Level up with ReUp',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien dolor, maximus sit amet elementum sit amet, tincidunt eu turpis. Ut pellentesque odio libero, ac finibus nulla mattis sed.</p>',
        buttons: null,
      }
    },
    {
      name: 'Display Reverse',
      context: {
        size: 'display',
        reverse: true,
        image: {
          srcset: 'https://placehold.co/640x720',
          src: 'https://placehold.co/400x400',
          alt: 'Test alt',
        },
        subheading: null,
        tags: null,
        heading: 'Level up with ReUp',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien dolor, maximus sit amet elementum sit amet, tincidunt eu turpis. Ut pellentesque odio libero, ac finibus nulla mattis sed.</p>',
        buttons: null,
      }
    },
    {
      name: 'Display with Testimonials',
      context: {
        size: 'display',
        reverse: true,
        image: {
          srcset: 'https://placehold.co/640x720',
          src: 'https://placehold.co/400x400',
          alt: 'Test alt',
        },
        subheading: null,
        tags: null,
        heading: 'Level up with ReUp',
        paragraphs: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien dolor, maximus sit amet elementum sit amet, tincidunt eu turpis. Ut pellentesque odio libero, ac finibus nulla mattis sed.</p>',
        buttons: null,
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
  ]
}