import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { IProject } from "../../../typings";

const query = groq`
  *[_type == "project"] | order(_createdAt asc) {
    ...,
    skills[]->
  }
`;

type Data = {
  projects: IProject[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: IProject[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
