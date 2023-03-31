import { easeInOut, motion } from "framer-motion";
import { IIntroLine } from "../typings";

function AboutLine({ icon, text1, text2, highlightText, isLeft }: IIntroLine) {
  return (
    <motion.div
      initial={{ x: 0 }}
      whileHover={{ x: isLeft ? 10 : -10 }}
      transition={{ ease: easeInOut }}
      className={`group ${isLeft ? "text-left" : "text-right"}`}
    >
      {icon}{" "}
      <span className="text-lg font-semibold uppercase tracking-wide xl:text-2xl">
        {highlightText}
      </span>
      <div>
        <span className="text-sm transition-colors duration-150 ease-out group-hover:text-[#F7AB0A] md:text-base xl:text-base">
          {text1}
        </span>
        <span className="text-sm md:text-base xl:text-base">{text2}</span>
      </div>
    </motion.div>
  );
}

export default AboutLine;
