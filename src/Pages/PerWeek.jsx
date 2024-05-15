import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { essay, questions, answers } from "../Constants";

function PerWeek() {
  const { id } = useParams();

  // Convert id to a number
  const essayId = parseInt(id, 10);

  // Find the essay with the matching id
  const selectedEssay = essay[essayId];
  const selectQuestions = questions[essayId - 1];
  const selectAnswer = answers[essayId - 1];

  return (
    <>
      <div className="mt-40">
        {" "}
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`/${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
          <div>
            <h2 className={`${styles.sectionHeadText} `}>
              Week {essayId + 1}, Essay
            </h2>
            <p className={`${styles.sectionSubText} mt-5`}>
              {selectedEssay.content}
            </p>
          </div>
          {essayId > 0 ? (
            <div className="pt-8">
              <h2 className={`${styles.sectionHeadText} `}>
                Week {essayId + 1}, Questions
              </h2>
              <p className={`${styles.sectionSubText} mt-5 mb-8`}>
                {selectQuestions.question1}
              </p>
              <p className={`${styles.sectionSubText} mt-5 mb-8`}>
                {selectQuestions.question2}
              </p>

              <p className={`${styles.sectionSubText} mt-5 mb-8`}>
                {selectQuestions.question3}
              </p>
              <div>
                <h2 className={`${styles.sectionHeadText} mt-8 mb-9`}>
                  Answer for Question {selectAnswer.id} .
                </h2>
                <p className={`${styles.sectionSubText} mt-5 mb-8`}>
                  {selectAnswer.answer}
                </p>
              </div>
            </div>
          ) : null}
        </motion.section>
      </div>
    </>
  );
}

export default PerWeek;
