import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Multiselect from 'multiselect-react-dropdown';
import "@fontsource/jost";
import {useState} from 'react';
import swal from 'sweetalert';
import { ReactSession } from 'react-client-session';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import http from '../http'

export const Header = () => { 
   const navigate = useNavigate();  
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();

    const [first_name,setFirstName] = useState();
    const [last_name,setLastName] = useState();
    const [group_name,setGroupName] = useState();
    const [phone,setPhone] = useState();
    const [categories_of_interest,setCategoriesOfInterest] = useState();
    const [address,setAddress] = useState();
    const [description,setDescription] = useState();
    
    ReactSession.setStoreType("localStorage");
    const sessioncheck = ReactSession.get("user");
    //console.log(sessioncheck.first_name);


   const submitForm = () => {
        if(first_name == null){
         return swal("First name is mandatory");
        } 
        if(group_name == null){
         return swal("Group name is mandatory");
        } 
        if(email == null){
         return swal("Email is mandatory");
        }
        if(phone == null){
         return swal("Phone is mandatory");
        }
      //   if(categories_of_interest == null){
      //    return swal("Categories of interest is mandatory");
      //   }
        http.post('/add-user',{first_name:first_name,last_name:last_name,email:email,group_name:group_name,phone:phone,categories_of_interest:categories_of_interest,address:address,description:description})
        .then(res=>{
           try{
              console.log(res);
              if(res.status === 200){
             const userdata = JSON.stringify(res.data);
             const uservalue = JSON.parse(userdata);
             console.log(uservalue.data);
            //  const usersess = uservalue.data;
            //  ReactSession.setStoreType("localStorage");
            //  ReactSession.set("user", usersess);
           //  swal(res.data.message);
             swal({ 
               title: "Success!",
               text: res.data.message,
               type: "success"}).then(okay => {
               if (okay) {
                window.location.reload();
               }
               });
              navigate('/');
           }else{
              //swal("Wrong credentials"); 
           }
         }catch(e){
             // swal("Wrong credentials");    
           }
           }).catch((e) => {
          // swal("Wrong credentials");
        });

   }

   const doLogin = () => {
      if(email == null){
         return swal("Email is mandatory");
        }
      if(password == null){
         return swal("Password is mandatory");
        }
    //  console.log(email+' '+password);
      http.post('/user-login',{email:email,password:password})
      .then(res=>{
         try{
            console.log(res);
            if(res.status === 200){
           const userdata = JSON.stringify(res.data);
           const uservalue = JSON.parse(userdata);
           console.log(uservalue.data);
           const usersess = uservalue.data;
           ReactSession.setStoreType("localStorage");
           ReactSession.set("user", usersess);
          // swal(res.data.message);
           //$('#loginmodal').modal('hide');
           swal({ 
            title: "Success!",
            text: res.data.message,
            type: "success"}).then(okay => {
            if (okay) {
             window.location.reload();
            }
            });
            navigate('/');
         }else{
            swal("Wrong credentials"); 
         }
       }catch(e){
            swal("Wrong credentials");    
         }
         }).catch((e) => {
         swal("Wrong credentials");
      });
  
   } 

//    var loginSignup = " <li><Link className='getstarted scrollto' onClick={showModal}>Login</Link></li>"+
//  "<li><Link className='getstarted2 scrollto' onClick={showModal1}>Sign up</Link></li>";

const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
// modal
const [isOpen1, setIsOpen1] = React.useState(false);
const showModal1 = () => { setIsOpen1(true);};
const hideModal1 = () => { setIsOpen1(false);};
$(document).ready(function(){
   $("#navbar").click(function(){
      $('.navbar ul').show();
      // $('.navbar ul').toggleClass("active");
    });
 });


return (
<>
<Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/" className="logo">
      <img src={window.location.origin + '/assets/img/logo.png'} alt="logo" className="img-fluid"/>
      </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>  
            <Nav.Link href="/Quizzes">Quizzes</Nav.Link>  
            {/* <Nav.Link href="/Account">Account</Nav.Link>             */}
            {/* <Nav.Link href="/Questions">Questions</Nav.Link>   */}
            <Nav.Link href="/Designs">Designs</Nav.Link>  
            <Nav.Link href="/Statistics">Statistics</Nav.Link>  
            <Nav.Link href="/Possibilities">Possibilities</Nav.Link>
            {
                (() => {
                    if(sessioncheck == null) {
                            return (
                              <Nav.Link onClick={showModal} className="getstarted">Login</Nav.Link>
                            )
                        }else {
                            return (
                             <Nav.Link> Welcome {sessioncheck.first_name}</Nav.Link>
                            )
                        }
                })()  
            }  
            {/* <Nav.Link onClick={showModal1} className="getstarted2">Sign up</Nav.Link>   */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<Modal show={isOpen} onHide={hideModal} id="loginmodal">
   <Modal.Body className="p_50">
      <span onClick={hideModal} className="clos"> <img src="assets/img/clos.png" alt="logo" className="img-fluid"/></span>
      <div className="row justify-content-center">
         <div className="col-md-7">
            <div className="modal-popup p-4 p-md-5">
               <div className="d-flex  text-center">
                  <div className="w-100">
                     <h3>Welcome Back!</h3>
                     <p>Please enter your details</p>
                  </div>
               </div>
               {/* <form className="mt-2"> */}
                  <div className="row">
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <label>Email</label>
                           <input type="text" className="form-control" placeholder="Enter your email" onChange={e=>setEmail(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <label>Password</label>
                           <input type="password" className="form-control" placeholder="**********" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <Link to="/">
                        <h6 className="forgot-link">Forgot Password?</h6>
                        </Link>
                     </div>
                     <div className="col-md-12 mt-4 text-center">
                        <button type="button" onClick={doLogin} className="btn-web">Login</button>
                     </div>
                     <div className="col-md-12 mt-4 text-center socal-login">
                        <h5>or</h5>
                        <hr>
                        </hr>
                        <img src="assets/img/google-icon.png" style={{width: "40px"}}></img>
                        <h5 className="mt-3">Login with Google</h5>
                        <h4 className="mt-3">
                           Don't have an account? 
                           <Link onClick={showModal1}>
                           Sign up</Link>
                        </h4>
                     </div>
                  </div>
               {/* </form> */}
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
         <div className="col-md-7">
            <div className="modal-popup p-4 p-md-5">
               <div className="d-flex  text-center">
                  <div className="w-100">
                     <h3>Come join us!</h3>
                     <p>Please enter your details</p>
                  </div>
               </div>
               <form className="mt-2">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>First Name</label>
                           <input type="text" className="form-control" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Last Name</label>
                           <input type="text" className="form-control" placeholder="Last Name" onChange={e=>setLastName(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Group Name</label>
                           <input type="text" className="form-control" placeholder="Group Name" onChange={e=>setGroupName(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Phone</label>
                           <input type="text" className="form-control" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Email</label>
                           <input type="text" className="form-control" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group mb-3">
                           <label>Categories of interest</label>
                           <Multiselect onChange={e=>setCategoriesOfInterest(e.target.value)}
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
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <label>Address</label>
                           <textarea className="form-control" placeholder="Address" rows="1" onChange={e=>setAddress(e.target.value)}></textarea>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group mb-3">
                           <label>Description</label>
                           <textarea className="form-control" placeholder="Write a quick description about you or your group" rows="2" onChange={e=>setDescription(e.target.value)}></textarea>
                        </div>
                     </div>
                     <div className="col-md-12 mt-4 text-center">
                        <button type="button" onClick={submitForm} className="btn-web" >Sign up</button>
                     </div>
                     <div className="col-md-12 mt-4 text-center socal-login">
                        <h5 className="mt-3">
                           Already have an account? 
                           <Link onClick={showModal}>
                           Sign in</Link>
                        </h5>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </Modal.Body>
</Modal>
</>
);
};
export default Header;