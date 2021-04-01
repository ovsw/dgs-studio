export default {
  name: 'companyCard',
  type: 'object',
  title: 'Company Card',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [
        {type: 'company'}
      ],
      validation: Rule => Rule.required().error('select a company'),
      description: 'the company featured on this card',
    },
    {
      name: 'buttons',
      title: 'Card Buttons',
      description: '(optional) buttons shown on this card; you can have none or mor than one',
      type: 'array',
      of: [
        {type: 'button'}
      ],
      options: {
        editModal: 'popover'
      }
    }
  ],
  preview: {
    select: {
      title: 'company.content.name',
      media: 'company.content.image'
    }
  }
}
