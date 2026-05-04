module.exports = {
  title: 'Video',
  status: 'wip',
  context: {
    image: {
      srcset: 'https://via.placeholder.com/960x540',
      src: 'https://via.placeholder.com/960x540',
      alt: 'Test alt',
    },
    video: {
      id: '86jwyC1kFDk',
    },
  },
  variants: [
    {
      name: 'With Loop',
      context: {
        video: {
          id: '86jwyC1kFDk',
          loop: 'https://experience.brynathyn.edu/wp-content/themes/bryn-athyn/dist/videos/videoplayback2.mp4',
        },
      },
    }
  ]
}