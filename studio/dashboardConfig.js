export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61ec6330c1e37271fa2d91ca',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dz92pjgu',
                  apiId: '38e5b0fa-780d-4ba3-a56a-67fed08938a0'
                },
                {
                  buildHookId: '61ec6330c8634e61fcce1362',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p7p9akmq',
                  apiId: '62e646ef-1ea3-4e8f-bec5-ffe14261ee46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reassemblydev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p7p9akmq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
