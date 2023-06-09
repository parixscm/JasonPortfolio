/**
 * 파일 역할: radar 애니메이션 컴포넌트 (in 홈페이지)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.28.
 */

import { motion } from "framer-motion";

function BgCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 1.7, 1.7, 2.3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{ duration: 1.8 }}
      className="relative flex items-center justify-center"
    >
      {/* 아래 다섯 요소의 크기를 조절하면 원 크기 수정 가능  */}
      <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-[#F7AB0A] opacity-20" />
      <div className="absolute mt-52 h-[800px] w-[800px] rounded-full border border-[#333333]" />
    </motion.div>
  );
}

export default BgCircles;
