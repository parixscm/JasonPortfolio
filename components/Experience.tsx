import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
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
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
