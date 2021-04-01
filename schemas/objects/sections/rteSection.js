import {BsFileRichtext} from 'react-icons/bs'

export default {
  name: 'rteSection',
  type: 'object',
  liveEdit: true,
  title: 'Rich Text Section',
  icon: BsFileRichtext,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title (required)',
      description: 'the main heading of the section',
      validation: Rule => Rule.error('missing title').required(),
    },{
      name: 'text',
      type: 'bodyPortableText',
      title: 'Text',
      validation: Rule => Rule.error('missing text.').required(),
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      const subtitle = `Rich Text Section`

      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}
