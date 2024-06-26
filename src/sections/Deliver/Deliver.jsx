import React, { useContext } from "react";
import Stats from "./Stats";
import Tag1 from "../../assets/images/Deliver Wave Tag.png";
import Tag2 from "../../assets/images/Deliver Trump Circle.png";
import { motion } from "framer-motion";
import { AnimationContext } from "../../context/animation";

const Deliver = () => {
  const { riseUpVariant, riseUpItem, tagVariant } =
    useContext(AnimationContext);
  return (
    <div
      id="about"
      data-scroll-section
      className="h-full text-white pt-[5rem] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 md:pt-[15rem] xxl:pt-[20rem]"
    >
      <Stats />
      <div>
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className="flex justify-between items-center mb-8 mt-[4rem]"
        >
          <motion.p
            variants={riseUpItem}
            className="uppercase text-[1.5rem] font-semibold lg:text-[3rem] w-full lg:w-[30%] leading-[3rem]"
          >
            What we deliver
          </motion.p>
          <motion.img
            variants={riseUpItem}
            className="h-[80px] hidden lg:block"
            src={Tag1}
            alt="Tag 1"
          />
          <motion.img
            variants={tagVariant}
            className="hidden md:block md:h-[50px] lg:h-[80px]"
            src={Tag2}
            alt="Tag 2"
          />
        </motion.div>
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap md:flex-nowrap gap-8"
        >
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
            <strong>
              Unleash Your Social Media Dominance: 1 Million Views Guaranteed in
              90 Days
            </strong>
            <br></br>
            Tired of struggling to grow your online presence? Frustrated by the
            constant algorithm changes and the never-ending battle for
            visibility? Look no further! Our social media marketing agency is
            here to skyrocket your brand to new heights.
          </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
            <strong>Branding and SEO</strong>
            <br></br>
            Building a strong brand is the foundation of any successful online
            presence. We'll work with you to develop a cohesive and memorable
            brand identity that resonates with your audience. Our SEO
            specialists will optimize your content and online presence to ensure
            your brand is easily found by your potential customers.
          </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
            <strong> Social Media Campaigns</strong>
            <br></br>
            Tired of throwing money at ineffective social media ads? Our team
            will design and execute targeted social media campaigns that deliver
            real results. We'll create eye-catching visuals, craft compelling
            copy, and track the performance of your campaigns to ensure you get
            the most bang for your buck.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Deliver;
