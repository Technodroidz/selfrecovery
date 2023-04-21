import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Multiselect from 'multiselect-react-dropdown';
import Header from '../front/Header';
import Footer from '../front/Footer';
export const Statistics = () => {

return (
<> 
<Header /> 
<main id="main">
   <section className="about">
      <div className="container">
         <div className="row">
            <div className="col-lg-12 mb-5 text-center">
               <h2 className="mb-3"><b>Statistics</b></h2>
               <h4>Which possibilities result the most?
               </h4>
               <h4>
                  Which values are matched with the most?
               </h4>
            </div>
            <div className="col-lg-6">
               <div className="filter-box">
                  <h6><b>Quiz Filter </b> <img src="assets/img/filter.png" alt="filter" style={{width: "13px"}} className="img-fluid"/></h6>
                  <Multiselect
                  placeholder="Which Pizza Factory..."
                  displayValue="key"
                  onKeyPressFn={function noRefCheck(){}}
                  onRemove={function noRefCheck(){}}
                  onSearch={function noRefCheck(){}}
                  onSelect={function noRefCheck(){}}
                  options={[
                  {
                  key: 'Which Pizza Factory Pizza…'                                    
                  },
                  {
                  key: 'Which Dietary Supplement…'
                  },
                  {
                  key: 'Which Drugs should I ask My…'
                  },
                  {
                  key: 'The Perfect Bike for Me'
                  },
                  {
                  key: 'The Self Help Book I Need Most'
                  },
                  {
                  key: 'Perfect Local Club for Me'
                  },
                  {
                  key: 'Which Dating App is Right for…'
                  }
                  ]}
                  showCheckbox
                  showArrow
                  /> 
                  <table class="table table-bordered mt-3">
                     <thead>
                        <tr>
                           <th>Possibilities</th>
                           <th scope="col">Match Points</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Maui Pizza</td>
                           <td>16</td>
                        </tr>
                        <tr>
                           <td>Buffalo Ranch Chicken Pizza</td>
                           <td>13</td>
                        </tr>
                        <tr>
                           <td>The Jerry Pizza</td>
                           <td>12</td>
                        </tr>
                        <tr>
                           <td>Garlic Ranch </td>
                           <td>10</td>
                        </tr>
                        <tr>
                           <td>Alfredo Chicken Pizza</td>
                           <td>10</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="filter-box">
                  <h6><b>Date Filter</b> <img src="assets/img/clarity_date-solid.png" alt="filter" style={{width: "17px"}} className="img-fluid"/></h6>
                  <Multiselect
                  placeholder="Which Pizza Factory..."
                  displayValue="key"
                  onKeyPressFn={function noRefCheck(){}}
                  onRemove={function noRefCheck(){}}
                  onSearch={function noRefCheck(){}}
                  onSelect={function noRefCheck(){}}
                  options={[
                  {
                  key: 'Which Pizza Factory Pizza…'                                    
                  },
                  {
                  key: 'Which Dietary Supplement…'
                  },
                  {
                  key: 'Which Drugs should I ask My…'
                  },
                  {
                  key: 'The Perfect Bike for Me'
                  },
                  {
                  key: 'The Self Help Book I Need Most'
                  },
                  {
                  key: 'Perfect Local Club for Me'
                  },
                  {
                  key: 'Which Dating App is Right for…'
                  }
                  ]}
                  showCheckbox
                  showArrow
                  /> 
                  <table class="table table-bordered mt-3">
                     <thead>
                        <tr>
                           <th>Possibilities</th>
                           <th scope="col">Match Points</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Maui Pizza</td>
                           <td>16</td>
                        </tr>
                        <tr>
                           <td>Buffalo Ranch Chicken Pizza</td>
                           <td>13</td>
                        </tr>
                        <tr>
                           <td>The Jerry Pizza</td>
                           <td>12</td>
                        </tr>
                        <tr>
                           <td>Garlic Ranch </td>
                           <td>10</td>
                        </tr>
                        <tr>
                           <td>Alfredo Chicken Pizza</td>
                           <td>10</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12 mb-5 text-center">
               <h4 className="mb-3">Trendline Filters <img src="assets/img/filter.png" alt="filter" style={{width: "20px"}} className="img-fluid"/></h4>
               
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="col-lg-5 mb-5 text-center">
            <Multiselect
                  placeholder="1: Possibilities: Maui Pizza"
                  displayValue="key"
                  onKeyPressFn={function noRefCheck(){}}
                  onRemove={function noRefCheck(){}}
                  onSearch={function noRefCheck(){}}
                  onSelect={function noRefCheck(){}}
                  options={[
                  {
                  key: 'Which Pizza Factory Pizza…'                                    
                  },
                  {
                  key: 'Which Dietary Supplement…'
                  },
                  {
                  key: 'Which Drugs should I ask My…'
                  },
                  {
                  key: 'The Perfect Bike for Me'
                  },
                  {
                  key: 'The Self Help Book I Need Most'
                  },
                  {
                  key: 'Perfect Local Club for Me'
                  },
                  {
                  key: 'Which Dating App is Right for…'
                  }
                  ]}
                  showCheckbox
                  showArrow
                  />
               
            </div>
            <div className="col-lg-5 mb-5 text-center">
            <Multiselect
                  placeholder="2: Values: Bacon"
                  displayValue="key"
                  onKeyPressFn={function noRefCheck(){}}
                  onRemove={function noRefCheck(){}}
                  onSearch={function noRefCheck(){}}
                  onSelect={function noRefCheck(){}}
                  options={[
                  {
                  key: 'Which Pizza Factory Pizza…'                                    
                  },
                  {
                  key: 'Which Dietary Supplement…'
                  },
                  {
                  key: 'Which Drugs should I ask My…'
                  },
                  {
                  key: 'The Perfect Bike for Me'
                  },
                  {
                  key: 'The Self Help Book I Need Most'
                  },
                  {
                  key: 'Perfect Local Club for Me'
                  },
                  {
                  key: 'Which Dating App is Right for…'
                  }
                  ]}
                  showCheckbox
                  showArrow
                  />
               
            </div>
            <div className="col-lg-5 mb-5 text-center">
            <Multiselect
                  placeholder="3: Possibilities: Garlic Ranch..."
                  displayValue="key"
                  onKeyPressFn={function noRefCheck(){}}
                  onRemove={function noRefCheck(){}}
                  onSearch={function noRefCheck(){}}
                  onSelect={function noRefCheck(){}}
                  options={[
                  {
                  key: 'Which Pizza Factory Pizza…'                                    
                  },
                  {
                  key: 'Which Dietary Supplement…'
                  },
                  {
                  key: 'Which Drugs should I ask My…'
                  },
                  {
                  key: 'The Perfect Bike for Me'
                  },
                  {
                  key: 'The Self Help Book I Need Most'
                  },
                  {
                  key: 'Perfect Local Club for Me'
                  },
                  {
                  key: 'Which Dating App is Right for…'
                  }
                  ]}
                  showCheckbox
                  showArrow
                  />
               
            </div>
         </div>
         <div className="row justify-content-center">
            <div className="col-lg-9 mb-5 text-center">
            <img src="assets/img/chart.png" alt="filter" style={{width: "20px"}} className="img-fluid"/>
               
            </div>
         </div>
      </div>
   </section>
</main>
<Footer />
</>
)
}
export default Statistics;