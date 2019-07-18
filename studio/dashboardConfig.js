export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events1-studio',
                  apiId: 'eadadd64-3df6-4480-b409-773d42a726f8'
                },
                {
                  buildHookId: '5d301473dcea31c8669506f1',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events1',
                  apiId: '3b4d0f6c-5631-460f-916d-d3073723ea36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisi-GitHub/sanity-nuxt-events1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
