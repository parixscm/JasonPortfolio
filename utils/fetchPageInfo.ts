import { IPageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: IPageInfo = data.pageInfo;

  return pageInfo;
};
