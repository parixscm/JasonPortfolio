/**
 * 파일 역할: 경험치 페이지
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { IExperience } from "../typings";

type ExpPageProps = {
  experiences: IExperience[];
};

function Experience({ experiences }: ExpPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="grid h-screen max-w-full grid-cols-1 place-items-center overflow-hidden px-10"
    >
      <h3 className="customTransition text-xl tracking-[20px] text-gray-500 md:text-2xl">
        경험치
      </h3>
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
        <article className="flex max-w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center justify-center rounded-xl bg-[#292929] p-10 text-xl font-semibold opacity-50 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
          <span className="animate-bounce">NULL</span>
          <p className="text-2xl">Bright Future awaits... ✨ </p>
        </article>
      </div>
    </motion.div>
  );
}

export default Experience;
