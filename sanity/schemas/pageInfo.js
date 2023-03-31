import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'HeroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroLines',
      title: 'HeroLines',
      type: 'array',
      of: [{type: 'string', name: 'heroLine', title: 'HeroLine'}],
    }),
    defineField({
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'introLines',
      title: 'IntroLines',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'line',
          title: 'Line',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
            },
            {
              name: 'text1',
              title: 'Text1',
              type: 'string',
            },
            {
              name: 'text2',
              title: 'Text2',
              type: 'string',
            },
            {
              name: 'highlightText',
              title: 'HighlightText',
              type: 'string',
            },
            {
              name: 'isLeft',
              title: 'IsLeft',
              type: 'boolean',
            },
          ],
        },
      ],
    }),
  ],
})
