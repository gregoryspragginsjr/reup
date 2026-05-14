module.exports = {
  title: 'Video',
  status: 'wip',
  context: {
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
      name: 'Wistia',
      context: {
        image: null,
        video: {
          player: 'wistia',
          id: 'y4lkawa07u',
        }
      }
    }
    // {
    //   name: 'With Loop',
    //   context: {
    //     video: {
    //       id: '86jwyC1kFDk',
    //       loop: 'https://experience.brynathyn.edu/wp-content/themes/bryn-athyn/dist/videos/videoplayback2.mp4',
    //     },
    //   },
    // }
  ]
}