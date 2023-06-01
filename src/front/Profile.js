import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Header from './Header';
import Footer from './Footer';
import Accordion from 'react-bootstrap/Accordion'
export const Profile = () => {
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
                                 <Nav.Link eventKey="third">API Access <i className="fa fa-list"></i></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="fourth">Address <i className="fa fa-map-marker"></i></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="fifth">Account Details <i className="fa fa-user"></i></Nav.Link>
                              </Nav.Item>
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
                                       Hello <strong>UserName</strong> (not <strong>UserName</strong>? 
                                       <small>
                                          <Link to="/">
                                          Log out</Link>
                                       </small>
                                       )
                                    </p>
                                    <div className="ltn__comment-area mb-50">
                                       <div className="ltn-author-introducing clearfix">
                                          <div className="author-img">
                                             <img src="assets/img/need-help.png" className='img-fluid' alt="Author Image" />
                                          </div>
                                          <div className="author-info">
                                             <h2>Rosalina D. William</h2>
                                             <div className="footer-address">
                                                <ul>
                                                   <li>
                                                      <div className="footer-address-icon">
                                                         <i className="fa fa-map-marker"></i>
                                                      </div>
                                                      <div className="footer-address-info">
                                                         <p>Brooklyn, New York, United States</p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="footer-address-icon">
                                                         <i className="fa fa-mobile"></i>
                                                      </div>
                                                      <div className="footer-address-info">
                                                         <p>
                                                            <Link to="tel:+0123-456789">
                                                            +0123-456789</Link>
                                                         </p>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="footer-address-icon">
                                                         <i className="fa fa-envelope-o"></i>
                                                      </div>
                                                      <div className="footer-address-info">
                                                         <p>
                                                            <Link to="mailto:example@example.com">
                                                            example@example.com</Link>
                                                         </p>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">                                 
                                 <div className="ltn__myaccount-tab-content-inner">
                                    <p>Your Select Quizzes </p>
                                    <div className="account-login-inner">
                                       <Accordion>
                                          <Accordion.Item eventKey="0">
                                             <Accordion.Header><b>Quiz 1:</b>&nbsp; The perfect bike for me.</Accordion.Header>
                                             <Accordion.Body>
                                                <div className="qus-tab">
                                                   <h6><b>Question 1:</b> The best make up brush for oily face.</h6>
                                                   <h6><b>Answer:</b> A</h6>
                                                   <h6><b>Total Participants:</b> 100</h6>
                                                   <h6><b>Most Preferable Answer:</b> D</h6>
                                                </div>                                                
                                             </Accordion.Body>
                                          </Accordion.Item>
                                          <Accordion.Item eventKey="1">
                                             <Accordion.Header><b>Quiz 2:</b>&nbsp; The best essential oil blend for me today.</Accordion.Header>
                                             <Accordion.Body>
                                                <div className="qus-tab mb-2">
                                                   <h6><b>Question 1:</b> Good brand for clothing material.</h6>
                                                   <h6><b>Answer:</b> B</h6>
                                                   <h6><b>Total Participants:</b> 20</h6>
                                                   <h6><b>Most Preferable Answer:</b> C</h6>
                                                </div> 
                                                <div className="qus-tab mb-2">
                                                   <h6><b>Question 1:</b> Good brand for clothing material.</h6>
                                                   <h6><b>Answer:</b> B</h6>
                                                   <h6><b>Total Participants:</b> 20</h6>
                                                   <h6><b>Most Preferable Answer:</b> C</h6>
                                                </div>                                                
                                             </Accordion.Body>
                                          </Accordion.Item>
                                       </Accordion>
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="third">
                              <div className="ltn__myaccount-tab-content-inner">
                                    <p>API Access  </p>
                                    <div className="account-login-inner">
                                       <Accordion>
                                          <Accordion.Item eventKey="0">
                                             <Accordion.Header><b>API Name:</b>&nbsp; The perfect bike for me.</Accordion.Header>
                                             <Accordion.Body>
                                                <div className="qus-tab">
                                                   <h6><b>API Name:</b> The best make up brush for oily face.</h6>
                                                   <h6><b>API Url:</b> www.google.com</h6>
                                                   <h6><b>Parameter:</b> Ueserid</h6>
                                                   <h6><b>Response:</b> D</h6>
                                                </div>                                                
                                             </Accordion.Body>
                                          </Accordion.Item>                                          
                                       </Accordion>
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="fourth">
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
                              </Tab.Pane>
                              <Tab.Pane eventKey="fifth">
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
                              <Tab.Pane eventKey="sixth">
                                 <div className="ltn__myaccount-tab-content-inner">
                                    <div className="account-login-inner">
                                       <form action="#" className="ltn__form-box contact-form-box">
                                          <h5 className="mb-30">Change Password</h5>
                                          <input type="password" name="password" placeholder="Current Password*"/>
                                          <input type="password" name="password" placeholder="New Password*"/>
                                          <input type="password" name="password" placeholder="Confirm New Password*"/>
                                          <div className="btn-wrapper mt-0">
                                             <button className="btn btn-primary btn-block" type="submit">Save Changes</button>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="7th">
                                 <div className="ltn__myaccount-tab-content-inner">
                                    <div className="account-login-inner">
                                       <form action="#" className="ltn__form-box contact-form-box">
                                          <h5 className="mb-30">Change Password</h5>
                                          <input type="password" name="password" placeholder="Current Password*"/>
                                          <input type="password" name="password" placeholder="New Password*"/>
                                          <input type="password" name="password" placeholder="Confirm New Password*"/>
                                          <div className="btn-wrapper mt-0">
                                             <button className="btn btn-primary btn-block" type="submit">Save Changes</button>
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