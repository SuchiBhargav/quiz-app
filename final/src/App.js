import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'which Specialist you want to consult?',
			answerOptions: [
				{ answerText: 'physician', isCorrect: false },
				{ answerText: 'gynaecologist', isCorrect: false },
				{ answerText: 'Orthopedician', isCorrect: true },
				{ answerText: 'Dietitian', isCorrect: false },
			],
		},
		{
			questionText: 'Which symptoms do you have?',
			answerOptions: [
				{ answerText: 'Fever', isCorrect: false },
				{ answerText: 'cold', isCorrect: true },
				{ answerText: 'back pain', isCorrect: false },
				{ answerText: 'Pregnancy Queries', isCorrect: false },
			],
		},
		{
			questionText: 'Health check and lab test',
			answerOptions: [
				{ answerText: 'Full body check', isCorrect: true },
				{ answerText: 'Diabetes Screening', isCorrect: false },
				{ answerText: 'Thyroid check', isCorrect: false },
				{ answerText: 'Covid test', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
