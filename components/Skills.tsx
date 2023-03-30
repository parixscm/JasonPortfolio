import Skill from "./Skill";
import { motion } from "framer-motion";
import { ISkill } from "../typings";

type SkillsPageProps = { skills: ISkill[] };

function Skills({ skills }: SkillsPageProps) {
  return (
    <motion.div className="mx-auto grid h-screen min-h-screen max-w-[2000px] grid-cols-1 place-items-center overflow-hidden">
      <div className="flex flex-col items-center space-y-2">
        <h3 className="text-xl tracking-[20px] text-gray-500 md:text-2xl">
          스킬
        </h3>
        <p className="text-sm tracking-[3px] text-gray-500">
          마우스를 올리면 스킬별 주관적인 숙련도가 보입니다
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
