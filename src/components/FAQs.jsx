import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQs = () => {
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
  const viewportConfig = {
    once: true,
  };
  const questionsAndAnswers = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];
  const [expanded, setExpanded] = useState(false);
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
          Frequently Asked Questions
        </h1>
        <p className="text-grayishBlue">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </motion.article>
      <section className="container-px mb-16 transition-none">
        {questionsAndAnswers.map((item, index) => (
          <SingleQuestion
            key={index}
            question={item.question}
            answer={item.answer}
            questionIndex={index}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </section>
      <motion.button
        whileHover={{
          y: -8,
        }}
        whileTap={{
          rotate: "10deg",
        }}
        className="capitalize bg-softBlue text-white w-32 py-3 mt-9 rounded-md font-medium cursor-pointer mx-auto block"
      >
        more info
      </motion.button>
    </section>
  );
};
export default FAQs;

const SingleQuestion = ({
  question,
  answer,
  questionIndex,
  expanded,
  setExpanded,
}) => {
  const answerIsVisible = expanded === questionIndex;
  return (
    <article className="border-b border-gray-300 transition-none">
      <div
        className="flex justify-between items-center py-5 cursor-pointer transition-none group"
        onClick={() => {
          setExpanded(answerIsVisible ? false : questionIndex);
        }}
      >
        <h2>{question}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className={`stroke-softBlue group-hover:stroke-softRed ${
            answerIsVisible ? "stroke-softRed rotate-180" : ""
          }`}
        >
          <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </div>
      <AnimatePresence>
        {answerIsVisible && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{
              duration: 0.5,
            }}
            className="transition-none overflow-hidden origin-center"
          >
            <p className="pt-3 pb-8 text-grayishBlue">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};