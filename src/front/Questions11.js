import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import Multiselect from 'multiselect-react-dropdown';
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

$( document ).ready(function() {
   var count = 0; 
$(".appendbtn").click(function () {
   
   $(".appendme").append('<div class="accordion-item"> <h2 class="accordion-header" id="flush-headingOne"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> <b>Question 1: &nbsp;</b> How much meat do you like on your pizza? </button> </h2> <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"> <div class="accordion-body"> <div class="Quizzes-q"> <div class="row align-items-center mb-4"> <div class="col-md-2"> <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" class="img-fluid"/> <img src="assets/img/quizzes-edit.png" alt="quizzes" class="img-fluid"/> <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" class="img-fluid"/> </div> <div class="col-md-10"> <div class="row align-items-center"> <div class="col-md-2"> <b class="fs-14">Question 1:</b> </div> <div class="col-md-10"> <input type="text" class="form-control" placeholder="How much meat do you like on your pizza?"/> </div> </div> </div> </div> <hr> </hr> <div class="accordion" id="accordionans"> <div class="accordion-item"> <h2 class="accordion-header" id="headingOneans"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneans" aria-expanded="true" aria-controls="collapseOneans"> Answer 1: Plenty of Meat </button> </h2> <div id="collapseOneans" class="accordion-collapse collapse" aria-labelledby="headingOneans" data-bs-parent="#accordionans"> <div class="accordion-body"> <div class="Quizzes-ans mb-3"> <div class="add-quizzes-ans"> <div class="row align-items-center"> <div class="col-md-2"> <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" class="img-fluid"/> <img src="assets/img/quizzes-edit.png" alt="quizzes" class="img-fluid"/> <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" class="img-fluid"/> </div> <div class="col-md-10"> <div class="row align-items-center"> <div class="col-md-2"> <b class="fs-14">Answer 1:</b> </div> <div class="col-md-10"> <input type="text" class="form-control" placeholder="Plenty of Meat"/> </div> </div> </div> </div> </div> </div> <div class="Quizzes-ans"> <div class="add-quizzes-ans-option mb-4"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Radio Button: </b> </div> <div class="col-9 d-flex"> <select class="form-control"> <option selected>Radio Button</option> <option>Check Box</option> <option>Text Box</option> <option>Paragraph</option> <option>Drop Down</option> <option>Scale</option> </select> </div> </div> </div> <div class="answer-value-score mb-4"> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Answer Value 1: </b> </div> <div class="col-9 d-flex align-items-center"> <input type="text" placeholder="Meat" class="form-control"/> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3 align-items-center"> <b class="fs-14">Value 1 Score: </b> </div> <div class="col-9 d-flex align-items-center"> <select class="form-control"> <option selected>-2</option> <option>1</option> <option>2</option> <option>3</option> <option>4</option> </select> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> </div> <div class="answer-value-score mb-4"> <div class="add-quizzes-ans-option"> <div class="row"> <div class="col-3 align-items-center"> <b class="fs-14">Answer Value 2: </b> </div> <div class="col-9 d-flex align-items-center"> <input type="text" placeholder="Vegetarian" class="form-control"/> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Value 2 Score: </b> </div> <div class="col-9 d-flex align-items-center"> <select class="form-control"> <option>1</option> <option>2</option> <option>3</option> <option selected>4</option> </select> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> </div> <div class="add-quizzes-ans-option text-right"> <spam> <b>Add Value (Values help with quiz results)</b></spam> <img src="assets/img/add-filled.png" alt="quizzes" class="img-fluid"/> </div> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header" id="headingOneans2"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneans2" aria-expanded="true" aria-controls="collapseOneans2"> Answer 2: Double Meat </button> </h2> <div id="collapseOneans2" class="accordion-collapse collapse" aria-labelledby="headingOneans2" data-bs-parent="#accordionans"> <div class="accordion-body"> <div class="Quizzes-ans mb-3"> <div class="add-quizzes-ans"> <div class="row align-items-center"> <div class="col-md-2"> <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" class="img-fluid"/> <img src="assets/img/quizzes-edit.png" alt="quizzes" class="img-fluid"/> <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" class="img-fluid"/> </div> <div class="col-md-10"> <div class="row align-items-center"> <div class="col-md-2"> <b class="fs-14">Answer 2:</b> </div> <div class="col-md-10"> <input type="text" class="form-control" placeholder="Double Meat"/> </div> </div> </div> </div> </div> </div> <div class="Quizzes-ans"> <div class="add-quizzes-ans-option mb-4"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Radio Button: </b> </div> <div class="col-9 d-flex"> <select class="form-control"> <option selected>Radio Button</option> <option>Check Box</option> <option>Text Box</option> <option>Paragraph</option> <option>Drop Down</option> <option>Scale</option> </select> </div> </div> </div> <div class="answer-value-score mb-4"> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Answer Value 1: </b> </div> <div class="col-9 d-flex align-items-center"> <input type="text" placeholder="Meat" class="form-control"/> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3 align-items-center"> <b class="fs-14">Value 1 Score: </b> </div> <div class="col-9 d-flex align-items-center"> <select class="form-control"> <option selected>-2</option> <option>1</option> <option>2</option> <option>3</option> <option>4</option> </select> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> </div> <div class="answer-value-score mb-4"> <div class="add-quizzes-ans-option"> <div class="row"> <div class="col-3 align-items-center"> <b class="fs-14">Answer Value 2: </b> </div> <div class="col-9 d-flex align-items-center"> <input type="text" placeholder="Vegetarian" class="form-control"/> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Value 2 Score: </b> </div> <div class="col-9 d-flex align-items-center"> <select class="form-control"> <option>1</option> <option>2</option> <option>3</option> <option selected>4</option> </select> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> </div> <div class="add-quizzes-ans-option text-right"> <spam> <b>Add Value (Values help with quiz results)</b></spam> <img src="assets/img/add-filled.png" alt="quizzes" class="img-fluid"/> </div> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header" id="headingOneans3"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneans3" aria-expanded="true" aria-controls="collapseOneans3"> Answer 3: One Meat </button> </h2> <div id="collapseOneans3" class="accordion-collapse collapse" aria-labelledby="headingOneans3" data-bs-parent="#accordionans"> <div class="accordion-body"> <div class="Quizzes-ans mb-3"> <div class="add-quizzes-ans"> <div class="row align-items-center"> <div class="col-md-2"> <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" class="img-fluid"/> <img src="assets/img/quizzes-edit.png" alt="quizzes" class="img-fluid"/> <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" class="img-fluid"/> </div> <div class="col-md-10"> <div class="row align-items-center"> <div class="col-md-2"> <b class="fs-14">Answer 3:</b> </div> <div class="col-md-10"> <input type="text" class="form-control" placeholder="One Meat"/> </div> </div> </div> </div> </div> </div> <div class="Quizzes-ans"> <div class="add-quizzes-ans-option mb-4"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Radio Button: </b> </div> <div class="col-9 d-flex"> <select class="form-control"> <option selected>Radio Button</option> <option>Check Box</option> <option>Text Box</option> <option>Paragraph</option> <option>Drop Down</option> <option>Scale</option> </select> </div> </div> </div> <div class="answer-value-score mb-4"> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Answer Value 1: </b> </div> <div class="col-9 d-flex align-items-center"> <input type="text" placeholder="Meat" class="form-control"/> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3 align-items-center"> <b class="fs-14">Value 1 Score: </b> </div> <div class="col-9 d-flex align-items-center"> <select class="form-control"> <option selected>-2</option> <option>1</option> <option>2</option> <option>3</option> <option>4</option> </select> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> </div> <div class="answer-value-score mb-4"> <div class="add-quizzes-ans-option"> <div class="row"> <div class="col-3 align-items-center"> <b class="fs-14">Answer Value 2: </b> </div> <div class="col-9 d-flex align-items-center"> <input type="text" placeholder="Vegetarian" class="form-control"/> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Value 2 Score: </b> </div> <div class="col-9 d-flex align-items-center"> <select class="form-control"> <option>1</option> <option>2</option> <option>3</option> <option selected>4</option> </select> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> </div> <div class="add-quizzes-ans-option text-right"> <spam> <b>Add Value (Values help with quiz results)</b></spam> <img src="assets/img/add-filled.png" alt="quizzes" class="img-fluid"/> </div> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="accordion-header" id="headingOneans4"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneans4" aria-expanded="true" aria-controls="collapseOneans4"> Answer 4: No Meat </button> </h2> <div id="collapseOneans4" class="accordion-collapse collapse" aria-labelledby="headingOneans4" data-bs-parent="#accordionans"> <div class="accordion-body"> <div class="Quizzes-ans mb-3"> <div class="add-quizzes-ans"> <div class="row align-items-center"> <div class="col-md-2"> <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" class="img-fluid"/> <img src="assets/img/quizzes-edit.png" alt="quizzes" class="img-fluid"/> <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" class="img-fluid"/> </div> <div class="col-md-10"> <div class="row align-items-center"> <div class="col-md-2"> <b class="fs-14">Answer 4:</b> </div> <div class="col-md-10"> <input type="text" class="form-control" placeholder="No Meat"/> </div> </div> </div> </div> </div> </div> <div class="Quizzes-ans"> <div class="add-quizzes-ans-option mb-4"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Radio Button: </b> </div> <div class="col-9 d-flex"> <select class="form-control"> <option selected>Radio Button</option> <option>Check Box</option> <option>Text Box</option> <option>Paragraph</option> <option>Drop Down</option> <option>Scale</option> </select> </div> </div> </div> <div class="answer-value-score mb-4"> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Answer Value 1: </b> </div> <div class="col-9 d-flex align-items-center"> <input type="text" placeholder="Meat" class="form-control"/> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3 align-items-center"> <b class="fs-14">Value 1 Score: </b> </div> <div class="col-9 d-flex align-items-center"> <select class="form-control"> <option selected>-2</option> <option>1</option> <option>2</option> <option>3</option> <option>4</option> </select> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> </div> <div class="answer-value-score mb-4"> <div class="add-quizzes-ans-option"> <div class="row"> <div class="col-3 align-items-center"> <b class="fs-14">Answer Value 2: </b> </div> <div class="col-9 d-flex align-items-center"> <input type="text" placeholder="Vegetarian" class="form-control"/> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> <div class="add-quizzes-ans-option"> <div class="row align-items-center"> <div class="col-3"> <b class="fs-14">Value 2 Score: </b> </div> <div class="col-9 d-flex align-items-center"> <select class="form-control"> <option>1</option> <option>2</option> <option>3</option> <option selected>4</option> </select> <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" class="img-fluid" style={{width: "20px", height:"20px"}}/> </div> </div> </div> </div> <div class="add-quizzes-ans-option text-right"> <spam> <b>Add Value (Values help with quiz results)</b></spam> <img src="assets/img/add-filled.png" alt="quizzes" class="img-fluid"/> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>');
   count++;
});
});

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
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/carbon_add-filled.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Add</h4>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/fluent_delete-24-filled.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Delete</h4>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/ci_edit.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Edit</h4>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/bi_image.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Img</h4>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6 mt-4 text-center">
                     <button type="submit" onClick={showModal4} className="btn-web"><img src="assets/img/connection-box.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> Dependencies</button>
                  </div>
                  <div className="col-md-6 mt-4 text-center">
                     <button type="submit" className="btn-web"><img src="assets/img/eye.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> Preview Quiz</button>
                  </div>
               </div>
            </div>
         </div>
         <div className="row justify-content-center mt-3">
            <div className="col-md-12 page-box">
               <div className="row justify-content-center">
                  <div className="col-md-8 mt-4">
                     <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                           <h2 className="accordion-header" id="flush-headingOne">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              <b>Question : &nbsp;</b>
                              </button>
                           </h2>
                           <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                 <div className="Quizzes-q">
                                    <div className="row align-items-center mb-4">
                                       <div className="col-md-2">
                                          <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                                          <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                                          <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                                       </div>
                                       <div className="col-md-10">
                                          <div className="row align-items-center">
                                             <div className="col-md-2">
                                                <b className="fs-14">Question 1:</b> 
                                             </div>
                                             <div className="col-md-10">
                                                <input type="text" className="form-control" placeholder="How much meat do you like on your pizza?"/>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <hr>
                                    </hr>
                                    <div className="accordion" id="accordionans">
                                       <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingOneans">
                                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneans" aria-expanded="true" aria-controls="collapseOneans">
                                             Answer 1: Plenty of Meat
                                             </button>
                                          </h2>
                                          <div id="collapseOneans" className="accordion-collapse collapse" aria-labelledby="headingOneans" data-bs-parent="#accordionans">
                                             <div className="accordion-body">
                                                <div className="Quizzes-ans mb-3">
                                                   <div className="add-quizzes-ans">
                                                      <div className="row align-items-center">
                                                         <div className="col-md-2">
                                                            <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                                                            <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                                                         </div>
                                                         <div className="col-md-10">
                                                            <div className="row align-items-center">
                                                               <div className="col-md-2">
                                                                  <b className="fs-14">Answer 1:</b> 
                                                               </div>
                                                               <div className="col-md-10">
                                                                  <input type="text" className="form-control" placeholder="Plenty of Meat"/>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="Quizzes-ans">
                                                   <div className="add-quizzes-ans-option mb-4">
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Radio Button:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex">
                                                            <select className="form-control">
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
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Answer Value 1:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <input type="text" placeholder="Meat" className="form-control"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row align-items-center">
                                                         <div className="col-3 align-items-center">
                                                            <b className="fs-14">Value 1 Score:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <select className="form-control">
                                                               <option selected>-2</option>
                                                               <option>1</option>
                                                               <option>2</option>
                                                               <option>3</option>
                                                               <option>4</option>
                                                            </select>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   </div>
                                                  
                                                   <div className="answer-value-score mb-4">
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row">
                                                         <div className="col-3 align-items-center">
                                                            <b className="fs-14">Answer Value 2:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <input type="text" placeholder="Vegetarian" className="form-control"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Value 2 Score:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <select className="form-control">
                                                               <option>1</option>
                                                               <option>2</option>
                                                               <option>3</option>
                                                               <option selected>4</option>
                                                            </select>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option text-right">
                                                      <spam> <b>Add Value (Values help with quiz results)</b></spam>
                                                      <img src="assets/img/add-filled.png" alt="quizzes" className="img-fluid"/>                              
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingOneans2">
                                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneans2" aria-expanded="true" aria-controls="collapseOneans2">
                                             Answer 2: Double Meat
                                             </button>
                                          </h2>
                                          <div id="collapseOneans2" className="accordion-collapse collapse" aria-labelledby="headingOneans2" data-bs-parent="#accordionans">
                                             <div className="accordion-body">
                                                <div className="Quizzes-ans mb-3">
                                                   <div className="add-quizzes-ans">
                                                      <div className="row align-items-center">
                                                         <div className="col-md-2">
                                                            <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                                                            <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                                                         </div>
                                                         <div className="col-md-10">
                                                            <div className="row align-items-center">
                                                               <div className="col-md-2">
                                                                  <b className="fs-14">Answer 2:</b> 
                                                               </div>
                                                               <div className="col-md-10">
                                                                  <input type="text" className="form-control" placeholder="Double Meat"/>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="Quizzes-ans">
                                                   <div className="add-quizzes-ans-option mb-4">
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Radio Button:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex">
                                                            <select className="form-control">
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
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Answer Value 1:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <input type="text" placeholder="Meat" className="form-control"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row  align-items-center">
                                                         <div className="col-3 align-items-center">
                                                            <b className="fs-14">Value 1 Score:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <select className="form-control">
                                                               <option selected>-2</option>
                                                               <option>1</option>
                                                               <option>2</option>
                                                               <option>3</option>
                                                               <option>4</option>
                                                            </select>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   </div>
                                                  
                                                   <div className="answer-value-score mb-4">
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row">
                                                         <div className="col-3 align-items-center">
                                                            <b className="fs-14">Answer Value 2:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <input type="text" placeholder="Vegetarian" className="form-control"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Value 2 Score:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <select className="form-control">
                                                               <option>1</option>
                                                               <option>2</option>
                                                               <option>3</option>
                                                               <option selected>4</option>
                                                            </select>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option text-right">
                                                      <spam> <b>Add Value (Values help with quiz results)</b></spam>
                                                      <img src="assets/img/add-filled.png" alt="quizzes" className="img-fluid"/>                              
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingOneans3">
                                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneans3" aria-expanded="true" aria-controls="collapseOneans3">
                                             Answer 3: One Meat
                                             </button>
                                          </h2>
                                          <div id="collapseOneans3" className="accordion-collapse collapse" aria-labelledby="headingOneans3" data-bs-parent="#accordionans">
                                             <div className="accordion-body">
                                                <div className="Quizzes-ans mb-3">
                                                   <div className="add-quizzes-ans">
                                                      <div className="row align-items-center">
                                                         <div className="col-md-2">
                                                            <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                                                            <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                                                         </div>
                                                         <div className="col-md-10">
                                                            <div className="row align-items-center">
                                                               <div className="col-md-2">
                                                                  <b className="fs-14">Answer 3:</b> 
                                                               </div>
                                                               <div className="col-md-10">
                                                                  <input type="text" className="form-control" placeholder="One Meat"/>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="Quizzes-ans">
                                                   <div className="add-quizzes-ans-option mb-4">
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Radio Button:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex">
                                                            <select className="form-control">
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
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Answer Value 1:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <input type="text" placeholder="Meat" className="form-control"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row  align-items-center">
                                                         <div className="col-3 align-items-center">
                                                            <b className="fs-14">Value 1 Score:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <select className="form-control">
                                                               <option selected>-2</option>
                                                               <option>1</option>
                                                               <option>2</option>
                                                               <option>3</option>
                                                               <option>4</option>
                                                            </select>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   </div>
                                                  
                                                   <div className="answer-value-score mb-4">
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row">
                                                         <div className="col-3 align-items-center">
                                                            <b className="fs-14">Answer Value 2:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <input type="text" placeholder="Vegetarian" className="form-control"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Value 2 Score:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <select className="form-control">
                                                               <option>1</option>
                                                               <option>2</option>
                                                               <option>3</option>
                                                               <option selected>4</option>
                                                            </select>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option text-right">
                                                      <spam> <b>Add Value (Values help with quiz results)</b></spam>
                                                      <img src="assets/img/add-filled.png" alt="quizzes" className="img-fluid"/>                              
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingOneans4">
                                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneans4" aria-expanded="true" aria-controls="collapseOneans4">
                                             Answer 4: No Meat
                                             </button>
                                          </h2>
                                          <div id="collapseOneans4" className="accordion-collapse collapse" aria-labelledby="headingOneans4" data-bs-parent="#accordionans">
                                             <div className="accordion-body">
                                                <div className="Quizzes-ans mb-3">
                                                   <div className="add-quizzes-ans">
                                                      <div className="row align-items-center">
                                                         <div className="col-md-2">
                                                            <img onClick={showModal1} src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                                                            <img src="assets/img/quizzes-edit.png" alt="quizzes" className="img-fluid"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                                                         </div>
                                                         <div className="col-md-10">
                                                            <div className="row align-items-center">
                                                               <div className="col-md-2">
                                                                  <b className="fs-14">Answer 4:</b> 
                                                               </div>
                                                               <div className="col-md-10">
                                                                  <input type="text" className="form-control" placeholder="No Meat"/>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="Quizzes-ans">
                                                   <div className="add-quizzes-ans-option mb-4">
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Radio Button:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex">
                                                            <select className="form-control">
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
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Answer Value 1:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <input type="text" placeholder="Meat" className="form-control"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row  align-items-center">
                                                         <div className="col-3 align-items-center">
                                                            <b className="fs-14">Value 1 Score:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <select className="form-control">
                                                               <option selected>-2</option>
                                                               <option>1</option>
                                                               <option>2</option>
                                                               <option>3</option>
                                                               <option>4</option>
                                                            </select>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   </div>
                                                  
                                                   <div className="answer-value-score mb-4">
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row">
                                                         <div className="col-3 align-items-center">
                                                            <b className="fs-14">Answer Value 2:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <input type="text" placeholder="Vegetarian" className="form-control"/>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option">
                                                      <div className="row align-items-center">
                                                         <div className="col-3">
                                                            <b className="fs-14">Value 2 Score:  </b>
                                                         </div>
                                                         <div className="col-9 d-flex align-items-center">
                                                            <select className="form-control">
                                                               <option>1</option>
                                                               <option>2</option>
                                                               <option>3</option>
                                                               <option selected>4</option>
                                                            </select>
                                                            <img onClick={showModal} src="assets/img/quizzes-delete.png" alt="delete" className="img-fluid" style={{width: "20px", height:"20px"}}/>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   </div>
                                                   <div className="add-quizzes-ans-option text-right">
                                                      <spam> <b>Add Value (Values help with quiz results)</b></spam>
                                                      <img src="assets/img/add-filled.png" alt="quizzes" className="img-fluid"/>                              
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>               
               <div className="row justify-content-center">
                  <div className="col-md-8">
                  <div className="appendme"></div>
                     <div className="add-quizzes mt-5">
                        <Link to="" className="appendbtn">
                         <img src="assets/img/add-filled.png" alt="add-filled" className="img-fluid"/>
                         <h5>New Questions </h5>
                        </Link>
                     </div>
                  </div>
               </div>
               {/* <div className="row justify-content-center">
                  <div className="col-md-4 mt-5">
                     <div className="add-quizzes">
                        <Link onClick={showModal3}>
                        <img src="assets/img/add-filled.png" alt="add-filled" className="img-fluid"/>
                        <h5>New Question</h5>
                        </Link>
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   </section>
</main>
<Modal show={isOpen} onHide={hideModal} centered>
   <Modal.Body className="p_50">
      <span onClick={hideModal} className="clos"> 
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-6">
            <div className="modal-popup p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <div className="col-lg-12 page-style2">
                        <h5><img src="assets/img/charm_crop.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> <u>crop img</u></h5>
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
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
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
                                 <img src="assets/img/active.png" alt="upload-csv" className="img-fluid"/>
                                 <h5>Active</h5>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="assets/img/inactive.png" alt="upload-csv"  style={{height: "50px"}} className="img-fluid"/>
                                 <h5>Inactive</h5>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="delete-box" onClick={showModal2}>
                                 <img src="assets/img/quizzes-delete.png" alt="upload-csv"  style={{height: "50px"}} className="img-fluid"/>
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
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
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
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
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
                              <img src="assets/img/close.png" alt="close"  style={{height: "50px"}} className="img-fluid"  onClick={hideModal3}/>                
                           </div>
                           <div className="col-md-3 mt-3 mb-3">
                              <img src="assets/img/check.png" alt="check"  style={{height: "50px"}} className="img-fluid"  onClick={hideModal3}/>  
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
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
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
                     <button type="submit" className="btn-web"><img src="assets/img/eye.png" alt="down"  style={{width: "20px"}} className="img-fluid"/> Preview Quiz</button>
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
                           <img src="assets/img/add-filled.png" alt="close"  style={{height: "40px"}} className="img-fluid"  onClick={hideModal3}/> </Link>
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
                           <img src="assets/img/quizzes-edit.png" alt="close"  style={{height: "30px"}} className="img-fluid"  onClick={hideModal3}/> </Link>
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
            <img src="assets/img/close.png" alt="close"  style={{height: "40px"}} className="img-fluid"  onClick={hideModal3}/>                
         </div>
         <div className="col-md-1 mt-3 mb-3">
            <img src="assets/img/check.png" alt="check"  style={{height: "40px"}} className="img-fluid"  onClick={hideModal3}/>  
         </div>
      </div>
   </Modal.Footer>
</Modal>
</>
)
}
export default Questions;