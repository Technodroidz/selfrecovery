import { ErrorMessage, Field } from "formik";
import React from "react";
const QuestionComponent = ({ index = 0, values,setFieldValue, handleAnswerChange,addOption,deleteOption }) => {
return (
<div className="row justify-content-center">
   <div className="col-md-12 mt-4">
      <div 
         //   id="Quizzes-q-1" 
         className="Quizzes-q">
         <div className="Quizzes-qs">
            <div className="row align-items-center mb-4">
               <div className="col-md-2">
                  <img
                     //   onClick={showModal1}
                     src="../assets/img/quizzes-delete.png"
                     alt="quizzes"
                     className="img-fluid"
                     />
                  <img
                     src="../assets/img/quizzes-edit.png"
                     alt="quizzes"
                     className="img-fluid"
                     />
                  <img
                     //   onClick={showModal}
                     src="../assets/img/quizzes-img.png"
                     alt="quizzes"
                     className="img-fluid"
                     />
               </div>
               <div className="col-md-10">
                  <div className="row align-items-center">
                     <div className="col-md-2 question_area">
                        <label for="question" className="fs-14">
                        Question {index+1}:
                        </label>
                     </div>
                     <div className="col-md-10  question_area">
                        <Field
                           as="input"
                           type="text"
                           name={`answers[${index}].title`}
                           className="form-control"
                           placeholder="How much meat do you like on your pizza?"
                           />
                        <ErrorMessage name={`answers[${index}].title`} component="div"
                           className="text-danger"
                           />
                     </div>
                  </div>
               </div>
            </div>
            <hr>
            </hr>
            <div className="Quizzes-ans mb-3">
               <div className="add-quizzes-ans">
                  <div className="row align-items-center">
                     <div className="col-md-2">
                        <img
                           //   onClick={showModal1}
                           src="../assets/img/quizzes-delete.png"
                           alt="quizzes"
                           className="img-fluid"
                           />
                        <img
                           src="../assets/img/quizzes-edit.png"
                           alt="quizzes"
                           className="img-fluid"
                           />
                        <img
                           //   onClick={showModal}
                           src="../assets/img/quizzes-img.png"
                           alt="quizzes"
                           className="img-fluid"
                           />
                     </div>
                     <div className="col-md-10">
                        <div className="row align-items-center">
                           <div className="col-md-2 answer_area">
                              <label for="answer" className="fs-14">
                              Answer {index+1}:
                              </label>
                           </div>
                           <div className="col-md-10 answer_area">
                              <Field
                                 as="input"
                                 type="text"
                                 name={`answers[${index}].sampleAnswer`}
                                 className="form-control"
                                 placeholder="Plenty of Meat"
                                 />
                              <ErrorMessage name={`answers[${index}].sampleAnswer`} component="div" 
                                 className="text-danger"
                                 />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="Quizzes-ans">
               <div className="add-quizzes-ans-option mb-4">
                  <div className="row align-items-center">
                     <div className="col-md-3 col-12">
                        <b className="fs-14">Radio Button: </b>
                     </div>
                     <div className="col-md-9 col-12 selectbutton">
                        <Field
                           as="select"
                           className="form-control"
                           name={`answers[${index}].type`}
                           >
                           <option value="">Select Radio Button</option>
                           <option value={'radio'}>Radio Button</option>
                           <option value={'checkbox'}>Check Box</option>
                        </Field>
                        <ErrorMessage name={`answers[${index}].type`} component="div"
                           className="text-danger"
                           />
                     </div>
                  </div>
               </div>
               <div className="answer-value-score mb-4">
                  <div className="add-quizzes-ans-option">
                     <div className="row align-items-center">
                        <div
                           className="mb-3 row align-items-center"
                           >
                           {
                           values.answers[index].options.map((option, index2) => (
                           <>
                           <div className="col-md-8 col-12 mb-2">
                              <label>
                              <b className="fs-14">Answer :</b>
                              </label>
                              <Field
                                 as="input"
                                 type="text"
                                 name={`answers[${index}].options[${index2}].title`}
                                 placeholder="Meat"
                                 class="form-control mt-2"
                                 />
                              <ErrorMessage name={`answers[${index}].options[${index2}].title`} component="div"
                                 className="text-danger"
                                 />
                           </div>
                           <div className="col-md-3 col-9 mb-2">
                              <label>
                              <b className="fs-14">Score: </b>
                              </label>
                              <Field
                                 as="select"
                                 className="form-control mt-2"
                                 name={`answers[${index}].options[${index2}].score`}
                                 >
                                 <option value="">Select Score</option>
                                 <option value='1'>1</option>
                                 <option value='2'>2</option>
                                 <option value='3'>3</option>
                                 <option value='4'>4</option>
                                 <option value='5'>5</option>
                                 <option value='6'>6</option>
                                 <option value='7'>7</option>
                                 <option value='8'>8</option>
                                 <option value='9'>9</option>
                                 <option value='10'>10</option>
                              </Field>
                              <ErrorMessage name={`answers[${index}].options[${index2}].score`} component="div"
                                 className="text-danger"
                                 />
                           </div>
                           {
                           index2 > 0 &&
                           <div className="col-md-1 col-3 mb-2">
                              <img
                                 onClick={()=>{
                              values.answers[index].options.splice(index2, 1)
                              setFieldValue('answers', values.answers)
                              }}
                              src="../assets/img/quizzes-delete.png"
                              alt="quizzes"
                              className="img-fluid"
                              />
                           </div>
                           }
                           </>
                           ))
                           }
                        </div>
                        {
                        <div className="add-quizzes-ans-option text-right" >
                           <spam onClick={()=> {
                              values.answers[index].options.push({
                              title: '',
                              score: -2
                              })
                              setFieldValue('answers', values.answers)
                              }}>
                              {" "}
                              <b>Add Value (Values help with quiz results)</b>
                              <img
                                 src="../assets/img/add-filled.png"
                                 alt="quizzes"
                                 className="img-fluid"
                                 />
                           </spam>
                        </div>
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
);
};
export default QuestionComponent;