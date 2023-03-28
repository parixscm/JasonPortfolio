import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
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
        className="h-56 w-56 flex-shrink-0 rounded-full object-cover md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />
      <div>
        <h4 className="text-4xl font-semibold">{"<INFJ 개발자 제이슨 />"}</h4>
      </div>
    </div>
  );
}

export default About;
