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
                            {questionData.options.map((item,optionIndex)=>{
                                return (
                                    <li key={`option-${optionIndex}`} className="active step_1 rounded-pill bg-question text-start">
                                    <input type="radio" id="opt_1" name="stp_1_select_option" value="A place where people don’t question my authority" />
                                    <label for="opt_1">{item}</label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </fieldset>

    </div>

}



export default ViewQuestion