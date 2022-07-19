import React, { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  const [Question, setQuestion] = useState(0);
  const [Displayy, setDisplayy] = useState(false);
  const [Number, setNumber] = useState(0);

  const handleNext = (right) => {
    right === true ? setNumber(Number + 1) : alert("Not True");
    const nextQuestion = Question + 1;
    nextQuestion < questionSeries.length
      ? setQuestion(nextQuestion)
      : setDisplayy(true);
  };

  const questionSeries = [
    {
      question: "Who is The CEO of Amazon ? ",
      options: [
        { answer: "Elon Musk", right: false },
        { answer: "Jeff B", right: true },
        { answer: "Sunder Pichai", right: false },
        { answer: "Satya Nadela", right: false },
      ],
    },
    {
      question: "Who is the CEO of Google ? ",
      options: [
        { answer: "Sunder Pichai", right: true },
        { answer: "Elon Musk", right: false },
        { answer: "Jeff B", right: false },
        { answer: "Satya Nadella", right: false },
      ],
    },
    {
      question: "Who is the ceo of Youtube ?",
      options: [
        { answer: "Dennis Troper", right: false },
        { answer: "Elon Musk", right: false },
        { answer: "Susan Wojcicki", right: true },
        { answer: "Jawed Karim", right: false },
      ],
    },
    {
      question: "Who is the CEO of Twitter ?",
      options: [
        { answer: "Parag Aggarwal", right: true },
        { answer: "Sunder Pichai", right: false },
        { answer: "Satya Nadella", right: false },
        { answer: "Jawed Karim", right: false },
      ],
    },
    {
      question: "Who is the CEO of Facebook ?",
      options: [
        { answer: "Parag Aggarwal", right: false },
        { answer: "Susan Wojcicki", right: false },
        { answer: "Bill Gates", right: false },
        { answer: "Mark Zuckerberg", right: true },
      ],
    },
  ];

  return (
    <>
      <main>
        <div className="game-details-container">
          {/* if All Question end Thats Why i have use ternory oprator  */}
          {Displayy ? (
            <>
              <div className="header">
                <h2 className="h1">Congrats You Have Score <br/> <h3 style={{color:"white"}}>{Number} / {questionSeries.length}</h3> </h2>
              </div>
            </>
          ) : (
            <>
              <div className="question h2">
                <h2>{questionSeries[Question].question}</h2>
              </div>
              <div className="btnOutside">
                {questionSeries[Question].options.map((value) => (
                  <button
                    className="btn"
                    onClick={() => handleNext(value.right)}
                  >
                    {value.answer}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Quiz;
