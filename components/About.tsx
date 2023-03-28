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
    text: "팀 중심 사고를 지향합니다",
    highlightText: "team oriented",
  },
  {
    icon: "🤙🏻",
    text: "책임감이 생각보다 강합니다",
    highlightText: "strong responsibility",
  },
  {
    icon: "🎧",
    text: "그래서 주변의 소리에 귀 기울입니다",
    highlightText: "good listener",
  },
  {
    icon: "📖",
    text: "배움을 게을리하지 않습니다",
    highlightText: "delve into",
  },
  {
    icon: "🌊",
    text: "새로운 경험, 다양한 시도 환영합니다",
    highlightText: "curious adventurer",
  },
];

function About() {
  return (
    <div className="mx-auto grid h-screen max-w-7xl grid-cols-1 place-items-center px-10 text-center md:grid-cols-2 md:text-left">
      <h3 className="text-2xl tracking-[20px] text-gray-500">인트로</h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        alt="intro_profile"
        src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        className="h-56 w-56 flex-shrink-0 overflow-hidden rounded-full object-cover md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-10">
        <h4 className="text-4xl font-light underline decoration-[#F7AB0A]/50 underline-offset-4 xl:text-5xl">
          {"<INFJ 개발자 제이슨 />"}
        </h4>
        <div className="space-y-5">
          {contents.map(({ icon, text, highlightText }, idx) => (
            <AboutLine
              key={idx}
              icon={icon}
              text={text}
              highlightText={highlightText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
