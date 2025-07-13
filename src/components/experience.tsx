import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      borderRadius: "12px",
      boxShadow: "0 3px 0 #232631",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      boxShadow:
        "0 0 0 4px #232631, inset 0 2px 0 rgba(255,255,255,.08), 0 3px 0 4px rgba(0,0,0,.05)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[70%] h-[70%] object-contain rounded-full"
        />
      </div>
    }
  >
    {/* Title and Company */}
    <div>
      <h3 className="text-white text-[24px] font-bold leading-tight">
        {experience.title}
      </h3>
      <p
        className="text-secondary text-[18px] font-semibold opacity-75"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
      <p className="text-[#aaa6c3] text-[14px] font-medium mt-1">
        {experience.location}
      </p>
    </div>

    {/* Experience Points */}
    <ul className="mt-6 list-disc ml-5 space-y-3">
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-white-100 text-[15px] pl-1 tracking-wide leading-relaxed"
        >
          {point}
        </li>
      ))}
    </ul>

    {/* Key Technologies */}
    {experience.technologies && (
      <div className="mt-6">
        <h4 className="text-white text-[16px] font-semibold mb-3">
          Key Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span
              key={`tech-${i}`}
              className="bg-[#232631] text-[#aaa6c3] px-3 py-1 rounded-full text-[12px] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}
  </VerticalTimelineElement>
);

// Experience Section
export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        {/* Section Header */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Professional Journey</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={`experience-${i}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-secondary text-[16px] max-w-3xl mx-auto">
            Throughout my career, I've consistently delivered high-quality
            backend solutions, evolved from individual contributor to team
            leader, and continuously expanded my technical expertise while
            maintaining focus on scalable, efficient systems.
          </p>
        </motion.div>
      </>
    </SectionWrapper>
  );
};
