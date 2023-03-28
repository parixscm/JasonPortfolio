import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="z-0 grid h-screen max-w-full grid-cols-1 place-items-center overflow-hidden px-10">
      <h3 className="customTransition text-xl tracking-[20px] text-gray-500 md:col-span-2 md:text-2xl">
        프로젝트
      </h3>
      <div className="flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
        {projects.map((project) => (
          <div
            key={project}
            className="flex w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-10"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              alt="project"
              src="https://images.unsplash.com/photo-1678544937262-e4c3fae6cf05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="h-80 w-96"
            />
            <div className="space-y-8">
              <h4 className="text-3xl font-semibold">
                <span className="underline decoration-[#F7AB0A]">
                  프로젝트 {project} / 5:
                </span>{" "}
                Clone
              </h4>
              <p className="text-center text-lg md:text-left">
                프로젝트 summary
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
