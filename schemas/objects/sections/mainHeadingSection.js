import {FaHeading} from 'react-icons/fa'

export default {
  name: 'mainHeadingSection',
  type: 'object',
  liveEdit: true,
  title: 'Main Heading Section',
  icon: FaHeading,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title (required)',
      description: 'the main heading text',
      validation: Rule => Rule.error('Enter the title of the CTA section.').required(),
    },{
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle (optional)',
      description: 'secondary text under the main one',
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      const subtitle = `Main Heading Section`

      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}
