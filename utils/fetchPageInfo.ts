/**
 * 파일 역할: 홈, 인트로 페이지 data fetching utility function
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import { IPageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: IPageInfo = data.pageInfo;

  return pageInfo;
};
