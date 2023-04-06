/**
 * 파일 역할: 스킬 페이지 data fetching utility function
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import { ISkill } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSkills`
  );
  const data = await res.json();
  const skills: ISkill[] = data.skills;

  return skills;
};
