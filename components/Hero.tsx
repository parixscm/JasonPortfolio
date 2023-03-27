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
      <h1>
        <span className="mr-2">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default Hero;
