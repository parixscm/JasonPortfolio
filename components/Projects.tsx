import Skill from "./Skill";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { IProject } from "../typings";

type ProjectPageProps = {
  projects: IProject[];
};

function Projects({ projects }: ProjectPageProps) {
  return (
    <div className="grid h-screen max-w-full grid-cols-1 place-items-center overflow-hidden px-10">
      <h3 className="customTransition z-20 text-xl tracking-[20px] text-gray-500 md:col-span-2 md:text-2xl">
        프로젝트
      </h3>
      <div className="flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, idx) => (
          <div
            key={project._id}
            className="flex w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-10"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              alt="project"
              src={urlFor(project.image).url()}
              className="h-[330px] w-96"
            />
            <div className="space-y-8">
              <h4 className="text-3xl font-semibold">
                <span className="underline decoration-[#F7AB0A]">
                  프로젝트 {idx + 1} / 5:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                {project.skills.map((skill) => (
                  <Skill key={skill._id} skill={skill} />
                ))}
              </div>
              <p className="text-center text-lg md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
