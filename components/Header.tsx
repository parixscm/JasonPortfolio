/**
 * 파일 역할: 헤더 컴포넌트
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.31.
 */

import Link from "next/link";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { IPageInfo, ISocial } from "../typings";

type HeaderProps = {
  socials: ISocial[];
  pageInfo: IPageInfo;
};

function Header({ socials, pageInfo }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.4 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.4 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex cursor-pointer items-center"
      >
        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              {/* FIXME: Next Image 컴포넌트로 전환 필요 */}
              <img
                alt="hero_link"
                src={urlFor(pageInfo.heroImage).url()}
                className="h-10 w-10 cursor-pointer rounded-full grayscale filter hover:grayscale-0"
              />
            </div>
          </footer>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
