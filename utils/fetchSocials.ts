/**
 * 파일 역할: 헤더 컴포넌트 소셜 링크 관련 data fetching utility function
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import { ISocial } from "../typings";

export const fetchSocials = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSocials`
  );
  const data = await res.json();
  const socials: ISocial[] = data.socials;

  return socials;
};
