import faceBook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import { motion } from "framer-motion";

const Sidebar = () => {
  const show = {
    y: 0,
    opacity: 1,
  };
  const hide = {
    y: "-100%",
    opacity: 0,
  };
  const container = {
    show: {
      ...show,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
    hide: {
      ...hide,
    },
  };
  const navItem = {
    show: {
      ...show,
    },
    hide: {
      ...hide,
    },
  };
  const links = ["features", "pricing", "contact"];
  return (
    <motion.aside
      initial="hide"
      animate="show"
      exit="hide"
      variants={container}
      className="fixed z-10 top-0 left-0 right-0 h-screen bottom-0 bg-veryDarkBlue/90 container-px pt-28 text-xl text-center tracking-widest uppercase lg:hidden"
    >
      <motion.ul initial={{ y: 0 }}>
        {links.map((item, index) => (
          <motion.li
            variants={navItem}
            key={index}
            className="py-5 border-t border-slate-400 text-white"
          >
            <a href="#">{item}</a>
          </motion.li>
        ))}
        <motion.li
          className="pt-6 border-t border-slate-400"
          variants={navItem}
        >
          <button className="block border-2 w-full uppercase tracking-[3px] py-3 rounded-md font-medium text-white hover:bg-white hover:text-veryDarkBlue/90">
            login
          </button>
        </motion.li>
      </motion.ul>
      <motion.div
        variants={navItem}
        className="flex gap-10 items-center justify-center mt-[25vh]"
      >
        <a href="#">
          <img src={faceBook} alt="facebook" className="w-8 cursor-pointer" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" className="w-8 cursor-pointer" />
        </a>
      </motion.div>
    </motion.aside>
  );
};
export default Sidebar;
