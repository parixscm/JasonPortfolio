/**
 * 파일 역할: 경험치 페이지 data fetching utility function
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import { IExperience } from "../typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperiences`
  );
  const data = await res.json();
  const experiences: IExperience[] = data.experiences;

  return experiences;
};
