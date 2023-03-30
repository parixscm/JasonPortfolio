import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { ISkill } from "../../../typings";

const query = groq`
  *[_type == "skill"] | order(_createdAt desc)
`;

type Data = {
  skills: ISkill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: ISkill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
