import { React, useState } from "react";
import "./App.css";
import { data } from "./data.js";

function App() {
    function getSubmit(e) {
        const correctAnswer = data[questionNumber].correct;
        // if e is not undefined
        if (e) {
            e.preventDefault();
        }
        setQuestionNumber(questionNumber + 1);
        if (correctAnswer === selectedAnswer) {
            setScore(score + 1);
        }
        return false;
    }
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    function Question() {
        const question = data[questionNumber].question;
        const answers = data[questionNumber].answers;
        return (
            <form onSubmit={getSubmit}>
                {/* <h3>
                    Score: {score} / {questionNumber}
                </h3> */}
                <h3>
                    <legend>{question}</legend>
                </h3>
                <ul>
                    {answers.sort().map((answer, index) => {
                        return (
                            <AnswerButton
                                key={(
                                    index * data.length +
                                    questionNumber
                                ).toString()}
                                selected={answer === selectedAnswer}
                                answer={answer}
                                action={() => {
                                    setSelectedAnswer(answer);
                                }}
                            />
                        );
                    })}
                </ul>
                <button
                    type="submit"
                    onClick={() => {
                        getSubmit();
                    }}>
                    Submit
                </button>
            </form>
        );
    }
    if (questionNumber >= data.length - 1) {
        return (
            <Score
                score={score}
                total={data.length-1}
                reset={() => {
                    setQuestionNumber(0);
                    setScore(0);
                    setSelectedAnswer("");
                }}
            />
        );
    } else {
        return <Question />;
    }
}

function AnswerButton(props) {
    const answer = props.answer;
    const selected = props.selected;
    const action = props.action;
    return (
        <li>
            <button className={selected ? "selected" : ""} onClick={action}>
                {answer}
            </button>
        </li>
    );
}

function Score(props) {
    const score = props.score;
    const total = props.total;
    const reset = props.reset;
    return (
        <div>
            <h3>You have completed the quiz</h3>
            <h1>
                Your score is {score} / {total}
            </h1>
            <button onClick={reset}>Start Again</button>
        </div>
    );
}
export default App;
