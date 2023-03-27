import { motion } from "framer-motion";
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
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.4 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex cursor-pointer items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <span className="hidden text-sm uppercase text-gray-400 md:inline-block">
          get in touch
        </span>
      </motion.div>
    </header>
  );
}

export default Header;
