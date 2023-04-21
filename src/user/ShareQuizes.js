import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
import { Link } from 'react-router-dom';
export const ShareQuizes = () => {
$(document).ready(function(){
var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;
setProgressBar(current);
$(".next").click(function(){
current_fs = $(this).parent();
next_fs = $(this).parent().next();
//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;
current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});
$(".previous").click(function(){
current_fs = $(this).parent();
previous_fs = $(this).parent().prev();
//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
//show the previous fieldset
previous_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;
current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});
function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}
$(".submit").click(function(){
return false;
})
});
return (
<>
<div className="container mt-4">
   <div className="row justify-content-center">
      <div className="col-md-8 text-center">
         <img src="assets/img/logo.png" alt="logo" width="10%" className="img-fluid"/>
      </div>
   </div>
</div>
<main id="main">
   <section>
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-md-8 page-box">
               <div className="col-lg-12 text-center page-style2">
                  <h4><b>Quiz Name:</b> The best essential oil blend for me today.</h4>
                  {/* <h4 className="mt-4 mb-3">Add/edit questions and answers for your quiz. Assign values to each possible answer.</h4> */}
               </div>
               <div className="container-fluid">
                  <div className="row justify-content-center">
                     <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                           <form id="msform">
                              <ul id="progressbar">
                                 <li className="active" id="account"><strong></strong></li>
                                 <li id="personal1"><strong></strong></li>
                                 <li id="personal"><strong></strong></li>
                                 <li id="payment"><strong></strong></li>
                                 <li id="confirm"><strong></strong></li>
                              </ul>
                              <div className="progress">
                                 <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <br/>
                              <fieldset>
                                 <div className="form-card">
                                    <div className="row">
                                       <div className="col-12 mb-3">
                                          <h2 className="fs-title text-center"><b>Before start the quiz , please enter your info.</b></h2>
                                       </div>
                                       <div className="col-6">
                                          <div className="form-group">
                                            <label for="exampleFormControlSelect1">Enter Your Name</label>
                                            <input type="text" className="form-control" style={{width:"100%"}} placeholder="Name" required/>
                                          </div>
                                       </div>
                                       <div className="col-6">
                                          <div className="form-group">
                                            <label for="exampleFormControlSelect1">Enter Your email</label>
                                            <input type="email" className="form-control" style={{width:"100%"}}  placeholder="example@email.com" required/>
                                          </div>
                                       </div>
                                       <div className="col-6">
                                          <div className="form-group">
                                            <label for="exampleFormControlSelect1">Enter Your Age</label>
                                            <input type="text" className="form-control"  style={{width:"100%"}}  placeholder="27" required/>
                                          </div>
                                       </div>
                                       <div className="col-6">
                                          <div className="form-group">
                                            <label for="exampleFormControlSelect1">Select Your Gender</label>
                                            <select class="form-control" id="exampleFormControlSelect1"  style={{width:"100%"}} >
                                                <option>Woman</option>
                                                <option>Man</option>
                                                <option>Other</option>
                                            </select>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <input type="button" name="next" className="next action-button mt-4" value="Start Quizes" />
                              </fieldset>
                              <fieldset>
                                 <div className="form-card">
                                    <div className="row">
                                       <div className="col-12">
                                          <h2 className="steps">Question 1/3</h2>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-12">
                                          <h2 className="fs-title"><b>Question 1:</b> What is Your Workplace?</h2>
                                       </div>
                                       <div className="text-center mt-2 mt-2">
                                       <img src="assets/img/need-help.png" alt="logo" width="50%" className="img-fluid"/>
                                       </div>
                                       <div className="col-12">
                                          <ul className="ps-question">
                                             <li className="active step_1 rounded-pill bg-question text-start">
                                                <input type="radio" id="opt_1" name="stp_1_select_option" value="A place where people don’t question my authority"/>
                                                <label for="opt_1">A place where people don’t question my authority</label>
                                             </li>
                                             <li className="step_1 rounded-pill bg-question">
                                                <input type="radio" id="opt_2" name="stp_1_select_option" value="Where ever my best friends are, that’s where i want to be"/>
                                                <label for="opt_2">Where ever my best friends are, that’s where i want to be</label>
                                             </li>
                                             <li className="step_1 rounded-pill bg-question">
                                                <input type="radio" id="opt_3" name="stp_1_select_option" value="One that’s organized, structured and has workplace policies set."/>
                                                <label for="opt_3">One that’s organized, structured and has workplace policies set.</label>
                                             </li>
                                             <li className="step_1 rounded-pill bg-question">
                                                <input type="radio" id="opt_4" name="stp_1_select_option" value="A place where everyone knows I’m the boss."/>
                                                <label for="opt_4">A place where everyone knows I’m the boss.</label>
                                             </li>
                                             <li className="step_1 rounded-pill bg-question">
                                                <input type="radio" id="opt_5" name="stp_1_select_option" value="A place where I’m the CEO"/>
                                                <label for="opt_5">A place where I’m the CEO</label>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <input type="button" name="next" className="next action-button" value="Next Question" />
                              </fieldset>
                              <fieldset>
                                 <div className="form-card">
                                    <div className="row">
                                       <div className="col-12">
                                          <h2 className="steps">Question 2/3</h2>
                                       </div>
                                    </div>
                                    <div className="col-12">
                                       <h2 className="fs-title"><b>Question 2:</b> What is Your Workplace?</h2>
                                    </div>
                                    <div className="text-center mt-2 mt-2">
                                       <img src="assets/img/need-help.png" alt="logo" width="50%" className="img-fluid"/>
                                       </div>
                                    <div className="col-12">
                                       <ul className="ps-question">
                                          <li className="active step_1 rounded-pill bg-question text-start">
                                             <input type="radio" id="opt_1" name="stp_1_select_option" value="A place where people don’t question my authority"/>
                                             <label for="opt_1">A place where people don’t question my authority</label>
                                          </li>
                                          <li className="step_1 rounded-pill bg-question">
                                             <input type="radio" id="opt_2" name="stp_1_select_option" value="Where ever my best friends are, that’s where i want to be"/>
                                             <label for="opt_2">Where ever my best friends are, that’s where i want to be</label>
                                          </li>
                                          <li className="step_1 rounded-pill bg-question">
                                             <input type="radio" id="opt_3" name="stp_1_select_option" value="One that’s organized, structured and has workplace policies set."/>
                                             <label for="opt_3">One that’s organized, structured and has workplace policies set.</label>
                                          </li>
                                          <li className="step_1 rounded-pill bg-question">
                                             <input type="radio" id="opt_4" name="stp_1_select_option" value="A place where everyone knows I’m the boss."/>
                                             <label for="opt_4">A place where everyone knows I’m the boss.</label>
                                          </li>
                                          <li className="step_1 rounded-pill bg-question">
                                             <input type="radio" id="opt_5" name="stp_1_select_option" value="A place where I’m the CEO"/>
                                             <label for="opt_5">A place where I’m the CEO</label>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                                 <input type="button" name="next" className="next action-button" value="Next"/> 
                              </fieldset>
                              <fieldset>
                                 <div className="form-card">
                                    <div className="row">
                                       <div className="col-12">
                                          <h2 className="steps">Question 3/3</h2>
                                       </div>
                                    </div>
                                    <div className="col-12">
                                       <h2 className="fs-title"><b>Question 3:</b> What is Your Workplace?</h2>
                                    </div>
                                    <div className="text-center mt-2 mt-2">
                                       <img src="assets/img/need-help.png" alt="logo" width="50%" className="img-fluid"/>
                                    </div>
                                    <div className="col-12">
                                       <ul className="ps-question">
                                          <li className="active step_1 rounded-pill bg-question text-start">
                                             <input type="radio" id="opt_1" name="stp_1_select_option" value="A place where people don’t question my authority"/>
                                             <label for="opt_1">A place where people don’t question my authority</label>
                                          </li>
                                          <li className="step_1 rounded-pill bg-question">
                                             <input type="radio" id="opt_2" name="stp_1_select_option" value="Where ever my best friends are, that’s where i want to be"/>
                                             <label for="opt_2">Where ever my best friends are, that’s where i want to be</label>
                                          </li>
                                          <li className="step_1 rounded-pill bg-question">
                                             <input type="radio" id="opt_3" name="stp_1_select_option" value="One that’s organized, structured and has workplace policies set."/>
                                             <label for="opt_3">One that’s organized, structured and has workplace policies set.</label>
                                          </li>
                                          <li className="step_1 rounded-pill bg-question">
                                             <input type="radio" id="opt_4" name="stp_1_select_option" value="A place where everyone knows I’m the boss."/>
                                             <label for="opt_4">A place where everyone knows I’m the boss.</label>
                                          </li>
                                          <li className="step_1 rounded-pill bg-question">
                                             <input type="radio" id="opt_5" name="stp_1_select_option" value="A place where I’m the CEO"/>
                                             <label for="opt_5">A place where I’m the CEO</label>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                                 <input type="button" name="next" className="next action-button" value="Submit" /> 
                              </fieldset>
                              <fieldset>
                                 <div className="form-card">
                                    <div className="row justify-content-center">
                                       <div className="col-6"> <img src="assets/img/completed.png" alt="img" className="fit-image"/> </div>
                                    </div>
                                    <br/><br/>
                                    <div className="row justify-content-center">
                                       <div className="col-12 text-center">
                                          <h2 className="purple-text text-center"><strong>Thankyou For Give Answer</strong></h2>
                                          <h5 className="text-center">Your submission has been received</h5>
                                       </div>
                                    </div>
                                 </div>
                              </fieldset>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
<footer>
   <div className="container py-4">
      <div className="row">
         <div className="col-md-8 col-12">
            <div className="footer-logo">
               <img src="assets/img/logo.png" alt="logo" className="img-fluid"/>
            </div>
         </div>
         <div className="col-md-2 col-6">
            <div className="my-float-right">
               <div className="footer-menu text-center text-md-right pt-3 pt-md-0">
                  <Link to="/">
                  <img src="assets/img/footer-contact.png" alt="contact" className="img-fluid"/> Contact Us</Link>
               </div>
            </div>
         </div>
         <div className="col-md-2 col-6">
            <div className="my-float-right">
               <div className="footer-menu text-center text-md-right pt-3 pt-md-0">
                  <Link to="/">
                  <img src="assets/img/footer-consultation.png" alt="consultation" className="img-fluid"/> Consultation</Link>
               </div>
            </div>
         </div>
      </div>
   </div>
</footer>
</>
)
}
export default ShareQuizes;