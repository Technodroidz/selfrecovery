import React from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import Header from '../front/Header';
import Footer from '../front/Footer';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
export const Account = () => {
const navigate = useNavigate(); 
const stripePromise = loadStripe('pk_test_51My7fMBbvNWoMfZW70dk1dNYpRQsv3ZpISfL6kvaG4w5wAcco6NfgzdNQqpR5sILt6tloxIEpymf9xhHu1EwEWSb004Gfcytih');   

function handleClick() {
  // navigate('/CheckoutForm');
   
 }

const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
// modal
const [isOpen1, setIsOpen1] = React.useState(false);
const showModal1 = () => { setIsOpen1(true);};
const hideModal1 = () => { setIsOpen1(false);};
return (
<>
<Header />
<main id="main">
   <section>
      <div className="container">
         <div className="row">
            <div className="col-lg-12 text-center page-style">
               <h2>Account Information</h2>
               <h4>Edit user access, information, and subscriptions.</h4>
            </div>
         </div>
         <div className="row justify-content-center mt-5">
            <div className="col-md-8 page-box">
               <from>
                  <div className="row">
                     <div className="col-md-6">
                        <div className="form-group mb-3 text-left m-l-r-15">
                           <Multiselect
                           placeholder="Account Selection"
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
                     <div className="col-md-6">
                        <div className="form-group mb-3 text-left m-l-r-15">
                           <Multiselect 
                           placeholder="Access Selection"
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
                     <div className="col-md-12 mt-4 text-center">
                        <button type="submit" className="btn-web">Change Access</button>
                     </div>
                  </div>
               </from>
            </div>
         </div>
         <div className="row justify-content-center mt-2">
            <div className="col-md-5 page-box text-center">
               <h5 className="text-center">Payment Info</h5>
               <img src="assets/img/payment-Info.png" alt="payment-Info"  style={{width: "150px"}} className="img-fluid"/>
            </div>
         </div>
         <div className="row justify-content-center mt-5">
            <div className="col-md-12 page-box">
               <from>
                  <div className="row justify-content-center">
                     <div className="col-md-6">
                        <div className="row justify-content-center">
                           <h4 className="text-center">Subscription: Tier 2</h4>
                           <img src="assets/img/subscription.png" alt="payment-Info"  style={{width: "100px"}} className="img-fluid"/>
                           <p className="text-center">Add-Ons: Statistics</p>
                           <p className=" mt-4">Regular Bill: $440 per mo. 07/01/22 <br></br>Bill: $293 prorated</p>
                           <div className="col-md-12">
                           <div className="form-group mb-3 text-left">
                           <select className="form-select" aria-label="Default select example">
                           <option selected>Select tier</option>
                           <option value="1">Tier 1</option>
                           <option value="2">Tier 2</option>
                           <option value="3">Tier 3</option>
                           </select>
                           </div>

                              <Link onClick={showModal}>
                              <h6 className="text-center">Learn about subscriptions</h6>
                              </Link>
                           </div>
                           <div className="col-md-12">
                           <div className="form-group mb-3 text-left">
                           <select className="form-select" aria-label="Default select example">
                           <option selected>Select add on</option>
                           <option value="100">$100</option>
                           <option value="200">$200</option>
                           <option value="300">$300</option>
                           </select>
                           </div>

                              <Link onClick={showModal1}>
                              <h6 className="text-center">Learn about add-ons</h6>
                              </Link>
                           </div>
                           <div className="col-md-12 mt-4 text-center">
                              <button type="button" id="paystripe" className="btn-web" onClick={handleClick}>Pay</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </from>
            </div>
         </div>
      </div>
   </section>
</main>
<Footer />
<Modal show={isOpen} onHide={hideModal} >
   <Modal.Body className="p_50">
      <span onClick={hideModal} className="clos"> 
        <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <h3>Subscriptions</h3>
                  </div>
               </div>
               <h4 className="mt-4">Subscription Cost Calculator</h4>
               <div className="mt-5">
                  <div className="row justify-content-center">
                     <div className="col-md-7">
                        <div className="row">
                           <div className="col-md-12">
                              <h5 className="Subscription-box">This month: $293 - 07/01/22 <br></br>Next month: 08/01/22 <br></br>Quizzes: 4 <br></br>Possibilities: 400</h5>
                           </div>
                           <div className="col-md-12 mt-3">
                              <div className="form-group mb-3 text-left">
                                 <Multiselect
                                 placeholder="Change Subscription"
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
                           <div className="col-md-12 mt-3">
                              <div className="form-group mb-3 text-left">
                                 <Multiselect
                                 placeholder="Change Subscription"
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
                        </div>
                     </div>
                     <p className="modal-p-style mt-3">Each Tier Costs $160 per month and comes with two Live Quizzes and 100 Live Possibilities. Here are three examples: Tier two comes with four live Quizzes, 200 Live Possibilities, and costs $320 per month ($160 x 2 ). Tier three comes with four Live Quizzes, 200 Live Possibilities, and costs $480 per month ($160 x 3 ). Subscriptions will be billed on the first of each month and will be prorated according to the day of month they are started or changed and remaining days in that month. </p>
                     <p className="modal-p-style">For example, a tier one subscription starting on June 15 will have 15 / 30 days before billing (one half the month), and the subscription would be billed to the customer on July 1 for $80 ($160 x 50% or one half of the month). Subscription Add-Ons will be billed the same way. Subscriptions will recur monthly pending any changes.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpen1} onHide={hideModal1} >
   <Modal.Body className="p_50">
      <span onClick={hideModal1} className="clos"> 
        <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <h3>Add-Ons</h3>
                  </div>
               </div>
               <h4 className="mt-4">Select the add-on you wish to learn about.</h4>
               <div className="mt-5">
                  <div className="row justify-content-center">
                     <div className="col-md-7">
                        <div className="row">                           
                           <div className="col-md-12 mt-3">
                              <div className="form-group mb-3 text-left">
                                 <Multiselect
                                 placeholder="Statistics"
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
                        </div>
                     </div>
                     <h4 className="mt-3">Statistics ($60 / mo)</h4>
                     <p>Access reports on top ranked values and possibilities. Use these as market research or to inform decisions.</p>
                     <div className="img-modal">
                     <img src="assets/img/Statistics.png" alt="statistics" />
                     </div>                     
                     <p className="modal-p-style mt-4"><u>Subscription changes</u> will be billed at the first of each month, and will be prorated according to the month they are changed. Subscriptions will recur monthly pending any changes. </p>
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
export default Account;