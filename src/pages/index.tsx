import { GetStaticProps } from "next";
import Head from "next/head";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import {
  IExperience,
  IPageInfo,
  IProject,
  ISkill,
  ISocial,
} from "../../typings";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchSocials } from "../../utils/fetchSocials";

type Props = {
  pageInfo: IPageInfo;
  skills: ISkill[];
  experiences: IExperience[];
  projects: IProject[];
  socials: ISocial[];
};

export default function Home({
  pageInfo,
  skills,
  experiences,
  projects,
  socials,
}: Props) {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>제이슨 하우스</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} pageInfo={pageInfo} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: IPageInfo = await fetchPageInfo();
  const skills: ISkill[] = await fetchSkills();
  const experiences: IExperience[] = await fetchExperiences();
  const projects: IProject[] = await fetchProjects();
  const socials: ISocial[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      experiences,
      projects,
      socials,
    },
    revalidate: 100,
  };
};
