import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Multiselect from "multiselect-react-dropdown";
import QuestionComponent from "./QuestionComponent";
import Header from '../front/Header';
import Footer from '../front/Footer';
import { Button } from "react-bootstrap";
import { Form, Formik, useFormik } from "formik";
import { QuestionValidationSchema } from "../utils/validations/QuestionValidationSchema";
import swal from 'sweetalert';
import http from '../http'


export const Questions = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  // modal
  const [isOpen1, setIsOpen1] = React.useState(false);
  const showModal1 = () => {
    setIsOpen1(true);
  };
  const hideModal1 = () => {
    setIsOpen1(false);
  };
  // modal
  const [isOpen2, setIsOpen2] = React.useState(false);
  const showModal2 = () => {
    setIsOpen2(true);
  };
  const hideModal2 = () => {
    setIsOpen2(false);
  };
  // modal
  const [isOpen3, setIsOpen3] = React.useState(false);
  const showModal3 = () => {
    setIsOpen3(true);
  };
  const hideModal3 = () => {
    setIsOpen3(false);
  };
  // modal
  const [isOpen4, setIsOpen4] = React.useState(false);
  const showModal4 = () => {
    setIsOpen4(true);
  };
  const hideModal4 = () => {
    setIsOpen4(false);
  };
  // Declare a new state variable, which we'll call "form fields"

  const [numAnswers, setNumAnswers] = useState(1);

  const navigate = useNavigate();
  const {id} = useParams(); 
  const submitquestion = (values) => {
   const dataArray = values.answers;
  // console.log(dataArray);
   http.post('/add-questions',{data:dataArray, quiz_id:id})
    .then(res=>{
      try{
        //  console.log(res);
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
    
<Header />
      <main id="main">
        <section>
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-md-8 page-box">
                <div className="col-lg-12 text-center page-style2">
                  <h4>
                    <b>Quiz 1:</b> The best essential oil blend for me today.
                  </h4>
                  <h4 className="mt-4 mb-3">
                    Add/edit questions and answers for your quiz. Assign values
                    to each possible answer.
                  </h4>
                </div>
                <div className="row justify-content-center mt-4">
                  <div className="col-md-2 col-3">
                    <div className="icon-box">
                      <img
                        src="../assets/img/carbon_add-filled.png"
                        alt="down"
                        style={{ width: "35px" }}
                        className="img-fluid"
                      />
                      <h4>Add</h4>
                    </div>
                  </div>
                  <div className="col-md-2 col-3">
                    <div className="icon-box">
                      <img
                        src="../assets/img/fluent_delete-24-filled.png"
                        alt="down"
                        style={{ width: "35px" }}
                        className="img-fluid"
                      />
                      <h4>Delete</h4>
                    </div>
                  </div>
                  <div className="col-md-2 col-3">
                    <div className="icon-box">
                      <img
                        src="../assets/img/ci_edit.png"
                        alt="down"
                        style={{ width: "35px" }}
                        className="img-fluid"
                      />
                      <h4>Edit</h4>
                    </div>
                  </div>
                  <div className="col-md-2 col-3">
                    <div className="icon-box">
                      <img
                        src="../assets/img/bi_image.png"
                        alt="down"
                        style={{ width: "35px" }}
                        className="img-fluid"
                      />
                      <h4>Img</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-4 text-center">
                    <button
                      type="submit"
                      onClick={showModal4}
                      className="btn-web"
                    >
                      <img
                        src="../assets/img/connection-box.png"
                        alt="down"
                        style={{ width: "20px" }}
                        className="img-fluid"
                      />{" "}
                      Dependencies
                    </button>
                  </div>
                  <div className="col-md-6 mt-4 text-center">
                    <button type="submit" className="btn-web">
                      <img
                        src="../assets/img/eye.png"
                        alt="down"
                        style={{ width: "20px" }}
                        className="img-fluid"
                      />{" "}
                      Preview Quiz
                    </button>
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
                        answers:[
                          {
                            title: "",
                            sampleAnswer: "",
                            type: "",
                            options: [{
                              title: "",
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
                        Array.from({length:numAnswers}).map((_,index) => {
                          return (
                            <>
                            <QuestionComponent
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
                                        setNumAnswers(numAnswers - 1);
                                        values.answers.splice(index, 1);
                                        setFieldValue("answers", values.answers);
                                      }
                                    }
                                      className="btn-web"
                                    >
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
                            setNumAnswers(numAnswers + 1);
                            setFieldValue("answers", [
                              ...values.answers,
                              {
                                title: "",
                                sampleAnswer: "",
                                type: "",
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
                          <h5>New Questions </h5>
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
      <Modal show={isOpen} onHide={hideModal} centered>
        <Modal.Body className="p_50">
          <span onClick={hideModal} className="clos">
            <img src="../assets/img/clos.png" alt="logo" className="img-fluid" />
          </span>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="modal-popup p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <div className="col-lg-12 page-style2">
                      <h5>
                        <img
                          src="../assets/img/charm_crop.png"
                          alt="down"
                          style={{ width: "20px" }}
                          className="img-fluid"
                        />{" "}
                        <u>crop img</u>
                      </h5>
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
            <img src="../assets/img/clos.png" alt="logo" className="img-fluid" />
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
                            <img
                              src="../assets/img/active.png"
                              alt="upload-csv"
                              className="img-fluid"
                            />
                            <h5>Active</h5>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="delete-box" onClick={showModal2}>
                            <img
                              src="../assets/img/inactive.png"
                              alt="upload-csv"
                              style={{ height: "50px" }}
                              className="img-fluid"
                            />
                            <h5>Inactive</h5>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="delete-box" onClick={showModal2}>
                            <img
                              src="../assets/img/quizzes-delete.png"
                              alt="upload-csv"
                              style={{ height: "50px" }}
                              className="img-fluid"
                            />
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
            <img src="../assets/img/clos.png" alt="logo" className="img-fluid" />
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
                          <button
                            type="submit"
                            className="btn-web"
                            onClick={hideModal2}
                          >
                            Yes
                          </button>
                        </div>
                        <div className="col-md-6 mt-3 mb-3">
                          <button
                            type="submit"
                            className="btn-web"
                            onClick={hideModal2}
                          >
                            No
                          </button>
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
            <img src="../assets/img/clos.png" alt="logo" className="img-fluid" />
          </span>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="modal-popup text-center p-4 p-md-5">
                <div className="mt-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10">
                      <div className="row justify-content-center">
                        <div className="col-md-7 mb-5">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Quiz Name</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-3 mt-3 mb-3">
                          <img
                            src="../assets/img/close.png"
                            alt="close"
                            style={{ height: "50px" }}
                            className="img-fluid"
                            onClick={hideModal3}
                          />
                        </div>
                        <div className="col-md-3 mt-3 mb-3">
                          <img
                            src="../assets/img/check.png"
                            alt="check"
                            style={{ height: "50px" }}
                            className="img-fluid"
                            onClick={hideModal3}
                          />
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
      <Modal show={isOpen4} onHide={hideModal4}>
        <Modal.Body className="p_50">
          <span onClick={hideModal4} className="clos">
            <img src="../assets/img/clos.png" alt="logo" className="img-fluid" />
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
                    <button type="submit" className="btn-web">
                      <img
                        src="../assets/img/eye.png"
                        alt="down"
                        style={{ width: "20px" }}
                        className="img-fluid"
                      />{" "}
                      Preview Quiz
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <div className="qus-box">
                      <h4 className="mb-4">Add New Dependency</h4>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label mb-3 text-right">
                          show question
                        </label>
                        <div className="col-sm-9">
                          <Multiselect
                            placeholder="Select Questions"
                            displayValue="key"
                            groupBy="cat"
                            onKeyPressFn={function noRefCheck() {}}
                            onRemove={function noRefCheck() {}}
                            onSearch={function noRefCheck() {}}
                            onSelect={function noRefCheck() {}}
                            options={[
                              {
                                cat: "Create New",
                                key: "Option 1",
                              },
                              {
                                cat: "Create New",
                                key: "Option 2",
                              },
                              {
                                cat: "Create New",
                                key: "Option 3",
                              },
                            ]}
                            showCheckbox
                            showArrow
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label mb-3 text-right">
                          If below logic is
                        </label>
                        <div className="col-sm-9">
                          <Multiselect
                            placeholder="Triggered By "
                            displayValue="key"
                            groupBy="cat"
                            onKeyPressFn={function noRefCheck() {}}
                            onRemove={function noRefCheck() {}}
                            onSearch={function noRefCheck() {}}
                            onSelect={function noRefCheck() {}}
                            options={[
                              {
                                cat: "Create New",
                                key: "Option 1",
                              },
                              {
                                cat: "Create New",
                                key: "Option 2",
                              },
                              {
                                cat: "Create New",
                                key: "Option 3",
                              },
                            ]}
                            showCheckbox
                            showArrow
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label mb-3 text-right">
                          question
                        </label>
                        <div className="col-sm-9">
                          <Multiselect
                            placeholder="Trigger Question"
                            displayValue="key"
                            groupBy="cat"
                            onKeyPressFn={function noRefCheck() {}}
                            onRemove={function noRefCheck() {}}
                            onSearch={function noRefCheck() {}}
                            onSelect={function noRefCheck() {}}
                            options={[
                              {
                                cat: "Create New",
                                key: "Option 1",
                              },
                              {
                                cat: "Create New",
                                key: "Option 2",
                              },
                              {
                                cat: "Create New",
                                key: "Option 3",
                              },
                            ]}
                            showCheckbox
                            showArrow
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label mb-3 text-right">
                          answered
                        </label>
                        <div className="col-sm-9">
                          <Multiselect
                            placeholder="Trigger Responses"
                            displayValue="key"
                            groupBy="cat"
                            onKeyPressFn={function noRefCheck() {}}
                            onRemove={function noRefCheck() {}}
                            onSearch={function noRefCheck() {}}
                            onSelect={function noRefCheck() {}}
                            options={[
                              {
                                cat: "Create New",
                                key: "Option 1",
                              },
                              {
                                cat: "Create New",
                                key: "Option 2",
                              },
                              {
                                cat: "Create New",
                                key: "Option 3",
                              },
                            ]}
                            showCheckbox
                            showArrow
                          />
                        </div>
                      </div>
                      <div className="qus-icon">
                        <Link scr="/">
                          <img
                            src="../assets/img/add-filled.png"
                            alt="close"
                            style={{ height: "40px" }}
                            className="img-fluid"
                            onClick={hideModal3}
                          />{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="qus-box">
                      <h4 className="mb-4">Dependency 3</h4>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label mb-3 text-right">
                          show question
                        </label>
                        <div className="col-sm-9">
                          <Multiselect
                            placeholder="Question 2: Pick…"
                            displayValue="key"
                            groupBy="cat"
                            onKeyPressFn={function noRefCheck() {}}
                            onRemove={function noRefCheck() {}}
                            onSearch={function noRefCheck() {}}
                            onSelect={function noRefCheck() {}}
                            options={[
                              {
                                cat: "Create New",
                                key: "Option 1",
                              },
                              {
                                cat: "Create New",
                                key: "Option 2",
                              },
                              {
                                cat: "Create New",
                                key: "Option 3",
                              },
                            ]}
                            showCheckbox
                            showArrow
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label mb-3 text-right">
                          when true / false
                        </label>
                        <div className="col-sm-9">
                          <Multiselect
                            placeholder="True"
                            displayValue="key"
                            groupBy="cat"
                            onKeyPressFn={function noRefCheck() {}}
                            onRemove={function noRefCheck() {}}
                            onSearch={function noRefCheck() {}}
                            onSelect={function noRefCheck() {}}
                            options={[
                              {
                                cat: "Create New",
                                key: "Option 1",
                              },
                              {
                                cat: "Create New",
                                key: "Option 2",
                              },
                              {
                                cat: "Create New",
                                key: "Option 3",
                              },
                            ]}
                            showCheckbox
                            showArrow
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label mb-3 text-right">
                          if question is
                        </label>
                        <div className="col-sm-9">
                          <Multiselect
                            placeholder="Question 1: How…"
                            displayValue="key"
                            groupBy="cat"
                            onKeyPressFn={function noRefCheck() {}}
                            onRemove={function noRefCheck() {}}
                            onSearch={function noRefCheck() {}}
                            onSelect={function noRefCheck() {}}
                            options={[
                              {
                                cat: "Create New",
                                key: "Option 1",
                              },
                              {
                                cat: "Create New",
                                key: "Option 2",
                              },
                              {
                                cat: "Create New",
                                key: "Option 3",
                              },
                            ]}
                            showCheckbox
                            showArrow
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label mb-3 text-right">
                          if answer is
                        </label>
                        <div className="col-sm-9">
                          <Multiselect
                            placeholder="Unsure"
                            displayValue="key"
                            groupBy="cat"
                            onKeyPressFn={function noRefCheck() {}}
                            onRemove={function noRefCheck() {}}
                            onSearch={function noRefCheck() {}}
                            onSelect={function noRefCheck() {}}
                            options={[
                              {
                                cat: "Create New",
                                key: "Option 1",
                              },
                              {
                                cat: "Create New",
                                key: "Option 2",
                              },
                              {
                                cat: "Create New",
                                key: "Option 3",
                              },
                            ]}
                            showCheckbox
                            showArrow
                          />
                        </div>
                      </div>
                      <div className="qus-icon">
                        <Link scr="/">
                          <img
                            src="../assets/img/quizzes-edit.png"
                            alt="close"
                            style={{ height: "30px" }}
                            className="img-fluid"
                            onClick={hideModal3}
                          />{" "}
                        </Link>
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
              <img
                src="../assets/img/close.png"
                alt="close"
                style={{ height: "40px" }}
                className="img-fluid"
                onClick={hideModal3}
              />
            </div>
            <div className="col-md-1 mt-3 mb-3">
              <img
                src="../assets/img/check.png"
                alt="check"
                style={{ height: "40px" }}
                className="img-fluid"
                onClick={hideModal3}
              />
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Questions;
