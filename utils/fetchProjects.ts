/**
 * 파일 역할: 프로젝트 페이지 data fetching utility function
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.31.
 */

import { IProject } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProjects`
  );
  const data = await res.json();
  const projects: IProject[] = data.projects;

  return projects;
};
