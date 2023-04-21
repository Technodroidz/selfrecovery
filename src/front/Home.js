import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import Header from '../front/Header';
import Footer from '../front/Footer';
export const Home = () => {
 
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
return (
<> 
<Header /> 
<main id="main">
   <section className="about">
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
               <div className="services-box">
                  <h2>Professional Services</h2>
                  <h4 onClick={showModal2}>API ACCESS </h4>
                  <img onClick={showModal} src="assets/img/professional-services.png" alt="logo" className="img-fluid"/>
                  <p className="mt-3">-We'll build your recommendation quiz.</p>
                  <p>-We'll implement it wherever you need.</p>
                  <p>-Custom solutions & consultations.</p>
               </div>
               <div className="services-box">
                  <h2>Need help? </h2>
                  <img onClick={showModal1} src="assets/img/need-help.png" alt="logo" className="img-fluid"/>
                  <p className="mt-3"><u>Access FAQs</u></p>
                  <p><u>Access tutorials</u></p>
                  <p>Submit questions & feedback</p>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
<Footer />
<Modal show={isOpen} onHide={hideModal} >
   <Modal.Body className="p_50">
      <span onClick={hideModal} className="clos"> <img src="assets/img/clos.png" alt="logo" className="img-fluid"/></span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <h3>Professional Services</h3>
                  </div>
               </div>
               <p>We can build your recommendation quiz, implement your quizzes wherever you need, and offer custom solutions and consultations.</p>
               <h4>What do you need?</h4>
               <form className="mt-5">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Phone"/>
                        </div>
                        <div className="form-group mb-3">
                           <textarea className="form-control" placeholder="Your message" rows="8"></textarea>
                        </div>
                     </div>
                     <div className="col-md-12 mt-4 ">
                        <button type="submit" className="btn-web">Submit</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen1} onHide={hideModal1} >
   <Modal.Body className="p_50">
      <span onClick={hideModal1} className="clos"> <img src="assets/img/clos.png" alt="logo" className="img-fluid"/></span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <h3>Need Help?</h3>
                  </div>
               </div>
               <p className="m-0"><u>Access FAQs</u></p>
               <p><u>Access Tutorial Video</u></p>
               <h4>Submit questions & feedback</h4>
               <form className="mt-5">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Phone"/>
                        </div>
                        <div className="form-group mb-3">
                           <textarea className="form-control" placeholder="Your message" rows="8"></textarea>
                        </div>
                     </div>
                     <div className="col-md-12 mt-4">
                        <button type="submit" className="btn-web">Submit</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen2} onHide={hideModal2} >
   <Modal.Body className="p_50">
      <span onClick={hideModal2} className="clos"> <img src="assets/img/clos.png" alt="logo" className="img-fluid"/></span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center mt-4 mb-4 p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100 mb-3 mt-4">
                     <h3>API ACCESS</h3>
                  </div>
               </div>
               <p>Update possibilities live via API push.</p>
               <p className="mt-3">Pull data, quiz results, and more via API pull.</p>
               <form className="mt-4">
                  <div className="row">
                     <div className="col-md-12 mt-2">
                        <button type="submit" className="btn-web">Access API</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
</>
)
}
export default Home;