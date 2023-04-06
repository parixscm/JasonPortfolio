/**
 * 파일 역할: 스킬 페이지 스키마
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the skill',
      type: 'string',
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency',
      description: 'Proficiency of skill from 0 to 100%',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
