import Tabs from "sanity-plugin-tabs"
import {FaBuilding} from 'react-icons/fa'

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  icon: FaBuilding,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      inputComponent: Tabs,
      fieldsets: [
        {name: 'main', title: 'Main'},
        {name: 'settings', title: 'Settings'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: Rule => Rule.error('Missing company name.').required(),
        },
        {
          fieldset: 'main',
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          validation: Rule => Rule.error('Missing company tagline.').required(),
        },
        {
          fieldset: 'main',
          name: 'shortDesc',
          title: 'Short Description',
          type: 'text',
          validation: Rule => Rule.error('Missing company short description.').required(),
        },
        // {
        //   fieldset: 'main',
        //   name: 'slug',
        //   type: 'slug',
        //   title: 'Slug',
        //   validation: Rule => Rule.error('You have to fill out the slug of the page.').required(),
        //   description: 'Some frontends will require a slug to be set to be able to show the post',
        //   options: {
        //     source: 'content.title',
        //     maxLength: 96
        //   }
        // },
        {
          fieldset: 'main',
          name: 'body',
          title: 'Body',
          type: 'bodyPortableText'
        },
        {
          fieldset: 'settings',
          name: 'image',
          title: 'Logo',
          type: 'bgImage',
          validation: Rule => Rule.required().error('missing company logo')
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
  orderings: [
    {
      name: 'createdAt',
      title: 'Created older->newer',
      by: [
        {
          field: '_createdAt',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'content.name',
      media: 'content.image'
    },
    prepare ({title = 'No title', media}) {
      // const path = `/${slug.current}/`
      return {
        title,
        media
      }
    }
  }
}
