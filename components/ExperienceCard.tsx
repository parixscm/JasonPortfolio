import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { IExperience } from "../typings";

type Props = { experience: IExperience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex max-w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center justify-center space-y-7 overflow-hidden rounded-xl bg-[#292929] p-10 text-center opacity-60 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        alt="exp_logo"
        src={urlFor(experience?.companyImage).url()}
        className="object-cetner h-32 w-32 rounded-full object-cover xl:h-[200px] xl:w-[200px]"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{experience.company}</h4>
        <p className="text-xl font-semibold">{experience.jobTitle}</p>
        <p className="my-2 text-sm text-gray-500">
          {new Date(experience.dateStarted).toLocaleDateString()} -{" "}
          {new Date(experience.dateEnded).toLocaleDateString()}
        </p>
        <div className="my-5 flex justify-center space-x-2">
          {experience.skills.map((skill) => (
            <img
              key={skill._id}
              alt="tech"
              src={urlFor(skill.image).url()}
              className="h-10 w-10 rounded-full object-cover xl:h-12 xl:w-12"
            />
          ))}
        </div>
        <ul className="ml-5 list-disc space-y-4 px-14 text-left md:px-5">
          {experience.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
