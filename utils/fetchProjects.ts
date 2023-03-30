import { IProject } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProjects`
  );
  const data = await res.json();
  const projects: IProject[] = data.projects;

  return projects;
};
