import { Exp } from "../typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperiences`
  );
  const data = await res.json();
  const experiences: Exp[] = data.experiences;

  return experiences;
};
