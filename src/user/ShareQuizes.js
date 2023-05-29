import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import SimpleForm from "../components/SimpleForm";
import QuizQuestions from "../components/QuizzQuestions";
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useEffect } from 'react';
import http from '../http'

export const ShareQuizes = () => {

   const navigate = useNavigate();
   const {id} = useParams(); 
   const [quizQuestionsData , setQuizQuestionsData] = useState([]) 

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
                     input_type: question.input_type,
                     options: question.answer_details.map((answer) => answer.answer),
                     };
                  });
               }).flat();
               // console.log(transformedData);
               setQuizQuestionsData(transformedData); 
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
    

   const [formData, setFormData] = useState({ name: '', email: '', age: 0, gender: 'Man' })
   const [showQuiz, setShowQuiz] = useState(false)


   const handleFormDataChange = (event, key) => {
      let value = event.target.value
      setFormData({ ...formData, [key]: value })
   }

   const onStartQuiz = () => {
      setShowQuiz(true)
      console.log("form data us", formData)
   } 

   return (
      <>
         <div className="container mt-4">
            <div className="row justify-content-center">
               <div className="col-md-8 text-center">
                  <img src="../assets/img/logo.png" alt="logo" width="10%" className="img-fluid" />
               </div>
            </div>
         </div>
         <main id="main">
            <section>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-md-8 page-box">
                        <div className="col-lg-12 text-center page-style2">
                           <h4><b>Quiz Name:</b> The best essential oil blend for me today.</h4>
                           {/* <h4 className="mt-4 mb-3">Add/edit questions and answers for your quiz. Assign values to each possible answer.</h4> */}
                        </div>
                        <div className="container-fluid">
                           <div className="row justify-content-center">
                              <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 text-center p-0 mt-3 mb-2">
                                 <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                                    {showQuiz ? <QuizQuestions quizQuestionsData={quizQuestionsData}/> :
                                       <SimpleForm formData={formData} setFormData={setFormData} handleFormDataChange={handleFormDataChange} onStartQuiz={onStartQuiz} />
                                    }                                    
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer>
            <div className="container py-4">
               <div className="row">
                  <div className="col-md-8 col-12">
                     <div className="footer-logo">
                        <img src="../assets/img/logo.png" alt="logo" className="img-fluid" />
                     </div>
                  </div>
                  <div className="col-md-2 col-6">
                     <div className="my-float-right">
                        <div className="footer-menu text-center text-md-right pt-3 pt-md-0">
                           <Link to="/">
                              <img src="../assets/img/footer-contact.png" alt="contact" className="img-fluid" /> Contact Us</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-2 col-6">
                     <div className="my-float-right">
                        <div className="footer-menu text-center text-md-right pt-3 pt-md-0">
                           <Link to="/">
                              <img src="../assets/img/footer-consultation.png" alt="consultation" className="img-fluid" /> Consultation</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}
export default ShareQuizes;