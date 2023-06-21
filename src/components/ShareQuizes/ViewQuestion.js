import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
export const ViewQuestion = ({ questionData,index }) => {

return <div>
   <fieldset>
      <div className="form-card">
         <div className="row">
            <div className="col-12">
               <h2 className="fs-title"><b>Question {index+1}:</b>{questionData.title}</h2>
            </div>
            <div className="text-center mt-2 mt-2">
               <img src="../assets/img/need-help.png" alt="logo" width="50%" className="img-fluid" />
            </div>   
            <div className="col-12">
               <ul className="ps-question">
                  {questionData.input_type === 'radio' ? (
                  questionData.options.map((item, optionIndex) => (
                  <li key={`option-${optionIndex}`} className="active step_1 rounded-pill bg-question text-start">
                    <input type="radio" id="opt_1" name="stp_1_select_option" />
                     <label>{item}</label>
                  </li>
                  ))
                  ) : 
                  questionData.input_type === 'checkbox' ? 
                  (
                  questionData.options.map((item, optionIndex) => (
                  <li key={`option-${optionIndex}`} className="step_1 rounded-pill bg-question text-start">
                     <input type="checkbox" id="opt_2" name="stp_2_select_option" />
                     <label>{item}</label>
                  </li>
                  ))
                  ) :
                  null
                  }
               </ul>
            </div>
         </div>
      </div>
   </fieldset>
</div>
}
export default ViewQuestion
