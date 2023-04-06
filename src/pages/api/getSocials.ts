/**
 * 파일 역할: 헤더 컴포넌트 소셜 링크 API
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { ISocial } from "../../../typings";

// Sanity CMS용 GROQ 쿼리
// 스키마 구조 변경 시 쿼리문 수정이 필요
const query = groq`
  *[_type == "social"]
`;

type Data = {
  socials: ISocial[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: ISocial[] = await sanityClient.fetch(query);
  res.status(200).json({ socials });
}
