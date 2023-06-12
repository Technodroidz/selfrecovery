import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import Accordion from 'react-bootstrap/Accordion';
import Header from '../front/Header';
import Footer from '../front/Footer';
import PossibilitiesComponent from "./PossibilitiesComponent";

export const Possibilities = () => {
// modal
const [isOpen3, setIsOpen3] = React.useState(false);
const showModal3 = () => { setIsOpen3(true);};
const hideModal3 = () => { setIsOpen3(false);};
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
                     <Accordion>
                        <Accordion.Item eventKey="0">
                           <Accordion.Header><b>Possibility 1:</b>&nbsp; Alfredo Chicken Pizza </Accordion.Header>
                           <Accordion.Body>
                              <div className="Quizzes-q">
                                 <div className="Quizzes-ans">
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-3">
                                             <h6><b>Possibility:</b> </h6>
                                          </div>
                                          <div className="col-9">
                                             <input type='text' class="form-control" placeholder="Alfredo Chicken Pizza "/>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-3">
                                             <h6><b>Description:</b> </h6>
                                          </div>
                                          <div className="col-9">
                                             <textarea class="form-control" placeholder="Your choice of crust with alfredo sauce, bacon, seasoned chicken…"  rows="3"></textarea>                                     
                                          </div>
                                       </div>
                                    </div>
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-3">
                                             <h6><b>Web Link:  </b></h6>
                                          </div>
                                          <div className="col-9">
                                             <input type="text" placeholder="https://drive.google.com/file/d/14fhi…" class="form-control"/>                                    
                                          </div>
                                       </div>
                                    </div>
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-3">
                                             <h6><b>Value 1: </b> </h6>
                                          </div>
                                          <div className="col-5">
                                             <input type="text" placeholder="Ranch" class="form-control"/>                                    
                                          </div>
                                          <div className="col-1 text-center">
                                             <h6><b>Score:</b> </h6>
                                          </div>
                                          <div className="col-2">
                                             <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                             </select>
                                          </div>
                                          <div className="col-1">
                                             <img src="assets/img/quizzes-delete.png" alt="quizzes" className="img-fluid"/>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-12 text-right">
                                             <h6> <img src="assets/img/add-filled.png" alt="quizzes" className="img-fluid"/><b>New Value</b> </h6>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-3">
                                             <h6><b>Assigned Quizzes:</b> </h6>
                                          </div>
                                          <div className="col-9">
                                             <select class="form-control">
                                                <option>Alfredo Chicken Pizza</option>
                                                <option>How much meat do you like on your…</option>
                                                <option>Pick your favorite pizza sauces?</option>
                                                <option>How important is bacon on your…</option>
                                                <option>How important is cheese on your…</option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-3">
                                             <h6><b>Active or Inactive:</b></h6>
                                          </div>
                                          <div className="col-9">
                                             <select class="form-control">
                                                <option>Active </option>
                                                <option>Inactive</option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </Accordion.Body>
                        </Accordion.Item>
                     </Accordion>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-md-4 mt-5">
                     <div className="add-quizzes">
                        <Link onClick={showModal3}>
                        <img src="assets/img/add-filled.png" alt="add-filled" className="img-fluid"/>
                        <h5>New Possibility</h5>
                        </Link>
                     </div>
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