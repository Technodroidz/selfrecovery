import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Header from './Header';
import Footer from './Footer';
import {useEffect, useState} from 'react';
import swal from 'sweetalert';
import { ReactSession } from 'react-client-session';
import http from '../http'
import Accordion from 'react-bootstrap/Accordion'
export const Profile = () => {
   const navigate = useNavigate();  
   const [userprofile , setUserProfile] = useState([]); 
   const[alluserquizzes, setUserQuizzes] = useState([]);
   const[apiaccess, setApiAccess] = useState([]);
   const [new_password,setNewPassword] = useState();
    const [old_password,setOldPassword] = useState();
    const [confirm_new_password,setConfirmNewPassword] = useState();

   ReactSession.setStoreType("localStorage");
   const sessioncheck = ReactSession.get("user");
   let x = 0;
   let y = 0;
   useEffect(()=>{
      fetchUserProfileData();
      fetchAllUserQuizzes();
   },[]);

   const fetchUserProfileData = () => {
      http.post('/user-profile',{user_id:sessioncheck.user_id})
      .then(res=>{
         try{
            if(res.status === 200){
           // console.log(res.data.data);
           setUserProfile(res.data.data); 
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

   const fetchAllUserQuizzes = () => {
      if(sessioncheck == null){
         swal("Please Login");  
         navigate('/');
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

   const fetchApiDetails = () => {
      const user_id = sessioncheck.user_id;
      http.post('/fetch-user-api-details', { user_id: user_id })
        .then(res => {
          try {
            if (res.status === 200) {
              if (res.data.success === true && res.data.data === null) {
                swal("You have no API access");
              } else {
                setApiAccess(res.data.data);
              }
            } else {
              swal("Something went wrong");
            }
          } catch (e) {
            swal("Something went wrong");
          }
        })
        .catch(() => {
          swal("Something went wrong");
        });
    }

   const changePassword = () => {
      const user_id = sessioncheck.user_id;
      if(new_password == null){
         return swal("New password is mandatory");
      }
      if(old_password == null){
         return swal("Current password is mandatory");
      }
      if(confirm_new_password == null){
         return swal("Current new password is mandatory");
      } 
      if(confirm_new_password !== new_password){
         return swal("New password and confirm new password does not match");
      } 
      
      http.post('/change-password',{user_id:user_id,new_password:new_password,old_password:old_password})
      .then(res=>{
         try{
           // console.log(res);
            if(res.status === 200){
               swal(res.data.message);
            }else{
               swal("Something Wrong"); 
            }
         }catch(e){
            swal(res.data.message);    
            }
         }).catch((e) => {
            swal("Something Wrong");
      });
   } 
    

return (
<>
<Header />
<main id="main">
   <section>
      <div className="container">
         <div className="row justify-content-center mt-3">
            <div className="col-md-12 page-box">
               <div className="row justify-content-center">
                  <div className="col-md-11 mt-4 profile-tab">
                     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                           <Col sm={3}>
                           <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                 <Nav.Link eventKey="first">Dashboard <i className="fa fa-home"></i></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="second">My Quizzes <i className="fa fa-list"></i></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link onClick={fetchApiDetails} eventKey="third">API Access <i className="fa fa-key"></i></Nav.Link>
                              </Nav.Item>
                              {/* <Nav.Item>
                                 <Nav.Link eventKey="fourth">Address <i className="fa fa-map-marker"></i></Nav.Link>
                              </Nav.Item> */}
                              {/* <Nav.Item>
                                 <Nav.Link eventKey="fifth">Account Details <i className="fa fa-user"></i></Nav.Link>
                              </Nav.Item> */}
                              <Nav.Item>
                                 <Nav.Link eventKey="sixth">Plan <i className="fa fa-heart"></i></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="7th">Change Password <i className="fa fa-lock"></i></Nav.Link>
                              </Nav.Item>
                           </Nav>
                           </Col>
                           <Col sm={9}>
                           <Tab.Content>
                              <Tab.Pane eventKey="first">
                                 <div className="ltn__myaccount-tab-content-inner">
                                    <p>
                                     <strong>Profile Details</strong>
                                    </p>
                                    {userprofile.map((profiledata,index)=>(
                                    <div className="ltn__comment-area mb-50">
                                       <div className="ltn-author-introducing clearfix">
                                          <div className="author-img">
                                             <img src="assets/img/need-help.png" className='img-fluid' alt="Author Image"/>
                                          </div>
                                          <div className="author-info">
                                             <h2>{profiledata.first_name+' '+profiledata.last_name}</h2>
                                             <div className="footer-address">
                                                <ul>
                                                   <li>
                                                      <div className="footer-address-icon">
                                                         <i className="fa fa-map-marker"></i>
                                                      </div>
                                                      <div className="footer-address-info">
                                                         <p>{profiledata.address}</p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="footer-address-icon">
                                                         <i className="fa fa-mobile"></i>
                                                      </div>
                                                      <div className="footer-address-info">
                                                         <p>
                                                            <Link to={`tel:${profiledata.phone}`}>
                                                            {profiledata.phone}</Link>
                                                         </p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="footer-address-icon">
                                                         <i className="fa fa-envelope-o"></i>
                                                      </div>
                                                      <div className="footer-address-info">
                                                         <p>
                                                            <Link to={`mailto:${profiledata.email}`}>
                                                            {profiledata.email}</Link>
                                                         </p>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                   ))} 
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">                                 
                                 <div className="ltn__myaccount-tab-content-inner">
                                    <p>Your Select Quizzes </p>
                                    <div className="account-login-inner">
                                       <Accordion>
                                       {alluserquizzes.map((allquiz,index)=>(
                                          <Accordion.Item eventKey={x++}>
                                             <Accordion.Header><b>Quiz {++y}:</b>&nbsp; {allquiz.quiz_name}.</Accordion.Header>
                                             <Accordion.Body>
                                                <div className="qus-tab">
                                                   <h6><b>Total Participants:</b> 100</h6>
                                                </div>                                                
                                             </Accordion.Body>
                                          </Accordion.Item>
                                       ))}
                                       </Accordion>
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="third">
                              <div className="ltn__myaccount-tab-content-inner">
                              <p>API Access</p>
                              <div className="account-login-inner">
                                 <Accordion>
                                    {apiaccess && apiaccess.length > 0 ? (
                                    apiaccess.map((allapi, index) => (
                                       <Accordion.Item eventKey={x++}>
                                          <Accordion.Header>
                                          <b>API Name:</b>&nbsp; {allapi.name}.
                                          </Accordion.Header>
                                          <Accordion.Body>
                                          <div className="qus-tab">
                                             <h6>
                                                <b>API Name:</b>
                                                {allapi.name}.
                                             </h6>
                                             <h6>
                                                <b>API Url:</b> {allapi.url}
                                             </h6>
                                             <h6>
                                                <b>Parameter:</b> {allapi.params}
                                             </h6>
                                             <h6>
                                                <b>Response:</b> {allapi.response}
                                             </h6>
                                          </div>
                                          </Accordion.Body>
                                       </Accordion.Item>
                                    ))
                                    ) : (
                                    <p>No API access available.</p>
                                    )}
                                 </Accordion>
                              </div>
                              </div>
                              </Tab.Pane>
                              {/* <Tab.Pane eventKey="fourth">
                                 <div className="ltn__myaccount-tab-content-inner">
                                    <p>The following addresses will be used on the checkout page by default.</p>
                                    <div className="row">
                                       <div className="col-md-6 col-12 mb-2">
                                          <div className="addres-box">
                                          <h4>
                                             Billing Address 
                                             &nbsp; <small>
                                                <Link to="/">
                                                edit</Link>
                                             </small>
                                          </h4>
                                          <address>
                                             <p><strong>Alex Tuntuni</strong></p>
                                             <p>1355 Market St, Suite 900 San Francisco, CA 94103
                                             </p>
                                             <p>Mobile: (123) 456-7890</p>
                                          </address>
                                          </div>
                                       </div>
                                       <div className="col-md-6 col-12 mb-2">
                                          <div className="addres-box">
                                          <h4>
                                             Shipping Address 
                                             &nbsp;<small>
                                                <Link to="/">
                                                edit</Link>
                                             </small>
                                          </h4>
                                          <address>
                                             <p><strong>Alex Tuntuni</strong></p>
                                             <p>1355 Market St, Suite 900
                                                San Francisco, CA 94103
                                             </p>
                                             <p>Mobile: (123) 456-7890</p>
                                          </address>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="fifth">
                                 <div className="ltn__myaccount-tab-content-inner">
                                    <p>The following addresses will be used on the checkout page by default.</p>
                                    <div className="ltn__form-box">
                                       <form action="#">
                                          <div className="row mb-50">
                                             <div className="col-md-6">
                                                <label>First name:</label>
                                                <input type="text" name="ltn__name"/>
                                             </div>
                                             <div className="col-md-6">
                                                <label>Last name:</label>
                                                <input type="text" name="ltn__lastname"/>
                                             </div>
                                             <div className="col-md-6">
                                                <label>Display Name:</label>
                                                <input type="text" name="ltn__lastname" placeholder="Ethan"/>
                                             </div>
                                             <div className="col-md-6">
                                                <label>Display Email:</label>
                                                <input type="email" name="ltn__lastname" placeholder="example@example.com"/>
                                             </div>
                                          </div>
                                          <div className="btn-wrapper">
                                             <button type="submit" className="btn btn-primary text-uppercase">Save Changes</button>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </Tab.Pane> */}
                              <Tab.Pane eventKey="sixth">
                                 <div className="ltn__myaccount-tab-content-inner">
                                    <div className="pricing-table">
                                       <div className="container">
                                          <div className="row">
                                             <div className="col-md-4">
                                                <div className="item">
                                                   <div className="heading">
                                                      <h3>BASIC</h3>
                                                   </div>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                   {/* 
                                                   <div className="features">
                                                      <h4><span className="feature">Full Support</span> : <span className="value">No</span></h4>
                                                      <h4><span className="feature">Duration</span> : <span className="value">30 Days</span></h4>
                                                      <h4><span className="feature">Storage</span> : <span className="value">10GB</span></h4>
                                                   </div>
                                                   */}
                                                   <div className="price">
                                                      <h4>$25</h4>
                                                   </div>
                                                   <button className="btn btn-block btn-outline-primary" type="submit">BUY NOW</button>
                                                </div>
                                             </div>
                                             <div className="col-md-4">
                                                <div className="item">
                                                   <div className="ribbon">Best Value</div>
                                                   <div className="heading">
                                                      <h3>PRO</h3>
                                                   </div>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                   <div className="price">
                                                      <h4>$50</h4>
                                                   </div>
                                                   <button className="btn btn-block btn-primary" type="submit">BUY NOW</button>
                                                </div>
                                             </div>
                                             <div className="col-md-4">
                                                <div className="item">
                                                   <div className="heading">
                                                      <h3>PREMIUM</h3>
                                                   </div>
                                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                   <div className="price">
                                                      <h4>$150</h4>
                                                   </div>
                                                   <button className="btn btn-block btn-outline-primary" type="submit">BUY NOW</button>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="7th">
                                 <div className="ltn__myaccount-tab-content-inner">
                                    <div className="account-login-inner">
                                       <form action="#" className="ltn__form-box contact-form-box">
                                          <h5 className="mb-30">Change Password</h5>
                                          <input type="password" name="old_password" placeholder="Current Password*" onChange={e=>setOldPassword(e.target.value)}/>
                                          <input type="password" name="new_password" placeholder="New Password*" onChange={e=>setNewPassword(e.target.value)}/>
                                          <input type="password" name="confirm_new_password" placeholder="Confirm New Password*" onChange={e=>setConfirmNewPassword(e.target.value)}/>
                                          <div className="btn-wrapper mt-0">
                                             <button className="btn btn-primary btn-block" type="button" onClick={changePassword}>Save Changes</button>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </Tab.Pane>
                              
                           </Tab.Content>
                           </Col>
                        </Row>
                     </Tab.Container>
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
export default Profile;