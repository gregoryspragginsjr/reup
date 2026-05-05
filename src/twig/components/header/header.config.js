module.exports = {
  title: 'Header',
  status: 'wip',
  notes: 'The primary navigation tool for Reup. The `header` supports both dropdowns and a utility navigation and follows the user as they navigate the vertical real estate of a page. Scrolling down hides the `header`, while scrolling back up calls it back.<h3>Keyboard Controls</h3><ul><li>`Tab` key reveals the `Skip to Content Button` as your first navigation item.</li><li>← and → to cycle through primary landing pages without revealing dropdowns.</li></ul><h3>Properties</h3>`primary` (`array`): A list of the component primary navigation items.<br/><br/>`resources` (`array`): A list of all resource links for this component, featured within the `utility-navigation`.<br/><br/>`offices` (`array`): A list of all office link lists, featured within the `utility-navigation`.<br/><br/>`news` (`array`): A list of all news articles, represented as `card` components within the `utility-navigation`.<br/><br/>`events` (`array / object`): A single `object` list for your `events` `card` within the `utility-navigation`. Please reference the `Context` tab for more details on data structure.<br/><br/>`featured` (`array`): A list representing all cards located at the bottom of your `utility-navigation`.',
  context: {
    primary: [
      {
        url: '/',
        title: 'Collective Solutions',
        children: [
          {
            url: '/',
            title: 'Outreach and Re-Engagement',
            excerpt: 'Connect and inspire'
          },
          {
            url: '/',
            title: 'Data',
            excerpt: 'Insights that drive action'
          },
          {
            url: '/',
            title: 'Technology',
            excerpt: 'Custom tools adapted to you'
          },
          {
            url: '/',
            title: 'Coaching & Learner Support',
            excerpt: 'Guidance for every step'
          },
        ],
      },
      {
        url: '/',
        title: 'Who Can Benefit',
        children: [
          {
            url: '/',
            title: 'Re-enroll stop outs',
            tag: 'Institutions',
          },
          {
            url: '/',
            title: 'Complete your degree',
            tag: 'Learners',
          },
          {
            url: '/',
            title: 'Grow your workforce',
            tag: 'States',
          },
        ],
      },
      {
        url: '/',
        title: 'Resources',
        children: [
          {
            url: '/',
            title: 'Resources',
            tag: 'Institutions',
          },
          {
            url: '/',
            title: 'Resources',
            tag: 'Learners',
          },
          {
            url: '/',
            title: 'Resources',
            tag: 'States',
          },
        ],
      },
      {
        url: '/',
        title: 'Company',
        children: [
          {
            url: '/',
            title: 'Our Team',
          },
          {
            url: '/',
            title: 'Careers',
          },
          {
            url: '/',
            title: 'Press',
          },
        ],
      },
    ],
    utility: [
      {
        url: '/',
        title: 'Get insights',
        tag: 'Institutions',
      },
      {
        url: '/',
        title: 'Meet coach',
        tag: 'Learners',
      },
      {
        url: '/',
        title: 'Drive growth',
        tag: 'States',
      },
      {
        url: '/',
        title: "Let's chat",
        tag: 'Anybody',
      },
    ],
    breadcrumbs: [
      {
        url: '/',
        title: 'Level 1 Page'
      },
      {
        url: '/',
        title: 'Level 2 Page'
      },
      {
        url: '/',
        title: 'Level 3 Page'
      },
    ]
  },
  variants: [
    {
      name: 'Insitutions',
      context: {
        type: 'institutions',
      }
    },
    {
      name: 'Learners',
      context: {
        type: 'learners',
      }
    },
    {
      name: 'States',
      context: {
        type: 'states',
      }
    },
  ]
}