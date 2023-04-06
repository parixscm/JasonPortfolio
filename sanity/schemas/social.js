/**
 * 파일 역할: 헤더 컴포넌트 소셜 링크 스키마
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Platform for social media',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
})
