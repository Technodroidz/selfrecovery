import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import Multiselect from 'multiselect-react-dropdown';
import Accordion from 'react-bootstrap/Accordion'
import Modal from "react-bootstrap/Modal";
import {useRef , useState } from "react";
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import { ReactSession } from 'react-client-session';
import swal from 'sweetalert';
import http from '../http'

export const Footer = () => {

   const headingRef = useRef(null);
   const[alluserquizzes, setUserQuizzes] = useState([]);
   let x = 0;

  const handleCopyClick = () => {
    const range = document.createRange();
    range.selectNode(headingRef.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      console.log('Text copied to clipboard!');
    } catch (error) {
      console.log('Unable to copy text:', error);
    }
  };

  
const [file, setFile] = useState();
function handleChange(e) {
console.log(e.target.files);
setFile(URL.createObjectURL(e.target.files[0]));
}
// modal
const [isOpen2, setIsOpen2] = React.useState(false);
const showModal2 = () => { setIsOpen2(true);};
const hideModal2 = () => { setIsOpen2(false);};
// modal
const [isOpenuploadcsv, setIsOpenuploadcsv] = React.useState(false);
const showModaluploadcsv = () => { setIsOpenuploadcsv(true);};
const hideModaluploadcsv = () => { setIsOpenuploadcsv(false);};
// modal
const [isOpenShare, setIsOpenShare] = React.useState(false);
const showModalShare = () => { setIsOpenShare(true);};
const hideModalShare = () => { setIsOpenShare(false);};

// modal Qrview
const [isOpenQrview, setIsOpenQrview] = React.useState(false);
const showModalQrview = () => { setIsOpenQrview(true);};
const hideModalQrview = () => { setIsOpenQrview(false);};
// modal
const [isOpenSetting, setIsOpenSetting] = React.useState(false);
const showModalSetting = () => { setIsOpenSetting(true);};
const hideModalSetting = () => { setIsOpenSetting(false);};

ReactSession.setStoreType("localStorage");
const sessioncheck = ReactSession.get("user");

const generateShareOptions = () => {
   const url = window.location.origin + 'ShareQuizes/9';
   console.log(url);
   if(sessioncheck == null){
      swal("Please Login");  
   }else{
      const user_id = sessioncheck.user_id;
      http.post('/fetch-user-quiz',{user_id:user_id})
      .then(res=>{
         try{
         // console.log(res);
            if(res.status === 200){
              setUserQuizzes(res.data.data);
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
}
console.log(alluserquizzes);

const handleSaveClick = () => {
   const qrCodeElement = document.getElementById('qrcode');
   html2canvas(qrCodeElement).then(canvas => {
     const dataUrl = canvas.toDataURL('image/png');
     const link = document.createElement('a');
     link.href = dataUrl;
     link.download = 'qrcode.png';
     link.click();
   });
 };


return (
<>
<div className="container mtb-4">
   <div className="row">
      <div className="col-md-8 col-6 mb-4">
         <Link to="/" className="back-button">
         <i className="fa fa-long-arrow-left"></i> &nbsp; Back</Link>
      </div>
      <div className="col-md-2 col-6">
         <div className="my-float-right">
            <Link onClick={() =>
            { showModalShare(); generateShareOptions(); }}  className="back-button">
            Share  &nbsp; <i className="fa fa-share-alt"></i></Link>
         </div>
      </div>
      <div className="col-md-2 col-12">
         <div className="my-float-right">
            <Link onClick={showModaluploadcsv}  className="back-button">
            Upload csv &nbsp; <img src={window.location.origin + '/assets/img/upload-csv.png'} alt="upload-csv" className="img-fluid"/> </Link>
         </div>
      </div>
   </div>
</div>
<footer>
   <div className="container py-4">
      <div className="row">
         <div className="col-md-8 col-12">
            <div className="footer-logo">
               <img src={window.location.origin + '/assets/img/logo.png'} alt="logo" className="img-fluid"/>
            </div>
         </div>
         <div className="col-md-2 col-6">
            <div className="my-float-right">
               <div className="footer-menu text-center text-md-right pt-3 pt-md-0">
                  <Link to="/">
                  <img src={window.location.origin + '/assets/img/footer-contact.png'} alt="contact" className="img-fluid"/> Contact Us</Link>
               </div>
            </div>
         </div>
         <div className="col-md-2 col-6">
            <div className="my-float-right">
               <div className="footer-menu text-center text-md-right pt-3 pt-md-0">
                  <Link to="/">
                  <img src={window.location.origin + '/assets/img/footer-consultation.png'} alt="consultation" className="img-fluid"/> Consultation</Link>
               </div>
            </div>
         </div>
      </div>
   </div>
</footer>
<Modal show={isOpen2} onHide={hideModal2} >
   <Modal.Body className="p_50">
      <span onClick={hideModal2} className="clos"> 
      <img src={window.location.origin + '/assets/img/clos.png'} alt="logo" className="img-fluid"/>
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
<Modal show={isOpenuploadcsv} onHide={hideModaluploadcsv} >
   <Modal.Body className="p_50">
      <span onClick={hideModaluploadcsv} className="clos"> 
      <img src={window.location.origin + '/assets/img/clos.png'} alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-9">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="d-flex">
                  <div className="w-100">
                     <div className="col-lg-12 text-center page-style2">
                        <h2>Upload CSV</h2>
                        <h5>Bulk upload info for Recommendation Quizzes.</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="row justify-content-center">
         <div className="col-md-5">
            <div className="modal-popup text-center">
               <label className="drag-area">
                  <input type="file" onChange={handleChange} />
                  <p>drag and drop file</p>
                  <div>
                     <img src={file ? file : window.location.origin + '/assets/img/drag-drop.png'} id='preview' alt='preview' />
                     {/* <img src={file} id='preview' alt='preview' /> */}
                  </div>
               </label>
               <p>Choose file <img src={window.location.origin + '/assets/img/choosefile.png'} alt="choose file" style={{width: "20px"}} className="img-fluid"/></p>
               <h5 className="mt-4 mb-3">Download Templates for Upload</h5>
               <div className="row mt-4">
                  <div className="col-md-6 text-right">
                     <h5>Instructions</h5>
                     <h5>Possibilities</h5>
                     <h5>Questions</h5>
                     <h5>Quizzes</h5>
                  </div>
                  <div className="col-md-6 text-left"><img src={window.location.origin + '/assets/img/eos-icons_csv-file.png'} alt="choose file" style={{width: "130px"}} className="img-fluid"/></div>
               </div>
               <label className="drag-area">
                  <p>Undo Last Upload</p>
                  <img onClick={showModaluploadcsv} src={window.location.origin + '/assets/img/bxs_share.png'} alt="choose file" className="img-fluid"/>
               </label>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
<Modal show={isOpenShare} onHide={hideModalShare} >
   <Modal.Body className="p_50">
      <span onClick={hideModalShare} className="clos"> 
      <img src={window.location.origin + '/assets/img/clos.png'} alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-6">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="col-lg-12 text-center page-style2">
                  <h2><b>Quiz Sharing</b></h2>
                  <h5>Share your Recommendation Quiz. Embed it on your website or app, create a link or QR code you can share with your audience, and manage sharing settings.</h5>
               </div>
            </div>
         </div>
      </div>
      <div className="row justify-content-center">
         <div className="col-md-8">
            <div className="row justify-content-center">
               <div className="col-md-2 col-6">
                  <div className="icon-box">
                     <img src={window.location.origin + '/assets/img/copy.png'} alt="down" style={{height: "50px"}} className="img-fluid"/>
                     <h4>Copy</h4>
                  </div>
               </div>
               <div className="col-md-2 col-6">
                  <div className="icon-box">
                     <img src={window.location.origin + '/assets/img/active-share.png'} alt="down" style={{height: "50px"}} className="img-fluid"/>
                     <h4>Active</h4>
                  </div>
               </div>
               <div className="col-md-2 col-6">
                  <div className="icon-box">
                     <img src={window.location.origin + '/assets/img/inactive-share.png'} alt="down" style={{height: "50px"}} className="img-fluid"/>
                     <h4>Inactive</h4>
                  </div>
               </div>
               <div className="col-md-2 col-6">
                  <div className="icon-box" onClick={showModalSetting}>
                     <img src={window.location.origin + '/assets/img/setting.png'} alt="down" style={{height: "50px"}} className="img-fluid"/>
                     <h4>Setting</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {alluserquizzes.map((allquiz,index)=>(
      <div className="row justify-content-center mt-4 mb-5">
         <div className="col-md-6">
            <div className="row justify-content-center">
               <div className="account-login-inner">
                  <Accordion>
                     <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Quiz {++x}:</b>&nbsp; {allquiz.quiz_name}.</Accordion.Header>
                        <Accordion.Body>
                           <div className="qus-tab py-3 px-4">
                              <div className="possibility-q">
                                 <div className="possibility-ans">
                                    <div className="possibility-option">
                                       <div className="row mt-4">
                                          <div className="col-md-4 col-12">
                                             <h4 className="font-size-19">Hyperlink:</h4>
                                          </div>
                                          <div className="col-md-7 col-10">
                                             <input type="text"  ref={headingRef} placeholder={window.location.origin + '/ShareQuizes/'+allquiz.id} className="form-control" readOnly/>
                                          </div>
                                          <div className="col-md-1 col-2">
                                             <img onClick={handleCopyClick} src={window.location.origin + '/assets/img/copy.png'} alt="down" className="img-fluid"/>
                                          
                                          </div>
                                       </div>
                                       <div className="row mt-4">
                                          <div className="col-md-4 col-4">
                                             <h4 className="font-size-19">QR Code:</h4>
                                          </div>
                                          <div className="col-md-3 col-2">
                                             {/* <img src={window.location.origin + '/assets/img/cil_qr-code.png'} alt="down" style={{width: "100px"}} className="img-fluid"/> */}
                                             <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(window.location.origin + '/ShareQuizes/'+allquiz.id)}&amp;size=100x100`} alt="QR Code" style={{ width: "100px" }} className="img-fluid" id="qrcode"/>
                                          </div>
                                          <div className="col-md-1 col-2">
                                          <span onClick={() => { showModalQrview(); }} > <img src={window.location.origin + '/assets/img/active-share.png'} alt="down" className="img-fluid"/></span>
                                          </div>
                                          <div className="col-md-1 col-2">
                                             <img src={window.location.origin + '/assets/img/copy.png'} alt="down" className="img-fluid"/>
                                            
                                          </div>
                                          <div className="col-md-1 col-2">
                                             <img src={window.location.origin + '/assets/img/save.png'} alt="down" className="img-fluid" onClick={handleSaveClick}/>
                                          </div>
                                       </div>
                                       <div className="row mt-4">
                                          <div className="col-md-4 col-12">
                                             <h4 className="font-size-19">JS Snippet:</h4>
                                          </div>
                                          <div className="col-md-7 col-10">
                                          <input type="text" value={"var link ="+ window.location.origin + "'/ShareQuizes/'"+allquiz.id} placeholder="<js> //code snippet embed to quiz </js>" className="form-control" readOnly/>
                                          </div>

                                          <div className="col-md-1 col-2">
                                             <img src={window.location.origin + '/assets/img/copy.png'} alt="down" className="img-fluid"/>
                                          </div>
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
         </div>  
      </div>
       ))} 
   </Modal.Body>
</Modal>
<Modal size="sm" aria-labelledby="contained-modal-title-vcenter"
      centered show={isOpenQrview} onHide={hideModalQrview} >
   <Modal.Body className="p_50">     
      <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(window.location.origin + '/ShareQuizes/9')}&amp;size=100x100`} alt="QR Code" style={{ width: "100%" }} className="img-fluid" />
   </Modal.Body>
</Modal>

<Modal show={isOpenSetting} onHide={hideModalSetting} >
   <Modal.Body className="p_50">
      <span onClick={hideModalSetting} className="clos"> 
      <img src={window.location.origin + '/assets/img/clos.png'} alt="logo" className="img-fluid"/>
      </span>
      <div className="row justify-content-center">
         <div className="col-md-6">
            <div className="modal-popup text-center p-4 p-md-5">
               <div className="col-lg-12 text-center page-style2 mt-4 mb-4">
                  <h2><b>Subscription limit</b></h2>
                  <h5>Your current subscription tier won’t allow for that many active quizzes.</h5>
               </div>
               <div className="col-md-12 mt-4 mt-3 mb-3">
                  <button type="submit" className="btn-web" onClick={hideModal2} >Subscription page</button>                  
               </div>
               <div className="col-md-12 mt-3 mb-3">
                  <button type="submit" className="btn-web" onClick={hideModal2} >Okay</button>
               </div>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
</>
);
};
export default Footer;