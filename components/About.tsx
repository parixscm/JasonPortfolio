import AboutLine from "./AboutLine";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { IPageInfo } from "../typings";

interface IListContent {
  icon: string;
  text: string;
  highlightText: string;
}

const contents: IListContent[] = [
  {
    icon: "🏢",
    text: "팀 중심 사고를 지향합니다,",
    highlightText: "team oriented: ",
  },
  {
    icon: "🤙🏻",
    text: "책임감이 강합니다,",
    highlightText: "strong responsibility: ",
  },
  {
    icon: "🎧",
    text: "주변에 귀 기울일 준비가 되어있습니다,",
    highlightText: "good listener: ",
  },
  {
    icon: "📖",
    text: "무엇보다 배움을 게을리하지 않습니다,",
    highlightText: "delve into: ",
  },
  {
    icon: "🌊",
    text: "React Native, Three.js를 공부하고 싶습니다!,",
    highlightText: "curious adventurer: ",
  },
];

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
          <span className="font-semibold underline decoration-[#F7AB0A]/50 underline-offset-8 xl:font-bold">
            개발자_제이슨
          </span>{" "}
          =
        </h4>
        <div className="customTransition">
          <span className="pl-10 text-3xl xl:text-4xl">{"{"}</span>
          <div className="space-y-4 xl:space-y-7">
            {contents.map(({ icon, text, highlightText }, idx) => (
              <AboutLine
                key={idx}
                icon={icon}
                text={text}
                highlightText={highlightText}
              />
            ))}
          </div>
          <span className="pl-10 text-3xl xl:text-4xl">{"};"}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
