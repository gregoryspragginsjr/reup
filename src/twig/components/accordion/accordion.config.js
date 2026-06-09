module.exports = {
  title: "Accordion",
  status: "wip",
  hidden: true,
  context: {
    panels: [
      {
        heading: 'This is an Accordion Panel',
        content: '<p>Lorem <a href="/">ipsum dolor</a> sit amet, consectetur adipiscing elit. Quisque pulvinar non urna et fringilla. Duis a nulla iaculis lectus posuere pellentesque non maximus justo. Praesent in diam semper, maximus ligula et, tincidunt ligula. Nam ultrices ipsum justo, sed varius ante sodales eget. Fusce vel malesuada ante. Fusce viverra ipsum ipsum, in suscipit est efficitur at. Nam egestas purus mi, quis iaculis lectus rhoncus vel. Fusce cursus ligula a magna commodo, sed consectetur nisl facilisis. In sit amet porttitor elit. Donec a ultricies urna, vitae pulvinar enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent sed massa sed diam dignissim ultrices. Vivamus eget rhoncus lectus.</p><ul><li><a href="/">Testing a list item</a></li><li><a href="/">Testing a list item again.</a></li></ul>'
      },
      {
        heading: 'This is another Accordion Panel',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar non urna et fringilla. Duis a nulla iaculis lectus posuere pellentesque non maximus justo. Praesent in diam semper, maximus ligula et, tincidunt ligula. Nam ultrices ipsum justo, sed varius ante sodales eget. Fusce vel malesuada ante. Fusce viverra ipsum ipsum, in suscipit est efficitur at. Nam egestas purus mi, quis iaculis lectus rhoncus vel. Fusce cursus ligula a magna commodo, sed consectetur nisl facilisis. In sit amet porttitor elit. Donec a ultricies urna, vitae pulvinar enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent sed massa sed diam dignissim ultrices. Vivamus eget rhoncus lectus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar non urna et fringilla. Duis a nulla iaculis lectus posuere pellentesque non maximus justo. Praesent in diam semper, maximus ligula et, tincidunt ligula. Nam ultrices ipsum justo, sed varius ante sodales eget. Fusce vel malesuada ante. Fusce viverra ipsum ipsum, in suscipit est efficitur at. Nam egestas purus mi, quis iaculis lectus rhoncus vel. Fusce cursus ligula a magna commodo, sed consectetur nisl facilisis. In sit amet porttitor elit. Donec a ultricies urna, vitae pulvinar enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent sed massa sed diam dignissim ultrices. Vivamus eget rhoncus lectus.</p>'
      },
      {
        heading: 'This is a third Accordion Panel',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar non urna et fringilla. Duis a nulla iaculis lectus posuere pellentesque non maximus justo. Praesent in diam semper, maximus ligula et, tincidunt ligula. Nam ultrices ipsum justo, sed varius ante sodales eget. Fusce vel malesuada ante. Fusce viverra ipsum ipsum, in suscipit est efficitur at. Nam egestas purus mi, quis iaculis lectus rhoncus vel. Fusce cursus ligula a magna commodo, sed consectetur nisl facilisis. In sit amet porttitor elit. Donec a ultricies urna, vitae pulvinar enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent sed massa sed diam dignissim ultrices. Vivamus eget rhoncus lectus.</p>'
      },
    ]
  },
  variants: [
    {
      name: 'Single Select',
      context: {
        single: true,
      }
    }
  ]
};
