import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { IProject } from "../typings";
import Link from "next/link";

type ProjectPageProps = {
  projects: IProject[];
};

function Projects({ projects }: ProjectPageProps) {
  return (
    <div className="grid h-screen max-w-full grid-cols-1 place-items-center overflow-hidden px-5">
      <h3 className="customTransition z-20 text-xl tracking-[20px] text-gray-500 md:col-span-2 md:text-2xl">
        프로젝트
      </h3>
      <div className="flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, idx) => {
          return (
            <div
              key={project._id}
              className="flex w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-10"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileHover={{ y: -15 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                alt="project"
                src={urlFor(project.image).url()}
                className="h-[330px] w-[580px] object-cover"
              />
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-xl font-semibold md:mb-1 md:text-2xl xl:text-3xl">
                  <span>
                    프로젝트 {idx + 1} / {projects.length} 🌬
                  </span>{" "}
                  <span className="ml-1 animate-pulse underline decoration-[#F7AB0A]">
                    {project.title}
                  </span>
                </h4>
                <p className="mb-2 text-sm xl:mb-3 xl:text-base">
                  <Link
                    href={project.linkToBuild}
                    target="_blank"
                    className="mr-1 cursor-pointer"
                  >
                    🏠
                  </Link>
                  <span className="text-gray-400">{project.with}</span>
                </p>
                <div className="mb-4 flex items-center justify-center space-x-2 overflow-x-auto md:mb-6">
                  {project.skills.map((skill) => (
                    <img
                      key={skill._id}
                      alt="skill_logo"
                      src={urlFor(skill.image).url()}
                      className="h-10 w-10 rounded-full object-cover xl:h-12 xl:w-12"
                    />
                  ))}
                </div>
                <ul className="ml-5 max-h-[200px] list-disc space-y-4 overflow-y-scroll px-14 text-left text-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500/50 md:px-5 md:text-base">
                  {project.summary.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
