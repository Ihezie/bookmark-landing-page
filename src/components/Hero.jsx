import { motion } from "framer-motion";
import illustrationHero from "../assets/images/illustration-hero.svg";
import CurvedBlueBackground from "./CurvedBlueBackground";

const Hero = () => {
  const heroVariants = {
    show: {
      opacity: "var(--shown-opacity, 100%)",
      y: "var(--shown-y, 0%)",
      transition: {
        duration: 1.1
      }
    },
    hide: {
      opacity: "var(--hidden-opacity, 100%)",
      y: "var(--hidden-y, 0%)",
    },
  };
  const heroItemVariants = {
    show: {
      opacity: "var(--shown-opacity, 100%)",
      x: "var(--shown-x, 0%)",
      transition: {
        duration: 1
      }
    },
    hide: {
      opacity: "var(--hidden-opacity, 100%)",
      x: "var(--hidden-x, 0%)",
    },
  };
  return (
    <motion.section
      className="mt-20 lg:grid lg:grid-cols-2 lg:items-center max-lg:[--hidden-opacity:0%] max-lg:[--shown-opacity:100%] max-lg:[--hidden-y:-30%] max-lg:[--shown-y:0%] transition-none"
      variants={heroVariants}
      initial="hide"
      animate="show"
    >
      <motion.div
        className="relative -z-20 lg:order-2 lg:[--shown-x:0%] lg:[--shown-opacity:100%] lg:[--hidden-x:100%] lg:[--hidden-opacity:0%] transition-none"
        variants={heroItemVariants}
      >
        <img src={illustrationHero} alt="hero" className=" w-full lg:w-[93%]" />
        <CurvedBlueBackground />
      </motion.div>
      <motion.article
        className="mt-16 text-center container-px lg:px-[20%] lg:text-left lg:[--shown-x:0%] lg:[--shown-opacity:100%] lg:[--hidden-x:-100%] lg:[--hidden-opacity:0%] transition-none"
        variants={heroItemVariants}
      >
        <h1 className="text-[32px]/10 capitalize font-medium xl:text-[40px]/10">
          A simple bookmark manager
        </h1>
        <p className="mt-5 text-grayishBlue">
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <motion.button
            className="inline-block w-1/2 cursor-pointer font-medium bg-softBlue text-white py-3 rounded-md lg:w-44 lg:text-sm xl:text-base"
            whileTap={{
              rotate: "7deg",
            }}
            whileHover={{
              y: -10,
            }}
            transition={{
              duration: 0.1,
            }}
          >
            {" "}
            Get it on Chrome
          </motion.button>
          <motion.button
            className="inline-block w-1/2 cursor-pointer font-medium bg-slate-100 py-3 rounded-md shadow-md lg:w-44 lg:text-sm xl:text-base lg:shadow-lg"
            whileTap={{
              rotate: "7deg",
            }}
            whileHover={{
              y: -12,
            }}
            transition={{
              duration: 0.1,
            }}
          >
            {" "}
            Get it on Firefox
          </motion.button>
        </div>
      </motion.article>
    </motion.section>
  );
};
export default Hero;
