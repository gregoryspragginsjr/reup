module.exports = {
  title: "Context Section",
  status: "wip",
  hidden: true,
  context: {
    heading: 'This is a Context Section',
    subheading: 'Sometimes interstitial. Always quick and easy.',
    paragraphs: "<p>With classrooms brimming with so much experience they could double as board rooms, access to leading healthcare provider in the Carolinas a few blocks away, and sell out shows and renowned guest speakers routinely bringing all of Charlotte to QUC, there's only one thing we're missing: You.</p>",
    button: {
      title: 'Call to Action',
      url: 'https://welcometruth.com/'
    }
  },
  variants: [
    {
      name: 'Centered',
      context: {
        align: 'center'
      }
    },
    {
      name: 'Background Dark & Centered',
      context: {
        align: 'center',
        background: 'dark'
      }
    },
  ]
}