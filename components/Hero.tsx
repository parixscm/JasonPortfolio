import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BgCircles from "./BgCircles";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "안녕하세요! 제이슨 입니다!",
      "여행을-많이-좋아합니다.tsx",
      "<하지만코딩이더재밌는걸요? />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BgCircles />
      {/* TODO: 이미지 태그로 교체 (object-cover 추가) */}
      <div className="h-32 w-32 rounded-full bg-blue-400" />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          front-end developer
        </h2>
        <h1 className="px-10 text-5xl font-semibold transition-all duration-500 ease-in-out xl:text-6xl">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">about</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
