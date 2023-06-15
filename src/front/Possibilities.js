import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import Accordion from 'react-bootstrap/Accordion';
import Header from '../front/Header';
import Footer from '../front/Footer';
import PossibilitiesComponent from "./PossibilitiesComponent";
import { Form, Formik, useFormik } from "formik";
import { QuestionValidationSchema } from "../utils/validations/QuestionValidationSchema";
import swal from 'sweetalert';
import http from '../http'

export const Possibilities = () => {
// modal
const [isOpen3, setIsOpen3] = React.useState(false);
const showModal3 = () => { setIsOpen3(true);};
const hideModal3 = () => { setIsOpen3(false);};


const [numPossibilities, setNumPossibilities] = useState(1);

const navigate = useNavigate();
const {id} = useParams(); 
const submitquestion = (values) => {
 const dataArray = values.Possibilities;
console.log(dataArray);
 
} 


return (
<>
<Header />
<main id="main">
   <section>
      <div className="container">
         <div className="row justify-content-center mt-5">
            <div className="col-md-8 page-box">
               <div className="col-lg-12 text-center page-style2">
                  <h4>Possibilities </h4>
                  <h4 className="mt-4 mb-3"><b>Add possible results and their values.</b></h4>
               </div>
               <div className="row justify-content-center mt-4">
                  <div className="col-md-10">
                     <div className="icon-box">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search Possibilities " aria-label="Search"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row justify-content-center mt-3">
              <div className="col-md-12 page-box">
                <div className="row justify-content-center">
                  <div className="col-md-8 mt-4">
                    <Formik
                      initialValues={{
                        Possibilities:[
                          {
                           Possibilitytitle : "",
                           Description: "",                           
                           WebLink: "",
                           AssignedQuizzes: "",
                           ActiveOrInactive: "",
                           options: [{
                              Value : "",
                              score: "",
                            }],
                          },
                        ]
                      }}
                      onSubmit={submitquestion}
                      validationSchema={QuestionValidationSchema}
                    >
                      {({
                        values,
                        setFieldValue,
                        isSubmitting,
                        dirty,
                        isValid
                      }) => {
                        return (
                        <Form>
                    <div>
                      {
                        Array.from({length:numPossibilities}).map((_,index) => {
                          return (
                            <>
                            <PossibilitiesComponent
                              key={index}
                              index={index}
                              values = {values}
                              setFieldValue = {setFieldValue}
                            />

                            {
                              index !== 0 && (
                                <div className="row justify-content-center mt-4">
                                  <div className="col-md-6 text-center">
                                    <button
                                      type="submit"
                                      onClick={() => {
                                        setNumPossibilities(numPossibilities - 1);
                                        values.Possibilities.splice(index, 1);
                                        setFieldValue("Possibilities", values.Possibilities);
                                      }
                                    }
                                      className="btn-web">
                                      <img
                                        src="../assets/img/fluent_delete-24-filled.png"
                                        alt="down"
                                        style={{ width: "20px" }}
                                        className="img-fluid"
                                      />{" "}
                                      Delete Question
                                    </button>
                                  </div>
                                </div>
                              )
                            }
                            </>
                            
                          );
                        })
                      }
                      <div className="mt-5 text-center">
                        <button 
                        className="btn btn-success" 
                        type="submit"
                        disabled={isSubmitting || !dirty || !isValid}
                        >Save Questions</button>
                      </div>
                      
                      <div className="add-quizzes mt-5">
                        <Link
                          to=""
                          className="myButton appendbtn"
                          onClick={() =>{
                            setNumPossibilities(numPossibilities + 1);
                            setFieldValue("Possibilities", [
                              ...values.Possibilities,
                              {
                                 Possibilitytitle : "",
                                 Description: "",                           
                                 WebLink: "",
                                 AssignedQuizzes: "",
                                 ActiveOrInactive: "",
                                 options: [{
                                    title: "",
                                    score: "",
                                  }],
                                },
                            ]);
                          }}
                        >
                          <img
                            src="../assets/img/add-filled.png"
                            alt="add-filled"
                            className="img-fluid"
                          />
                          <h5>New Possibility </h5>
                        </Link>
                      </div>
                    </div>
                    </Form>
                      )}}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
            
      </div>
   </section>
   
</main>
<Footer />
<Modal show={isOpen3} onHide={hideModal3} >
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
                              <select class="form-select" aria-label="Default select example">
                                 <option selected>Possibility Name</option>
                                 <option value="1">Possibility Name</option>
                                 <option value="2">Possibility Name</option>
                                 <option value="3">Possibility Name</option>
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
</>
)
}
export default Possibilities;