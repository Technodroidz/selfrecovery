import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ViewQuestion from './ViewQuestion';

export const QuizQuestions = ({ quizQuestionsData }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [thankyou, setThankYou] = useState(false)

    const incrementIndex = () => {

        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    const decrementIndex = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1)

    }

    const openThankYou = () => {        
        setThankYou(true)
    }
    return <div>
        

        {thankyou ? <div className="form-card">
                                    <div className="row justify-content-center">
                                       <div className="col-6"> <img src="../assets/img/completed.jpg" alt="img" className="fit-image"/> </div>
                                    </div>
                                    <br/><br/>
                                    <div className="row justify-content-center">
                                       <div className="col-12 text-center">
                                          <h2 className="purple-text text-center"><strong>Thank you For Giving Answers</strong></h2>
                                          <h5 className="text-center">Your submission has been received</h5>
                                       </div>
                                    </div>
                                 </div> :
            <ViewQuestion questionData={quizQuestionsData[currentQuestionIndex]} index={currentQuestionIndex} />

        }


        
        {currentQuestionIndex > 0 && <input type="button" name="next" className="previous action-button-previous mb-4" value="Previous Question" onClick={decrementIndex} />}

        {currentQuestionIndex < quizQuestionsData.length - 1 &&
            <input type="button" name="next" className="next action-button mb-4" value="Next Question" onClick={incrementIndex} />
        }

        {currentQuestionIndex === quizQuestionsData.length - 1 && <button className="next action-button mb-4" onClick={openThankYou}>Submit</button>}

    </div>

}



export default QuizQuestions