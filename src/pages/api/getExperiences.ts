/**
 * 파일 역할: 경험치 페이지 API
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { IExperience } from "../../../typings";

// Sanity CMS용 GROQ 쿼리
// 스키마 구조 변경 시 쿼리문 수정이 필요
const query = groq`
  *[_type == "experience"] {
    ...,
    skills[]->
  }
`;

type Data = {
  experiences: IExperience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: IExperience[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
