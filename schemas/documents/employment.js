import Tabs from "sanity-plugin-tabs"

export default {
  name: 'employment',
  type: 'document',
  liveEdit: false,
  title: 'Employment',
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
          title: 'Top Content Sections',
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
            {type: 'companyCardEmployment'}
          ]
        },
        {
          fieldset: 'main',
          name: 'sectionsBottom',
          title: 'Bottom Content Sections',
          type: 'array',
          of: [
            {type: 'ctaSection'},
            {type: 'rteSection'}
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
