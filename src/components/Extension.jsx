import { motion } from "framer-motion";
import chromeLogo from "../assets/images/logo-chrome.svg";
import firefoxLogo from "../assets/images/logo-firefox.svg";
import operaLogo from "../assets/images/logo-opera.svg";

const viewportConfig = {
  once: true,
};
const Extension = () => {
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
  const browserInfo = [
    {
      logo: chromeLogo,
      name: "Chrome",
      minVers: 62,
    },
    {
      logo: firefoxLogo,
      name: "Firefox",
      minVers: 55,
    },
    {
      logo: operaLogo,
      name: "Opera",
      minVers: 46,
    },
  ];
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
        <h1 className="font-medium text-[27px] mb-5 ">
          Download the extension
        </h1>
        <p className="text-grayishBlue">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </motion.article>
      <motion.div
        className="container-px xl:flex xl:justify-center xl:gap-8"
        transition={{
          staggerChildren: 0.2,
        }}
      >
        {browserInfo.map((browser, index) => (
          <Browser
            logo={browser.logo}
            name={browser.name}
            minVers={browser.minVers}
            index={index}
            key={index}
          />
        ))}
      </motion.div>
    </section>
  );
};
export default Extension;

const Browser = ({ logo, name, minVers }) => {
  const browserVariants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
    hide: {
      opacity: 0,
      y: "30%",
    },
  };
  return (
    <motion.div
      className={`text-center relative shadow-xl shadow-softBlue/25 border border-black/5  pt-12 last:mb-0 mb-16 rounded-2xl max-w-[305px] h-max mx-auto xl:mx-0 xl:mb-0 xl:w-[305px] xl:shadow-xl xl:browser`}
      variants={browserVariants}
      initial="hide"
      whileInView="show"
      viewport={viewportConfig}
    >
      <img src={logo} alt="name" className="mx-auto mb-10" />
      <h2 className="font-medium text-2xl mb-2">Add to {name}</h2>
      <h3 className="text-lg text-grayishBlue pb-12 border-b-[6px] border-dotted">
        Minimum version {minVers}
      </h3>
      <button
        className="capitalize bg-softBlue text-white w-60 h-12 my-7 rounded-md font-medium cursor-pointer hover:bg-white hover:text-softBlue hover:border-2 hover:border-softBlue transition-all duration-300"
      >
        Add & Install Extension
      </button>
    </motion.div>
  );
};
