import { motion } from "framer-motion";
import { useState } from "react";
import errorIcon from "../assets/images/icon-error.svg";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const validateEmail = () => {
    const regexPattern = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
    const result = regexPattern.test(email);
    if (result) {
      alert("Form Submitted 🎉");
    } else {
      setError(true);
    }
  };
  return (
    <motion.section
      initial="hide"
      whileInView="show"
      viewport={{
        once: true,
      }}
      variants={{
        show: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
          },
        },
        hide: {
          y: "30%",
          opacity: 0,
        },
      }}
      className="mt-32 bg-softBlue py-20 container-px lg:px-[32%]"
    >
      <p className="text-white uppercase tracking-[5px] text-sm text-center">
        35,000+ already joined
      </p>
      <h2 className="text-white text-center mt-4 text-[28px] font-medium mb-16">
        Stay up-to-date with what we’re doing
      </h2>
      <form
        className="xl:flex xl:items-start xl:gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          validateEmail();
        }}
        onBlur={() => {
          if (error) {
            setError(false);
          }
        }}
      >
        <div className="xl:w-[70%]">
          <div className="relative w-full">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className={`block h-14 rounded-md w-full focus:outline-none placeholder:text-gray-300 px-6 ${
                error ? "border-[3px] border-softRed" : ""
              }`}
              placeholder="Enter you email address"
            />
            {error && (
              <img
                src={errorIcon}
                alt="error-icon"
                className="absolute w-[26px] right-6 top-1/2 -translate-y-1/2"
              />
            )}
          </div>
          {error && (
            <div className="text-white text-xs bg-softRed italic pl-2 pt-4 pb-2 relative bottom-3 -z-10 rounded-md">
              Whoops, make sure it's an email
            </div>
          )}
        </div>

        <button
          type="submit"
          className="block transition-all duration-300 w-full h-14 bg-softRed text-white capitalize font-medium rounded-md cursor-pointer hover:bg-white hover:text-softRed hover:border-2 hover:border-softRed mt-5 xl:mt-0 xl:w-[30%]"
        >
          contact us
        </button>
      </form>
    </motion.section>
  );
};
export default ContactUs;
