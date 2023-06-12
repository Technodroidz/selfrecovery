import { ErrorMessage, Field } from "formik";
import React from "react";
const PossibilitiesComponent = ({ index = 0, values,setFieldValue, handleAnswerChange,addOption,deleteOption }) => {
return (
<div className="row justify-content-center">
   <div className="col-md-12 mt-4">
      <div 
         className="Quizzes-q">
         <div className="Quizzes-qs">
            <div className="row align-items-center mb-4">               
               <div className="col-md-12">
                  <div className="row align-items-center">
                     <div className="col-md-3 question_area">                       
                        <h6><b>Possibility {index+1}:</b> </h6>
                     </div>
                     <div className="col-md-9 question_area">
                        <Field
                           as="input"
                           type="text"
                           name={`Possibilities[${index}].Possibilitytitle`}
                           className="form-control"
                           placeholder="Alfredo Chicken Pizza"
                           />
                        <ErrorMessage name={`Possibilities[${index}].Possibilitytitle`} component="div"
                           className="text-danger"
                           />
                     </div>
                  </div>
               </div>
            </div>
            <div className="Quizzes-ans mb-3">
               <div className="add-quizzes-ans">
                  <div className="row align-items-center">                     
                     <div className="col-md-12">
                        <div className="row align-items-center">
                           <div className="col-md-3 answer_area">                              
                              <h6><b> Description {index+1}:</b> </h6>
                           </div>
                           <div className="col-md-9 answer_area">
                              <Field
                                 as="input"
                                 type="text"
                                 name={`Possibilities[${index}].Description`}
                                 className="form-control"
                                 placeholder="Your choice of crust with alfredo sauce, bacon, seasoned chicken…"
                                 />
                              <ErrorMessage name={`Possibilities[${index}].Description`} component="div" 
                                 className="text-danger"
                                 />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="Quizzes-ans mb-3">
               <div className="add-quizzes-ans">
                  <div className="row align-items-center">                     
                     <div className="col-md-12">
                        <div className="row align-items-center">
                           <div className="col-md-3 answer_area">                              
                              <h6><b> WebLink {index+1}:</b> </h6>
                           </div>
                           <div className="col-md-9 answer_area">
                              <Field
                                 as="input"
                                 type="text"
                                 name={`Possibilities[${index}].WebLink`}
                                 className="form-control"
                                 placeholder="https://drive.google.com/file/d/14fhi…"
                                 />
                              <ErrorMessage name={`Possibilities[${index}].WebLink`} component="div" 
                                 className="text-danger"
                                 />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="Quizzes-ans mb-3">
               <div className="add-quizzes-ans">
                  <div className="row align-items-center">                     
                     <div className="col-md-12">
                        <div className="row align-items-center">
                           <div className="col-md-3 answer_area">                              
                              <h6><b> AssignedQuizzes {index+1}:</b> </h6>
                           </div>
                           <div className="col-md-9 answer_area">
                              <Field
                                 as="input"
                                 type="text"
                                 name={`Possibilities[${index}].AssignedQuizzes`}
                                 className="form-control"
                                 placeholder="https://drive.google.com/file/d/14fhi…"
                                 />
                              <ErrorMessage name={`Possibilities[${index}].AssignedQuizzes`} component="div" 
                                 className="text-danger"
                                 />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="Quizzes-ans mb-3">
               <div className="add-quizzes-ans">
                  <div className="row align-items-center">                     
                     <div className="col-md-12">
                        <div className="row align-items-center">
                           <div className="col-md-3 answer_area">                              
                              <h6><b> Active or Inactive: {index+1}:</b> </h6>
                           </div>
                           <div className="col-md-9 answer_area">
                           <Field
                                 as="select"
                                 className="form-control mt-2"
                                 name={`Possibilities[${index}].options[${index}].ActiveOrInactive`}
                                 >
                                 <option value="">Select option</option>
                                 <option value='Active'>Active</option>
                                 <option value='Inactive'>Inactive</option>
                              </Field>
                              <ErrorMessage name={`Possibilities[${index}].options[${index}].ActiveOrInactive`} component="div" className="text-danger" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>


            <div className="Quizzes-ans mb-3">               
               <div className="answer-value-score mb-4">
                  <div className="add-quizzes-ans-option">
                     <div className="row align-items-center">
                        <div className="mb-3 row align-items-center">
                           {
                           values.Possibilities[index].options.map((option, index2) => (
                           <>
                           <div className="col-md-8 col-12 mb-2">
                              <label>
                              <b className="fs-14">Value :</b>
                              </label>
                              <Field
                                 as="input"
                                 type="text"
                                 name={`Possibilities[${index}].options[${index2}].title`}
                                 placeholder="Meat"
                                 class="form-control mt-2"
                                 />
                              <ErrorMessage name={`Possibilities[${index}].options[${index2}].title`} component="div"
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
                                 name={`Possibilities[${index}].options[${index2}].score`}
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
                              <ErrorMessage name={`Possibilities[${index}].options[${index2}].score`} component="div" className="text-danger"/>
                           </div>
                           {
                           index2 > 0 &&
                           <div className="col-md-1 col-3 mb-2">
                              <img
                                 onClick={()=>{
                              values.Possibilities[index].options.splice(index2, 1)
                              setFieldValue('Possibilities', values.Possibilities)
                              }}
                              src="../assets/img/quizzes-delete.png"
                              alt="quizzes" className="img-fluid" />
                           </div>
                           }
                           </>
                           ))
                           }
                        </div>
                        {
                        <div className="add-quizzes-ans-option text-right" >
                           <spam onClick={()=> {
                              values.Possibilities[index].options.push({
                              title: '',
                              score: -2
                              })
                              setFieldValue('Possibilities', values.Possibilities)
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
export default PossibilitiesComponent;