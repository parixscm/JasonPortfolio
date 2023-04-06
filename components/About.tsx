/**
 * 파일 역할: 인트로 페이지
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.31.
 */

import AboutLine from "./AboutLine";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { IPageInfo } from "../typings";

type AboutPageProps = {
  pageInfo: IPageInfo;
};

function About({ pageInfo }: AboutPageProps) {
  return (
    <div className="mx-auto grid h-screen max-w-7xl grid-cols-1 place-items-center overflow-hidden px-10 md:grid-cols-2">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="customTransition text-xl tracking-[20px] text-gray-500 md:col-span-2 md:text-2xl"
      >
        인트로
      </motion.h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileHover={{ y: -20 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        alt="intro_profile"
        src={urlFor(pageInfo.profilePic).url()}
        className="h-56 w-56 flex-shrink-0 overflow-hidden rounded-full object-cover md:h-[450px] md:w-72 md:rounded-lg xl:h-[580px] xl:w-[390px]"
      />
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="space-y-6 xl:space-y-12"
      >
        <h4 className="customTransition text-4xl font-light xl:text-5xl">
          const{" "}
          <span className="animate-pulse font-semibold text-[#F7AB0A] xl:font-bold">
            💻 개발자 Jason
          </span>{" "}
          =
        </h4>
        <div className="customTransition">
          <span className="text-3xl xl:text-4xl">{"{"}</span>
          <div className="space-y-4 xl:space-y-7">
            {pageInfo.introLines.map(
              ({ icon, text1, text2, highlightText, isLeft }, idx) => (
                <AboutLine
                  key={idx}
                  icon={icon}
                  text1={text1}
                  text2={text2}
                  highlightText={highlightText}
                  isLeft={isLeft}
                />
              )
            )}
          </div>
          <span className="text-3xl xl:text-4xl">{"};"}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
