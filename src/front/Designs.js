import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../front/Header';
import Footer from '../front/Footer';

export const Designs = () => {
   const [formData, setFormData] = useState({
      titlefont: '',
      mainfont: ''
    });
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
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
                     <Accordion>
                        <Accordion.Item eventKey="0">
                           <Accordion.Header><b>Quiz 1 Title:</b>&nbsp; The best essential oil blend for me... </Accordion.Header>
                           <Accordion.Body>
                            <form onSubmit={handleSubmit}>
                              <div className="Quizzes-q">
                                 <div className="Quizzes-ans">
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-3"><b>Quiz 1 title:</b></div>
                                          <div className="col-9">
                                             <input type="text" placeholder="The best essential oil blend for me..." class="form-control" readOnly/>  
                                          </div>
                                       </div>
                                    </div>
                                    <div className="desgin-option">                                    
                                       <div className="row">
                                          <div className="col-3"><b>Title Font: </b></div>
                                          <div className="col-9">
                                             <select value={formData.titlefont} onChange={handleChange} class="form-control">
                                                <option selected>Select Title Font</option>
                                                <option value="1">Serif</option>
                                                <option value="2">Sans-serif</option>
                                                <option value="3">Cursive</option>
                                                <option value="4">Fantasy</option>
                                                <option value="5">Monospace</option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-3"><b>Main Font: </b></div>
                                          <div className="col-9">
                                             <select  value={formData.mainfont} onChange={handleChange} class="form-control">
                                                <option selected>Select Main Font</option>
                                                <option value="1">Serif</option>
                                                <option value="2">Sans-serif</option>
                                                <option value="3">Cursive</option>
                                                <option value="4">Fantasy</option>
                                                <option value="5">Monospace</option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="desgin-option">
                                       <div className="row">
                                          <div className="col-12 text-center">
                                             <button  type="submit" className='btn btn-success btn-sm'>Save & Submit</button></div>
                                          </div>
                                       </div>
                                 </div>
                              </div>
                            </form>
                           </Accordion.Body>
                        </Accordion.Item>
                     </Accordion>
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
export default Designs;