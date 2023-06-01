import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../front/Header';
import Footer from '../front/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useEffect } from 'react';
import http from '../http'

export const ViewQuizes = () => {
   const navigate = useNavigate();
   const {id} = useParams(); 
   const [questions , setQuestions] = useState([]) 
   // let x = 0;
   useEffect(()=>{
   fetchQuizQuestionData();
   },[]);
   const fetchQuizQuestionData = () => {
   http.get('/share-quiz/' + id)
   .then(res => {
   try {
   // console.log(res);
   if (res.status === 200) {
   const data = res.data.data;
   const transformedData = data.map((quiz) => {
   return quiz.question_details.map((question) => {
   return {
   title: question.question_title,
   answer: question.answer_details.map((answer) => answer.answer),
   };
   });
   }).flat();
   //console.log(transformedData);
   setQuestions(transformedData); 
   } else {
   swal("Something Wrong");
   }
   } catch (e) {
   swal({ 
   title: "Warning!",
   text: 'No Questions are available in this quiz. Please add question first.',
   });
   navigate('/Quizzes');
   }
   }).catch((e) => {
   swal("Something Wrong");
   });
   }

// const questions = [
// {
// id: '1',
// answer: {
// 1:'answer 1',
// 2:'answer 2',
// 3:'answer 3',
// 4:'answer 4',
// }
// },
// {
// id: '2',
// answer: {
// 1:'answer1',
// 2:'answer2',
// 3:'answer3',
// 4:'answer4',
// }
// },
// {
// id: '2',
// answer: {
// 1:'answer 1',
// 2:'answer 2',
// 3:'answer 3',
// 4:'answer 4',
// }
// },
// {
// id: '3',
// answer: {
// 1:'answer 1',
// 2:'answer 2',
// 3:'answer 3',
// 4:'answer 4',
// }
// },
// {
// id: '4',
// answer: {
// 1:'answer 1',
// 2:'answer 2',
// 3:'answer 3',
// 4:'answer 4',
// }
// },
// ];
const [currentQuestion, setCurrentQuestion] = useState(0);
const handleNext = () => {
setCurrentQuestion((prevQuestion) =>
prevQuestion === questions.length - 1 ? prevQuestion : prevQuestion + 1
);
};

const handlePrevious = () => {
setCurrentQuestion((prevQuestion) =>
prevQuestion === 0 ? prevQuestion : prevQuestion - 1
);
};

const question = questions[currentQuestion];
console.log(question);

return (
<>

<Header />
<main id="main">
   <section>
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-md-8 page-box">
               <div className="col-lg-12 text-center page-style2">
                  <h4><b>Quiz Name:</b> The best essential oil blend for me today.</h4>
               </div>
               <div className="container-fluid">
                  <div className="row justify-content-center">
                     
                     <fieldset>
                        <div className="form-card">
                           <div className="row">
                              <div className="col-12">
                                 <h2 className="fs-title"><b>Question :</b> {question.title}</h2>
                              </div>
                              <div className="col-12">
                              <ul className="ps-question">
                                          {Object.entries(question.answer).map(([key, value]) => (
                                          <li  className="active step_1 rounded-pill bg-question text-start" key={key}>{value}</li>
                                          ))}
                                       </ul>
                              </div>
                           </div>
                        </div>
                        <input type="button" name="previous" class="previous action-button-previous mb-4" value="Previous Question" onClick={handlePrevious}/>
                        <input type="button" name="next" class="next action-button mb-4" value="Next Question" onClick={handleNext}/>
                     </fieldset>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
<Footer />
</>
)

}

export default ViewQuizes;