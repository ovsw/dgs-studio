import {FaLink} from 'react-icons/fa'

export default {
  name: 'button',
  type: 'object',
  title: 'Button',
  icon: FaLink,
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      description: 'the text on the button',
      validation: Rule => Rule.required().error('missing button text')
    },
    {
      name: 'url',
      title: 'Button Destination URL',
      type: 'string',
      description: 'where should this button lead to?',
      validation: Rule => Rule.required().error('missing button URL'),

    }
  ],
  preview: {
    select: {
      title: 'text'
    }
  }
}
