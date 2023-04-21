import React, { useEffect,useState }  from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import swal from 'sweetalert';
import { useNavigate, useParams } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import http from '../http'
export const Questions = () => {
const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
// modal
const [isOpen1, setIsOpen1] = React.useState(false);
const showModal1 = () => { setIsOpen1(true);};
const hideModal1 = () => { setIsOpen1(false);};
// modal
const [isOpen2, setIsOpen2] = React.useState(false);
const showModal2 = () => { setIsOpen2(true);};
const hideModal2 = () => { setIsOpen2(false);};
// modal
const [isOpen3, setIsOpen3] = React.useState(false);
const showModal3 = () => { setIsOpen3(true);};
const hideModal3 = () => { setIsOpen3(false);};
// modal
const [isOpen4, setIsOpen4] = React.useState(false);
const showModal4 = () => { setIsOpen4(true);};
const hideModal4 = () => { setIsOpen4(false);};
// Declare a new state variable, which we'll call "form fields"
const [formValues, setFormValues] = useState([{ answervalue : "", valueselect: ""}])
let handleChange = (i, e) => {
let newFormValues = [...formValues];
newFormValues[i][e.target.name] = e.target.value;
setFormValues(newFormValues);
}
let addFormFields = () => {
setFormValues([...formValues, { answervalue: "", valueselect: ""}])
}
let removeFormFields = (i) => {
let newFormValues = [...formValues];
newFormValues.splice(i, 1);
setFormValues(newFormValues)
}
let handleSubmit = (event) => {
event.preventDefault();
alert(JSON.stringify(formValues));
}

$(document).ready(function() {
   $('#deleteques1').hide();
   $('.myButton').unbind('click').click(function() {
      let num = $('.Quizzes-q').length;
      let newNum = num + 1;
      let newElem = $('#Quizzes-q-1').clone().attr('id', 'Quizzes-q-' + newNum);
      newElem.find('.question_area label').attr('for', 'Question_' + newNum).val('');
      newElem.find('.question_area label').text( 'Question:' + newNum);
      newElem.find('.question_area input').attr('id', 'question_' + newNum).attr('name', 'questions[question'  + newNum + ']').val('');
      // newElem.find('.answer_area label').attr('for', 'Answer_' + newNum).val('');
      // newElem.find('.answer_area label').text( 'Answer:' + newNum);
      newElem.find('.answer_area input').attr('id', 'question_' + newNum+'_answer').attr('name', 'question_'+newNum+'answer[]').val('');
      newElem.find('.deleteques').attr('id', 'deleteques' + newNum);
      newElem.find('#answers').attr('id', 'answers' + newNum);
      newElem.find('#addAnswers').attr('id', 'addAnswers' + newNum);
      
      // newElem.append('<button type="button" className="deleteButton appendbtn"> <i class="fa fa-trash"></i></button>');
      $('#Quizzes-q-' + num).after(newElem);
      $('#deleteques' + newNum).show();
      $(this).attr('disabled', 'disabled');
// answers clone start
$('#addAnswers'+ newNum).click(function() {
 
   let numAns = $('#answers').length;
   let newNumAns = numAns + 1;
   let newAns = $('#answers:last').clone().attr('id', 'answers-' + newNumAns);
   newElem.find('#answers input').attr('id', 'answervalue' + newNum);

   $('#answers'+newNum+':last').after(newAns);
   $('.deleteAns').unbind('click').click(function() {
 
      $(this).parent().parent().parent().parent().remove(); 
   
   });
 });
//answers clone close

$('.deleteAns').unbind('click').click(function() {
 
   $(this).parent().parent().parent().parent().remove(); 

});
//answers clone close
      $('.deleteButton').unbind('click').click(function() {
       
         $(this).parent().parent().remove(); 

    });
   
    });
   
    $('.deleteButton').unbind('click').click(function() {
     
         $(this).parent().parent().remove(); 

    });
    $('.deleteAns').unbind('click').click(function() {
 
      $(this).parent().parent().parent().parent().remove(); 
   
   });
    $('#addAnswers').unbind('click').click(function() {
      // alert('hello');
      let numAns = $('#answers').length;
      let newNumAns = numAns + 1;
      let newAns = $('#answers:last').clone().attr('id', 'answers-' + newNumAns);
      $('#answers:last').after(newAns);
      $('.deleteAns').unbind('click').click(function() {
 
         $(this).parent().parent().parent().parent().remove(); 
      
      });
    });
});
const navigate = useNavigate();
const {id} = useParams(); 
const [question,setQuestion] = useState([]);
const [answer,setAnswer] = useState([]);
const [inputtype,setInputType] = useState([]);
const [answervalue,setAnswerValue] = useState([]);
const [answerscore,setAnswerScore] = useState([]);
const handleDropdownChange = (event) => {
   setInputType(event.target.value);
  // console.log(event.target.value);
 }
 const handleAnswerValueDropdownChange = (event) => {
   setAnswerScore(event.target.value);
 }
const submitquestion = () => {
// console.log(question);
// console.log(answer);
// console.log(inputtype);
// console.log(answervalue);
// console.log(answerscore);
http.post('/add-questions',{quiz_id:id,question:question,answer:answer,input_type:inputtype,answervalue:answervalue,answerscore:answerscore})
.then(res=>{
   try{
      console.log(res);
      if(res.status === 200){
     // swal(res.data.message);
      swal({ 
       title: "Success!",
       text: res.data.message,
       type: "success"}).then(okay => {
       if (okay) {
        window.location.reload();
       }
       });
      navigate('/Questions/'+id);
   }else{
      swal("Something Wrong"); 
   }
 }catch(e){
     swal("Something Wrong");    
   }
   }).catch((e) => {
     swal("Something Wrong");
});
}   
return (
<>
<main id="main">
   <section>
      <div className="container">
     
         <div className="row justify-content-center mt-5">
            <div className="col-md-8 page-box">
               <div className="col-lg-12 text-center page-style2">
                  <h4><b>Quiz 1:</b> The best essential oil blend for me today.</h4>
                  <h4 className="mt-4 mb-3">Add/edit questions and answers for your quiz. Assign values to each possible answer.</h4>
               </div>
               <div className="row justify-content-center mt-4">
                  <div className="col-md-2 col-3">
                     <div className="icon-box">
                        <img src="../assets/img/carbon_add-filled.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Add</h4>
                     </div>
                  </div>
                  <div className="col-md-2 col-3">
                     <div className="icon-box">
                        <img src="../assets/img/fluent_delete-24-filled.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Delete</h4>
                     </div>
                  </div>
                  <div className="col-md-2 col-3">
                     <div className="icon-box">
                        <img src="../assets/img/ci_edit.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Edit</h4>
                     </div>
                  </div>
                  <div className="col-md-2 col-3">
                     <div className="icon-box">
                        <img src="../assets/img/bi_image.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Img</h4>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6 mt-4 text-center">
                     <button type="submit" className="btn-web"><img src="../assets/img/connection-box.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> Dependencies</button>
                  </div>
                  <div className="col-md-6 mt-4 text-center">
                     <button type="submit" className="btn-web"><img src="../assets/img/eye.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> Preview Quiz</button>
                  </div>
               </div>
            </div>
         </div>
         <div className="row justify-content-center mt-3">
            <div className="col-md-12 page-box">
               <div className="row justify-content-center">
                  <div className="col-md-8 mt-4">
                     <div div id="Quizzes-q-1" className='Quizzes-q'>
                        <div  className='Quizzes-qs'>
                        <div className="row align-items-center mb-4">
                           <div className="col-md-2">
                              <img onClick={showModal1} src="../assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                              <img src="../assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="../assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                           </div>
                           <div className="col-md-10">
                              <div className="row align-items-center">
                                 <div className="col-md-2 question_area">
                                 <label for="question" className="fs-14">Question 1:</label>
                                   
                                 </div>
                                 <div className="col-md-10  question_area">
                                    <input type="text" id="question_1" name='questions[]' onChange={e=>setQuestion(e.target.value)} className="form-control" placeholder="How much meat do you like on your pizza?"/>
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
                                    <img onClick={showModal1} src="../assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                                    <img src="../assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                                    <img onClick={showModal} src="../assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                                 </div>
                                 <div className="col-md-10">
                                    <div className="row align-items-center">
                                       <div className="col-md-2 answer_area">
                                      <label for="answer" className="fs-14">Answer 1:</label>
                                       </div>
                                       <div className="col-md-10 answer_area">
                                          <input type="text" id="question_1_answer_1" className="form-control" onChange={e=>setAnswer(e.target.value)} placeholder="Plenty of Meat"/>
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
                                    <b className="fs-14">Radio Button:  </b>
                                 </div>
                                 <div className="col-md-9 col-12 selectbutton">
                                    <select className="form-control" onChange={handleDropdownChange}>
                                       <option selected>Radio Button</option>
                                       <option>Check Box</option>
                                       <option>Text Box</option>
                                       <option>Paragraph</option>
                                       <option>Drop Down</option>
                                       <option>Scale</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <div className="answer-value-score mb-4">
                              <div className="add-quizzes-ans-option">
                                 <div className="row align-items-center" >
                                 <form  >
                              <div className="mb-3 row align-items-center" id='answers' >
                                 <div className="col-md-8 col-12 mb-2">
                                    <label><b className="fs-14">Answer :</b></label>              
                                    <input type="text" name="answervalue" onChange={e=>setAnswerValue(e.target.value)} placeholder="Meat" class="form-control mt-2"  />
                                 </div>                                 
                                 <div className="col-md-3 col-9 mb-2">
                                    <label><b className="fs-14">Score:  </b></label>
                                    <select className="form-control mt-2" onChange={handleAnswerValueDropdownChange}  name="valueselect" >
                                    <option selected>-2</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    </select>
                                 </div>
                                 <div className="col-md-1 col-1 d-flex">
                                    {/* <div className="answer-value-delete">
                                       <Link to="#">
                                          <i className="fa fa-trash"></i>
                                       </Link>
                                    </div> */}
                                 
                                 <div className="col-sm text-end">
                                    <div className="answer-value-delete">
                                    <button type="button" className='deleteAns' > <i className="fa fa-trash"></i></button> 
                                    </div>
                                 </div>
                                 
                                 </div>
                                 
                              </div>
                             
                              <div className="add-quizzes-ans-option text-right" >
                              <spam> <b>Add Value (Values help with quiz results)</b></spam>
                              <img src="../assets/img/add-filled.png" alt="quizzes" className="img-fluid" id='addAnswers'/>                              
                           </div>
                           </form>
                                 </div>
                              </div>
                           </div>
                           
                           
                        </div>
                        </div>
                        <div className="add-quizzes deleteques mt-5" id='deleteques1'>
                        
                        <button type="button" className="deleteButton appendbtn"> <i class="fa fa-trash"></i></button>
                     </div>
                     </div>
                     
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-md-8">
                     <div className="appendme"></div>
                     <div className="add-quizzes mt-5">
                        <Link to="" className="myButton appendbtn">
                        <img src="../assets/img/add-filled.png" alt="add-filled" className="img-fluid"/>
                        <h5>New Questions </h5>
                        </Link>
                     </div>
                  </div>
               </div>
               
               {/* 
               <div className="row justify-content-center">
                  <div className="col-md-4 mt-5">
                     <div className="add-quizzes">
                        <Link onClick={showModal3}>
                        <img src="assets/img/add-filled.png" alt="add-filled" className="img-fluid"/>
                        <h5>New Question</h5>
                        </Link>
                     </div>
                  </div>
               </div>
               */}
                <img src="../assets/img/check.png" alt="check"  style={{height: "50px"}} className="img-fluid"  onClick={submitquestion}/> 
            </div>
         </div>
      </div>
   </section>
</main>
<Modal show={isOpen} onHide={hideModal} centered>
   <Modal.Body className="p_50">
      <span onClick={hideModal} className="clos"> 
      <img src="../assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-6">
            <div className="modal-popup p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <div className="col-lg-12 page-style2">
                        <h5><img src="../assets/img/charm_crop.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> <u>crop img</u></h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen1} onHide={hideModal1} centered>
   <Modal.Body className="p_50">
      <span onClick={hideModal1} className="clos"> 
      <img src="../assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="mt-5">
                  <div className="row justify-content-center">
                     <div className="col-md-10">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="../assets/img/active.png" alt="upload-csv" className="img-fluid"/>
                                 <h5>Active</h5>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="../assets/img/inactive.png" alt="upload-csv"  style={{height: "50px"}} className="img-fluid"/>
                                 <h5>Inactive</h5>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="../assets/img/quizzes-delete.png" alt="upload-csv"  style={{height: "50px"}} className="img-fluid"/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen2} onHide={hideModal2} centered>
   <Modal.Body className="p_50">
      <span onClick={hideModal2} className="clos"> 
      <img src="../assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="mt-5">
                  <div className="row justify-content-center">
                     <div className="col-md-10">
                        <div className="row">
                           <div className="col-md-12 mb-5">
                              <h3>Are you sure?</h3>
                           </div>
                           <div className="col-md-6 mt-3 mb-3">
                              <button type="submit" className="btn-web" onClick={hideModal2} >Yes</button>                  
                           </div>
                           <div className="col-md-6 mt-3 mb-3">
                              <button type="submit" className="btn-web" onClick={hideModal2} >No</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen3} onHide={hideModal3} centered>
   <Modal.Body className="p_50">
      <span onClick={hideModal3} className="clos"> 
      <img src="../assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="mt-5">
                  <div className="row justify-content-center">
                     <div className="col-md-10">
                        <div className="row justify-content-center">
                           <div className="col-md-7 mb-5">
                              <select className="form-select" aria-label="Default select example">
                                 <option selected>Quiz Name</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </select>
                           </div>
                        </div>
                        <div className="row justify-content-center">
                           <div className="col-md-3 mt-3 mb-3">
                              <img src="../assets/img/close.png" alt="close"  style={{height: "50px"}} className="img-fluid"  onClick={hideModal3}/>                
                           </div>
                           <div className="col-md-3 mt-3 mb-3">
                              <img src="../assets/img/check.png" alt="check"  style={{height: "50px"}} className="img-fluid"  onClick={hideModal3}/>  
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen4} onHide={hideModal4} >
   <Modal.Body className="p_50">
      <span onClick={hideModal4} className="clos"> 
      <img src="../assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="row w-100">
                  <div className="col-lg-12 text-center page-style2">
                     <h2>Dependencies</h2>
                     <h4>Questions dependent on other questions.</h4>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 mt-4 text-center mb-4">
                     <button type="submit" className="btn-web"><img src="../assets/img/eye.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> Preview Quiz</button>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 mt-4">
                     <div className="qus-box">
                        <h4 className="mb-4">Add New Dependency</h4>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">show question</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Select Questions"
                              displayValue="key"
                              groupBy="cat"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                              {
                              cat: 'Create New',
                              key: 'Option 1'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 2'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 3'
                              }
                              ]}
                              showCheckbox
                              showArrow
                              />
                           </div>
                        </div>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">If below logic is</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Triggered By "
                              displayValue="key"
                              groupBy="cat"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                              {
                              cat: 'Create New',
                              key: 'Option 1'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 2'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 3'
                              }
                              ]}
                              showCheckbox
                              showArrow
                              />
                           </div>
                        </div>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">question</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Trigger Question"
                              displayValue="key"
                              groupBy="cat"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                              {
                              cat: 'Create New',
                              key: 'Option 1'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 2'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 3'
                              }
                              ]}
                              showCheckbox
                              showArrow
                              />
                           </div>
                        </div>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">answered</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Trigger Responses"
                              displayValue="key"
                              groupBy="cat"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                              {
                              cat: 'Create New',
                              key: 'Option 1'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 2'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 3'
                              }
                              ]}
                              showCheckbox
                              showArrow
                              />
                           </div>
                        </div>
                        <div className="qus-icon">
                           <Link scr="/">
                           <img src="../assets/img/add-filled.png" alt="close"  style={{height: "40px"}} className="img-fluid"  onClick={hideModal3}/> </Link>
                        </div>
                     </div>
                     <div className="qus-box">
                        <h4 className="mb-4">Dependency 3</h4>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">show question</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Question 2: Pick…"
                              displayValue="key"
                              groupBy="cat"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                              {
                              cat: 'Create New',
                              key: 'Option 1'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 2'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 3'
                              }
                              ]}
                              showCheckbox
                              showArrow
                              />
                           </div>
                        </div>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">when true / false</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="True"
                              displayValue="key"
                              groupBy="cat"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                              {
                              cat: 'Create New',
                              key: 'Option 1'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 2'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 3'
                              }
                              ]}
                              showCheckbox
                              showArrow
                              />
                           </div>
                        </div>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">if question is</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Question 1: How…"
                              displayValue="key"
                              groupBy="cat"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                              {
                              cat: 'Create New',
                              key: 'Option 1'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 2'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 3'
                              }
                              ]}
                              showCheckbox
                              showArrow
                              />
                           </div>
                        </div>
                        <div className="form-group row">
                           <label className="col-sm-3 col-form-label mb-3 text-right">if answer is</label>
                           <div className="col-sm-9">
                              <Multiselect
                              placeholder="Unsure"
                              displayValue="key"
                              groupBy="cat"
                              onKeyPressFn={function noRefCheck(){}}
                              onRemove={function noRefCheck(){}}
                              onSearch={function noRefCheck(){}}
                              onSelect={function noRefCheck(){}}
                              options={[
                              {
                              cat: 'Create New',
                              key: 'Option 1'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 2'
                              },
                              {
                              cat: 'Create New',
                              key: 'Option 3'
                              }
                              ]}
                              showCheckbox
                              showArrow
                              />
                           </div>
                        </div>
                        <div className="qus-icon">
                           <Link scr="/">
                           <img src="../assets/img/quizzes-edit.png" alt="close"  style={{height: "30px"}} className="img-fluid"  onClick={hideModal3}/> </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
   <Modal.Footer>
      <div className="row justify-content-center">
         <div className="col-md-1 mt-3 mb-3">
            <img src="../assets/img/close.png" alt="close"  style={{height: "40px"}} className="img-fluid"  onClick={hideModal3}/>                
         </div>
         <div className="col-md-1 mt-3 mb-3">
            <img src="../assets/img/check.png" alt="check"  style={{height: "40px"}} className="img-fluid"  onClick={hideModal3}/>  
         </div>
      </div>
   </Modal.Footer>
</Modal>
</>
)
}
export default Questions;