/**
 * 파일 역할: 스킬 페이지
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.30.
 */

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
      </div>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => {
          if (
            ["Metamask", "Solidity", "MySQL", "NodeJS", "Firebase"].includes(
              skill.title
            )
          )
            return null;
          return <Skill key={skill._id} skill={skill} />;
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
