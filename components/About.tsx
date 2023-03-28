import { motion } from "framer-motion";
import AboutLine from "./AboutLine";

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
    text: "책임감이 생각보다 강합니다,",
    highlightText: "strong responsibility: ",
  },
  {
    icon: "🎧",
    text: "그래서 주변의 소리에 귀 기울입니다,",
    highlightText: "good listener: ",
  },
  {
    icon: "📖",
    text: "배움을 게을리하지 않습니다,",
    highlightText: "delve into: ",
  },
  {
    icon: "🌊",
    text: "새로운 경험, 다양한 시도 환영합니다!,",
    highlightText: "curious adventurer: ",
  },
];

function About() {
  return (
    <div className="mx-auto grid h-screen max-w-7xl grid-cols-1 place-items-center px-10 md:grid-cols-2">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
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
        src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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
          {/* {"<INFJ 개발자 제이슨 />"} */}
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
              <>
                <AboutLine
                  key={idx}
                  icon={icon}
                  text={text}
                  highlightText={highlightText}
                />
              </>
            ))}
          </div>
          <span className="pl-10 text-3xl xl:text-4xl">{"};"}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
