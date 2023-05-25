import React from 'react';


const SimpleForm = ({formData, setFormData,handleFormDataChange,onStartQuiz}) => {



  return <form id="msform">
   
    <fieldset>
      <div className="form-card">
        <div className="row">
          <div className="col-12 mb-3">
            <h2 className="fs-title text-center"><b>Before start the quiz , please enter your info.</b></h2>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label for="exampleFormControlSelect1">Enter Your Name</label>
              <input value={formData.name} onChange={(e)=>handleFormDataChange(e,'name')} type="text" className="form-control" style={{ width: "100%" }} placeholder="Name" required  />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label for="exampleFormControlSelect1">Enter Your email</label>
              <input value={formData.email}  onChange={(e)=>handleFormDataChange(e,'email')} type="email" className="form-control" style={{ width: "100%" }} placeholder="example@email.com" required />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label for="exampleFormControlSelect1">Enter Your Age</label>
              <input value={formData.age}  onChange={(e)=>handleFormDataChange(e,'age')} type="text" className="form-control" style={{ width: "100%" }} placeholder="27" required />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label for="exampleFormControlSelect1">Select Your Gender</label>
              <select value={formData.gender}  onChange={(e)=>handleFormDataChange(e,'gender')} class="form-control" id="exampleFormControlSelect1" style={{ width: "100%" }} >
                <option value='Woman'>Woman</option>
                <option value='Man'>Man</option>
                <option value='Other'>Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <input type="button" name="next" className="next action-button mt-4" value="Start Quizes" onClick={onStartQuiz} />
    </fieldset>
  </form>
  // return (
  //     <Container>
  //     <Form>
  //       <Form.Group controlId="form.Name">
  //           <Form.Label>Name</Form.Label>
  //           <Form.Control type="text" placeholder="Enter name" />
  //       </Form.Group>

  //     </Form>
  //   </Container>
  // );
}



export default SimpleForm;