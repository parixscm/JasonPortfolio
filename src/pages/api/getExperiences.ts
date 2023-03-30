import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { IExperience } from "../../../typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    skills[]->
  }
`;

type Data = {
  experiences: IExperience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: IExperience[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
