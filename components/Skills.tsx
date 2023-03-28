import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="mx-auto grid h-screen min-h-screen max-w-[2000px] grid-cols-1 place-items-center">
      <div className="flex flex-col items-center space-y-2">
        <h3 className="text-xl tracking-[20px] text-gray-500">스킬</h3>
        <p className="text-sm tracking-[3px] text-gray-500">
          마우스를 올리면 스킬별{" "}
          <span className="underline decoration-[#F7AB0A]/50 underline-offset-2">
            주관적인
          </span>{" "}
          숙련도가 보입니다
        </p>
      </div>
      <div></div>
    </motion.div>
  );
}

export default Skills;
