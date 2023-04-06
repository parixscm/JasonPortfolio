/**
 * 파일 역할: 홈 페이지
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.31.
 */

import Link from "next/link";
import BgCircles from "./BgCircles";
import { urlFor } from "../sanity";
import { IPageInfo } from "../typings";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type HomePageProps = { pageInfo: IPageInfo };

function HomePage({ pageInfo }: HomePageProps) {
  // type writer 애니메이션 효과가 적용될 변수
  // loop - 반복 횟수, delaySpeed - 텍스트 전환 딜레이 시간
  const [text] = useTypewriter({
    words: pageInfo.heroLines,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BgCircles />
      {/* FIXME: Next Image 컴포넌트로 전환 필요 */}
      <img
        alt="hero"
        src={urlFor(pageInfo.heroImage).url()}
        className="z-20 h-32 w-32 rounded-full bg-transparent object-cover"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          {pageInfo.role}
        </h2>
        <h1 className="px-10 text-5xl font-semibold transition-all duration-500 ease-in-out xl:text-6xl">
          <span className="mr-2 font-light">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">인트로</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">경험치</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">스킬</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">프로젝트</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
