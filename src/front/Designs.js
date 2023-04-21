import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import Multiselect from 'multiselect-react-dropdown';
import Header from '../front/Header';
import Footer from '../front/Footer';
export const Designs = () => {
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
                  <h4 className="mt-4 mb-3"><b>Visualize & brand your recommendation quiz.</b></h4>
               </div>
               <div className="row justify-content-center mt-4">
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/bi_image.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Img</h4>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/preview.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
                        <h4>Preview</h4>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <div className="icon-box">
                        <img src="assets/img/style.png" alt="down"  style={{width: "35px"}} className="img-fluid"/>
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
                     <div className="Quizzes-q">
                        <div className="row">
                           <div className="col-2">
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/preview2.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/style2.png" alt="quizzes" className="img-fluid"/>
                           </div>
                           <div className="col-3">
                              <h5><b>Quiz  1 title:</b></h5>
                           </div>
                           <div className="col-7 d-flex">
                              <input type="text" placeholder="The best essential oil blend for me... " class="form-control"/>                                    
                           </div>
                        </div>
                        <div className="Quizzes-ans">
                           <div className="desgin-option">
                              <div className="row">
                                 <div className="col-3"><b>Description: </b></div>
                                 <div className="col-9">
                                    <input type="text" placeholder="With so many options, which one..." class="form-control"/>                                    
                                 </div>
                              </div>
                           </div>
                           <div className="desgin-option">
                              <div className="row">
                                 <div className="col-3"><b>Categories:  </b></div>
                                 <div className="col-9">
                                    <Multiselect
                                    placeholder="Essential OIls, Health & 2 more"
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
                           <div className="desgin-option">
                              <div className="row">
                                 <div className="col-3"><b>Title Font: </b></div>
                                 <div className="col-9">
                                    <Multiselect
                                    placeholder="Primary: Calibri, Secondary, Arial..."
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
                           <div className="desgin-option">
                              <div className="row">
                                 <div className="col-3"><b>Main Font: </b></div>
                                 <div className="col-9">
                                    <Multiselect
                                    placeholder="Primary: Calibri, Secondary, Arial..."
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
                     </div>
                     <div className="Quizzes-q">
                        <div className="row">
                           <div className="col-2">
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/preview2.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/style2.png" alt="quizzes" className="img-fluid"/>
                           </div>
                           <div className="col-3">
                              <h5><b>Quiz 2:</b></h5>
                           </div>
                           <div className="col-7 d-flex">
                              <h5> The Perfect Bike for Me</h5>
                           </div>
                        </div>
                     </div>
                     <div className="Quizzes-q">
                        <div className="row">
                           <div className="col-2">
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/preview2.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/style2.png" alt="quizzes" className="img-fluid"/>
                           </div>
                           <div className="col-3">
                              <h5><b>Quiz 2:</b></h5>
                           </div>
                           <div className="col-7 d-flex">
                              <h5> The Perfect Bike for Me</h5>
                           </div>
                        </div>
                     </div>
                     <div className="Quizzes-q">
                        <div className="row">
                           <div className="col-2">
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/preview2.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/style2.png" alt="quizzes" className="img-fluid"/>
                           </div>
                           <div className="col-3">
                              <h5><b>Quiz 2:</b></h5>
                           </div>
                           <div className="col-7 d-flex">
                              <h5> The Perfect Bike for Me</h5>
                           </div>
                        </div>
                     </div>
                     <div className="Quizzes-q">
                        <div className="row">
                           <div className="col-2">
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/preview2.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/style2.png" alt="quizzes" className="img-fluid"/>
                           </div>
                           <div className="col-3">
                              <h5><b>Quiz 2:</b></h5>
                           </div>
                           <div className="col-7 d-flex">
                              <h5> The Perfect Bike for Me</h5>
                           </div>
                        </div>
                     </div>
                     <div className="Quizzes-q">
                        <div className="row">
                           <div className="col-2">
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/preview2.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/style2.png" alt="quizzes" className="img-fluid"/>
                           </div>
                           <div className="col-3">
                              <h5><b>Quiz 2:</b></h5>
                           </div>
                           <div className="col-7 d-flex">
                              <h5> The Perfect Bike for Me</h5>
                           </div>
                        </div>
                     </div>
                     <div className="Quizzes-q">
                        <div className="row">
                           <div className="col-2">
                              <img onClick={showModal} src="assets/img/quizzes-img.png" alt="quizzes" className="img-fluid"/>
                              <img src="assets/img/preview2.png" alt="quizzes" className="img-fluid"/>
                              <img onClick={showModal} src="assets/img/style2.png" alt="quizzes" className="img-fluid"/>
                           </div>
                           <div className="col-3">
                              <h5><b>Quiz 2:</b></h5>
                           </div>
                           <div className="col-7 d-flex">
                              <h5> The Perfect Bike for Me</h5>
                           </div>
                        </div>
                     </div>
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
      <img src="assets/img/clos.png" alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-6">
            <div className="modal-popup p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <div className="col-lg-12 page-style2">
                        <h5><img src="assets/img/charm_crop.png" alt="down" style={{width: "20px"}} className="img-fluid"/> <u>crop img</u></h5>
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
export default Designs;