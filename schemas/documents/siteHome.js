import Tabs from "sanity-plugin-tabs"

export default {
  name: 'siteHome',
  type: 'document',
  liveEdit: false,
  title: 'Home Page',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      inputComponent: Tabs,
      fieldsets: [
        {name: 'hero', title: 'Hero'},
        {name: 'main', title: 'Main'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'sectionsTop',
          title: 'Homepage Top Content Sections',
          type: 'array',
          of: [
            {type: 'ctaSection'},
            {type: 'rteSection'},
            {type: 'mainHeadingSection'},
          ],
          options: {
            editModal: 'fullscreen'
          }
        },
        {
          fieldset: 'main',
          name: 'companies',
          title: 'Company Cards',
          description: 'list of cards featuring DelGrosso companies',
          type: 'array',
          of: [
            {type: 'companyCard'}
          ]
        },
        {
          fieldset: 'main',
          name: 'sections',
          title: 'Homepage Bottom Content Sections',
          type: 'array',
          of: [
            {type: 'ctaSection'}
          ],
          options: {
            editModal: 'fullscreen'
          }
        },
        {
          fieldset: 'seo',
          name: 'seo',
          title: 'SEO Title',
          type: 'seo',
        },
      ]
    }
  ],
  preview: {
    select: {
    },
    prepare () {
      return {
        title: 'Site Home'
      }
    }
  }
}
