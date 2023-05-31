import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../front/Header';
import Footer from '../front/Footer';

export const ViewQuizes = () => {
   const questions = [
      {
        id: '1',
        answer: {
         1:'answer 1',
         2:'answer 2',
         3:'answer 3',
         4:'answer 4',
        }
      },
      {
        id: '2',
        answer: {
         1:'answer1',
         2:'answer2',
         3:'answer3',
         4:'answer4',
        }
      },
      {
        id: '2',
        answer: {
         1:'answer 1',
         2:'answer 2',
         3:'answer 3',
         4:'answer 4',
        }
      },
      {
        id: '3',
        answer: {
         1:'answer 1',
         2:'answer 2',
         3:'answer 3',
         4:'answer 4',
        }
      },
      {
        id: '4',
        answer: {
         1:'answer 1',
         2:'answer 2',
         3:'answer 3',
         4:'answer 4',
        }
      },
    ];
      const [currentQuestion, setCurrentQuestion] = useState(0);
    
      const handleNext = () => {
         setCurrentQuestion((prevQuestion) =>
           prevQuestion === questions.length - 1 ? prevQuestion : prevQuestion + 1
         );
       };
       
       const handlePrevious = () => {
         setCurrentQuestion((prevQuestion) =>
           prevQuestion === 0 ? prevQuestion : prevQuestion - 1
         );
       };
    
      const question = questions[currentQuestion];
return (
<>

<Header />
<main id="main">
   <section>
      <div className="container">
         <div className="row justify-content-center">
         
            <div className="col-md-8 page-box">
               <div className="col-lg-12 text-center page-style2">
                  <h4><b>Quiz Name:</b> The best essential oil blend for me today.</h4>                 
               </div>
               <div className="container-fluid">
                  <div className="row justify-content-center">
                     <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                           <div id="msform">
                              <fieldset>
                                 <div className="form-card">
                                    <div className="row">
                                   
                                       <div className="col-12">
                                          <h2 className="fs-title"><b>Question :</b> {question.id}</h2>
                                       </div>
                                       <div className="col-12">
                                       <ul className="ps-question">
        {Object.entries(question.answer).map(([key, value]) => (
          <li  className="active step_1 rounded-pill bg-question text-start" key={key}>{value}</li>
        ))}
      </ul>
                                         
                                       </div>
                                    </div>
                                 </div>
                                 <input type="button" name="previous" class="previous action-button-previous mb-4" value="Previous Question" onClick={handlePrevious}/>
                                 <input type="button" name="next" class="next action-button mb-4" value="Next Question" onClick={handleNext}/>

                                 
                              </fieldset>
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
</>
)

}
export default ViewQuizes;