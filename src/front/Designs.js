import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../front/Header';
import Footer from '../front/Footer';
import swal from 'sweetalert';
import { ReactSession } from 'react-client-session';
import http from '../http';

export const Designs = () => {
  const navigate = useNavigate();

  const [quiz_id, setQuizId] = useState();
  const [alluserquizzes, setUserQuizzes] = useState([]);

  ReactSession.setStoreType('localStorage');
  const sessioncheck = ReactSession.get('user');
  let x = 0;
  useEffect(() => {
    fetchAllUserQuizzes();
  }, []);

  const fetchAllUserQuizzes = () => {
    if (sessioncheck == null) {
      swal('Please Login');
      navigate('/');
    } else {
      const user_id = sessioncheck.user_id;
      http
        .post('/fetch-user-quiz', { user_id: user_id })
        .then((res) => {
          try {
            if (res.status === 200) {
              setUserQuizzes(res.data.data);
            } else {
              swal('Something Wrong');
            }
          } catch (e) {
            swal('Something Wrong');
          }
        })
        .catch((e) => {
          swal('Something Wrong');
        });
    }
  };

  //console.log(alluserquizzes);

  const [formData, setFormData] = useState({
    quizid: '',
    titlefont: '',
    mainfont: '',
  });
 // console.log(formData);

  const handleChange = (event, quizId) => {
   setFormData((prevState) => ({
     ...prevState,
     quizid: quizId,
     [event.target.name]: event.target.value,
   }));
 };
 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const user_id = sessioncheck.user_id;
    http
      .post('/submit-quiz-design', { user_id: user_id, dataarray: formData })
      .then((res) => {
        try {
          if (res.status === 200) {
            swal({ 
               title: "Success!",
               text: res.data.message,
               type: "success"}).then(okay => {
               if (okay) {
                window.location.reload();
               }
               });
              navigate('/Designs');
          } else {
            swal('Something Wrong');
          }
        } catch (e) {
          swal('Something Wrong');
        }
      })
      .catch((e) => {
        swal('Something Wrong');
      });
  };

  return (
    <>
      <Header />
      <main id="main">
        <section>
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-md-8 page-box">
                <div className="col-lg-12 text-center page-style2">
                  <h4>Designs: Stylize Your Quiz</h4>
                  <h4 className="mt-4 mb-3">
                    <b>Visualize & brand your recommendation quiz.</b>
                  </h4>
                </div>
                <div className="row justify-content-center mt-4">
                  <div className="col-md-2">
                    <div className="icon-box">
                      <img
                        src="assets/img/bi_image.png"
                        alt="down"
                        style={{ width: '35px' }}
                        className="img-fluid"
                      />
                      <h4>Img</h4>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="icon-box">
                      <img
                        src="assets/img/preview.png"
                        alt="down"
                        style={{ width: '35px' }}
                        className="img-fluid"
                      />
                      <h4>Preview</h4>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="icon-box">
                      <img
                        src="assets/img/style.png"
                        alt="down"
                        style={{ width: '35px' }}
                        className="img-fluid"
                      />
                      <h4>Style</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-md-12 page-box">
                <div className="row justify-content-center">
                  <div className="col-md-8 mt-4">
                    {alluserquizzes.map((allquiz, index) => (
                      <Accordion key={allquiz.id}>
                        <Accordion.Item eventKey={index}>
                          <Accordion.Header>
                            <b>Quiz {++x} Title:</b>&nbsp; {allquiz.quiz_name}.
                          </Accordion.Header>
                          <Accordion.Body>
                            <form onSubmit={handleSubmit}>
                              <div className="Quizzes-q">
                                <div className="Quizzes-ans">
                                  <div
                                    className="desgin-option"
                                    style={{ display: 'none' }}
                                  >
                                    <div className="row">
                                      <div className="col-3">
                                        <b>Quiz {++x} title:</b>
                                      </div>
                                      <div className="col-9">
                                        <input
                                          type="text"
                                          name="quizid"
                                          value={allquiz.id}
                                          onChange={(e) =>
                                            setQuizId(e.target.value)
                                          }
                                          className="form-control"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="desgin-option">
                                    <div className="row">
                                      <div className="col-3">
                                        <b>Title Font: </b>
                                      </div>
                                      <div className="col-9">
                                        <select
                                          onChange={(event) =>
                                            handleChange(event, allquiz.id)
                                          }
                                          name="titlefont"
                                          className="form-control"
                                        >
                                          <option>Select Title Font</option>
                                          <option value="Serif">Serif</option>
                                          <option value="Sans-serif">
                                            Sans-serif
                                          </option>
                                          <option value="Cursive">
                                            Cursive
                                          </option>
                                          <option value="Fantasy">
                                            Fantasy
                                          </option>
                                          <option value="Monospace">
                                            Monospace
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="desgin-option">
                                    <div className="row">
                                      <div className="col-3">
                                        <b>Main Font: </b>
                                      </div>
                                      <div className="col-9">
                                        <select
                                          name="mainfont"
                                          onChange={(event) =>
                                            handleChange(event, allquiz.id)
                                          }
                                          className="form-control"
                                        >
                                          <option>Select Main Font</option>
                                          <option value="Serif">Serif</option>
                                          <option value="Sans-serif">
                                            Sans-serif
                                          </option>
                                          <option value="Cursive">
                                            Cursive
                                          </option>
                                          <option value="Fantasy">
                                            Fantasy
                                          </option>
                                          <option value="Monospace">
                                            Monospace
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="desgin-option">
                                    <div className="row">
                                      <div className="col-12 text-center">
                                        <button
                                          type="submit"
                                          className="btn btn-success btn-sm"
                                        >
                                          Save & Submit
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Designs;
