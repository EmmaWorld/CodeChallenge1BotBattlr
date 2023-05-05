import React, { useState, useEffect } from 'react';

const QuizApp = () => {
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('http://localhost:3000/results');
      const data = await response.json();
      setResults(data);
    };

    fetchResults();
  }, []);

  const handleAnswerOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestionClick = () => {
    if (selectedAnswer === null) return;
    
    const correctAnswer = results[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestartQuizClick = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowScore(false);
    setScore(0);
  };

  const handleDeleteResultsClick = async () => {
    await fetch('http://localhost:3000/results', { method: 'DELETE' });
    setResults([]);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h1>Your score: {score}</h1>
          <button onClick={handleRestartQuizClick}>Play again</button>
          <button onClick={handleDeleteResultsClick}>Delete results</button>
        </div>
      ) : (
        <div>
          <h1>{results[currentQuestion]?.question}</h1>
          <ul>
            {results[currentQuestion]?.answerOptions.map((option) => (
              <li
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                style={{ backgroundColor: option === selectedAnswer ? 'lightblue' : 'white' }}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestionClick}>Next question</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
