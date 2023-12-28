import tab1Img from "../assets/images/illustration-features-tab-1.svg";
import tab2Img from "../assets/images/illustration-features-tab-2.svg";
import tab3Img from "../assets/images/illustration-features-tab-3.svg";
import { motion, useAnimate } from "framer-motion";
import CurvedBlueBackground from "./CurvedBlueBackground";
import { useState } from "react";

const Features = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabVariants = {
    show: {
      opacity: "var(--shown-opacity, 100%)",
      y: "var(--shown-y, 0%)",
      transition: {
        duration: 1.1,
      },
    },
    hide: {
      opacity: "var(--hidden-opacity, 100%)",
      y: "var(--hidden-y, 0%)",
    },
  };
  const tabItemVariants = {
    show: {
      opacity: "var(--shown-opacity, 100%)",
      x: "var(--shown-x, 0%)",
      transition: {
        duration: 1,
      },
    },
    hide: {
      opacity: "var(--hidden-opacity, 100%)",
      x: "var(--hidden-x, 0%)",
    },
  };
  const articleVariants = {
    show: {
      opacity: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      y: "80%",
    },
  };
  const listVariants = {
    show: {
      y: "var(--shown-y, 0%)",
      opacity: "var(--shown-opacity-ul, 100%)",
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
    hide: {
      y: "var(--hidden-y, 0%)",
      opacity: "var(--hidden-opacity-ul, 100%)",
    },
  };
  const listItemVariants = {
    show: {
      opacity: "var(--shown-opacity, 100%)",
      scale: "var(--shown-scale, 100%)",
    },
    hide: {
      opacity: "var(--hidden-opacity, 100%)",
      scale: "var(--hidden-scale, 100%)",
    },
  };
  const features = [
    {
      name: "simple bookmarking",
      heading: "Bookmark in one click",
      details:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: tab1Img,
    },
    {
      name: "speedy searching",
      heading: "intelligent search",
      details:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: tab2Img,
    },
    {
      name: "easy sharing",
      heading: "share your bookmarks",
      details:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: tab3Img,
    },
  ];
  const viewportConfig = {
    once: true,
    amount: .2,
  };
  const [scope, animate] = useAnimate();
  const handleClick = async (index) => {
    await animate(scope.current, { opacity: 0 });
    setTabIndex(index);
    animate(scope.current, { opacity: 1 });
  };
  return (
    <section>
      <motion.article
        variants={articleVariants}
        initial="hide"
        whileInView="show"
        className="mt-40 text-center mb-16 container-px lg:px-[32%]"
        transition={{
          duration: 0.5,
        }}
        viewport={viewportConfig}
      >
        <h1 className="font-medium text-3xl mb-5">Features</h1>
        <p className="text-grayishBlue">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </motion.article>
      <motion.ul
        className="transition-none mb-20 mx-8 sm:mx-[10%] lg:flex lg:justify-center lg:mb-16 lg:[--hidden-opacity-ul:0%] lg:[--shown-opacity-ul:100%] lg:[--hidden-y:80%] lg:border-b lg:border-gray-300 lg:w-max lg:mx-auto"
        variants={listVariants}
        initial="hide"
        whileInView="show"
        viewport={viewportConfig}
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            variants={listItemVariants}
            className={`${
              tabIndex === index ? "active" : ""
            } text-center text-grayishBlue capitalize text-xl py-4 cursor-pointer hover:text-softRed border-t border-gray-300 max-lg:last:border-b lg:border-t-0 lg:px-12 max-lg:[--hidden-opacity:0%] max-lg:[--shown-opacity:100%] max-lg:[--hidden-scale:0%] max-lg:[--shown-scale:100%] `}
            onClick={() => {
              handleClick(index);
            }}
          >
            {feature.name}
          </motion.li>
        ))}
      </motion.ul>
      <motion.section
        className="mb-44 lg:grid lg:grid-cols-2 lg:items-center max-lg:[--hidden-opacity:0%] max-lg:[--shown-opacity:100%] max-lg:[--hidden-y:30%] max-lg:[--shown-y:0%] transition-none overflow-x-clip overflow-y-visible"
        variants={tabVariants}
        initial="hide"
        whileInView="show"
        viewport={viewportConfig}
        ref={scope}
      >
        <motion.div
          className="relative -z-20 container-px lg:pl-[20%] lg:pr-0 lg:[--shown-x:0%] lg:[--shown-opacity:100%] lg:[--hidden-x:-100%] lg:[--hidden-opacity:0%] transition-none"
          variants={tabItemVariants}
          viewport={viewportConfig}
        >
          <img
            src={features[tabIndex].image}
            alt=""
            className="mx-auto w-full"
          />
          <CurvedBlueBackground flip={true} />
        </motion.div>
        <motion.article
          className="mt-24 text-center mb-16 container-px lg:text-left lg:px-[20%] lg:my-0 lg:[--shown-x:0%] lg:[--shown-opacity:100%] lg:[--hidden-x:100%] lg:[--hidden-opacity:0%] transition-none"
          variants={tabItemVariants}
          viewport={viewportConfig}
        >
          <h1 className="font-medium text-3xl mb-5 capitalize">
            {features[tabIndex].heading}
          </h1>
          <p className="text-grayishBlue">{features[tabIndex].details}</p>
          <motion.button
            whileHover={{
              y: -8,
            }}
            whileTap={{
              rotate: "10deg",
            }}
            className="capitalize bg-softBlue text-white w-32 py-3 mt-9 rounded-md font-medium cursor-pointer hidden lg:block"
          >
            more info
          </motion.button>
        </motion.article>
      </motion.section>
    </section>
  );
};
export default Features;
