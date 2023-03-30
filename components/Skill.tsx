import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { ISkill } from "../typings";

type Props = {
  skill: ISkill;
};

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        alt="skill_logo"
        src={urlFor(skill.image).url()}
        className="h-24 w-24 rounded-full object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
      />
      <div className="absolute h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full flex-col items-center justify-center">
          <p className="text-3xl font-semibold text-black opacity-100">
            {skill.proficiency}%
          </p>
          <span className="w-full text-center text-sm text-black">
            {skill.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
