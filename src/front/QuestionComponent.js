import React from "react";
const QuestionComponent = ({ index = 0, answer = {}, handleAnswerChange,addOption,deleteOption }) => {
return (
<div key={`question-${index}`}>
   <div className="row justify-content-center">
      {/* <label>Answer {index + 1}</label> */}
      {/* <input
         type="text"
         value={answer}
         onChange={(event) => handleAnswerChange(event, index)}
      /> */}
      <div className="col-md-12 mt-4">
         <div 
            //   id="Quizzes-q-1" 
            className="Quizzes-q">
            <div className="Quizzes-qs">
               <div className="row align-items-center mb-4">
                  <div className="col-md-2">
                     <img
                        //   onClick={showModal1}
                        src="assets/img/quizzes-delete.png"
                        alt="quizzes"
                        className="img-fluid"
                        />
                     <img
                        src="assets/img/quizzes-edit.png"
                        alt="quizzes"
                        className="img-fluid"
                        />
                     <img
                        //   onClick={showModal}
                        src="assets/img/quizzes-img.png"
                        alt="quizzes"
                        className="img-fluid"
                        />
                  </div>
                  <div className="col-md-10">
                     <div className="row align-items-center">
                        <div className="col-md-2 question_area">
                           <label for="question" className="fs-14">
                           Question {index + 1}:
                           </label>
                        </div>
                        <div className="col-md-10  question_area">
                           <input
                           type="text"
                           // id={`question-${index + 1}`}
                           // name="questions[]"
                           className="form-control"
                           value={answer.title}
                           onChange={(event) =>
                           handleAnswerChange(index, "title", event.target.value)
                           }
                           placeholder="How much meat do you like on your pizza?"
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
                              src="assets/img/quizzes-delete.png"
                              alt="quizzes"
                              className="img-fluid"
                              />
                           <img
                              src="assets/img/quizzes-edit.png"
                              alt="quizzes"
                              className="img-fluid"
                              />
                           <img
                              //   onClick={showModal}
                              src="assets/img/quizzes-img.png"
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
                                 <input
                                 type="text"
                                 // id={`answer-${index + 1}`}
                                 className="form-control"
                                 value={answer.sampleAnswer}
                                 onChange={(event) =>
                                 handleAnswerChange(
                                 index,
                                 "sampleAnswer",
                                 event.target.value
                                 )
                                 }
                                 placeholder="Plenty of Meat"
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
                           <select
                              className="form-control"
                              value={answer.type}
                              onChange={(event) =>
                              handleAnswerChange(index, "type", event.target.value)
                              }
                              >
                              <option value={1}>Radio Button</option>
                              <option value={2}>Check Box</option>
                              <option value={3}>Text Box</option>
                              <option value={4}>Paragraph</option>
                              <option value={5}>Drop Down</option>
                              <option value={6}>Scale</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className="answer-value-score mb-4">
                     <div className="add-quizzes-ans-option">
                        <div className="row align-items-center">
                           {/* 
                           <form>
                              */}
                              {answer?.options?.length > 0 && answer.options.map((option, optionIndex) => {
                              return (
                              <div
                                 className="mb-3 row align-items-center"
                                 key={`option-${optionIndex}`}
                                 //   id="answers"
                                 >
                                 <div className="col-md-8 col-12 mb-2">
                                    <label>
                                    <b className="fs-14">Answer :</b>
                                    </label>
                                    <input
                                    type="text"
                                    //   name="answervalue"
                                    placeholder="Meat"
                                    class="form-control mt-2"
                                    value={option.title}
                                    onChange={(event) => {
                                    handleAnswerChange(
                                    index,
                                    "options",
                                    event.target.value,
                                    optionIndex,
                                    'title'
                                    );
                                    }}
                                    />
                                 </div>
                                 <div className="col-md-3 col-9 mb-2">
                                    <label>
                                    <b className="fs-14">Score: </b>
                                    </label>
                                    <select
                                       className="form-control mt-2"
                                       name="valueselect"
                                       value={option.score}
                                       onChange={(event) =>
                                       {
                                       handleAnswerChange(
                                       index,
                                       "options",
                                       event.target.value,
                                       optionIndex,
                                       'score'
                                       );
                                       }}
                                       >
                                       <option value='-2'>-2</option>
                                       <option value='1'>1</option>
                                       <option value='2'>2</option>
                                       <option value='3'>3</option>
                                       <option value='4'>4</option>
                                    </select>
                                 </div>
                                 <div className="col-md-1 col-1 d-flex">
                                    {/* 
                                    <div className="answer-value-delete">
                                       <Link to="#">
                                       <i className="fa fa-trash"></i>
                                       </Link>
                                    </div>
                                    */}
                                    <div className="col-sm text-end">
                                       <div className="answer-value-delete">
                                          <button type="button" className="deleteAns" onClick={()=>deleteOption(index,optionIndex)}>
                                          {" "}
                                          <i className="fa fa-trash"></i>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              );
                              })}
                              <div className="add-quizzes-ans-option text-right" >
                                 <spam onClick={()=> { addOption(  index );}}>
                                    {" "}
                                    <b>Add Value (Values help with quiz results)</b>
                                    <img
                                       src="assets/img/add-filled.png"
                                       alt="quizzes"
                                       className="img-fluid"
                                       // id="addAnswers"
                                       />
                                 </spam>
                              </div>
                              {/* 
                           </form>
                           */}
                        </div>
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