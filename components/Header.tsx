import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.4 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
      >
        <SocialIcon
          url="https://www.linkedin.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.github.com"
          fgColor="gray"
          bgColor="transparent"
        />
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
              <img
                alt="hero_link"
                src="data:image/jpeg;base64,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"
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
