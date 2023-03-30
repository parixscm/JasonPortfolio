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
      </div>
    </motion.div>
  );
}

export default Experience;
