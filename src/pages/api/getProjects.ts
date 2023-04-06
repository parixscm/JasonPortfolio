/**
 * 파일 역할: 프로젝트 페이지 API
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.31.
 */

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { IProject } from "../../../typings";

// Sanity CMS용 GROQ 쿼리
// 스키마 구조 변경 시 쿼리문 수정이 필요
const query = groq`
  *[_type == "project"] | order(_createdAt asc) {
    ...,
    skills[]->
  }
`;

type Data = {
  projects: IProject[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: IProject[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
