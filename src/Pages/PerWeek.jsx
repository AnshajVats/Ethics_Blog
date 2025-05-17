import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { essay, questions, answers } from "../Constants";

function PerWeek() {
  const { id } = useParams();
  const essayId = parseInt(id, 10);

  // Get data for current week
  const selectedEssay = essay[essayId];
  const selectQuestions = questions[essayId - 1] || {};
  const selectAnswer = answers[essayId - 1] || {};

  // Generate array of 1-7 for questions/answers
  const qaPairs = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div className="mt-40">
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <div>
          <h2 className={styles.sectionHeadText}>
            Week {essayId + 1}, Journal
          </h2>
          <p className={`${styles.sectionSubText} mt-5 whitespace-pre-line`}>
            {selectedEssay.content}
          </p>
        </div>

        {essayId > 0 && (
          <div className="pt-8">
            <h2 className={styles.sectionHeadText}>
              Week {essayId + 1}, Questions & Answers
            </h2>
            
            {qaPairs.map((num) => {
              const question = selectQuestions[`question${num}`];
              const answer = selectAnswer[`answer${num}`];
              
              return (
                question && (
                  <div key={num} className="mt-8">
                    <h3 className={`${styles.sectionSubText} font-semibold`}>
                      Question {num}
                    </h3>
                    <p className={`${styles.sectionSubText} mt-2 mb-4 whitespace-pre-line`}>
                      {question}
                    </p>
                    
                    {answer && (
                      <>
                        <h3 className={`${styles.sectionSubText} font-semibold mt-4`}>
                          Answer {num}
                        </h3>
                        <p className={`${styles.sectionSubText} mt-2 mb-8 whitespace-pre-line`}>
                          {answer}
                        </p>
                      </>
                    )}
                  </div>
                )
              );
            })}
          </div>
        )}
      </motion.section>
    </div>
  );
}

export default PerWeek;
