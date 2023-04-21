import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from './front/Home';
import {Account} from './front/Account';
import {Quizzes} from './front/Quizzes';
import {Questions} from './front/Questions';
import {Designs} from './front/Designs';
import {Possibilities} from './front/Possibilities';
import {Statistics} from './front/Statistics';
import {Profile} from './front/Profile';
import {Success} from './payment/Success';
import {Cancel} from './payment/Cancel';
// import {CheckoutForm} from './payment/CheckoutForm';
import {ShareQuizes} from './user/ShareQuizes';

export function App() {
return (
<Router>
   <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Account" element={<Account />}></Route>
      <Route path="/Quizzes" element={<Quizzes />}></Route>
      <Route path="/Questions/:id" element={<Questions />}></Route>
      <Route path="/Designs" element={<Designs />}></Route>
      <Route path="/Possibilities" element={<Possibilities />}></Route>
      <Route path="/Statistics" element={<Statistics />}></Route>
      <Route path="/ShareQuizes" element={<ShareQuizes />}></Route>
      <Route path="/Profile" element={<Profile />}></Route> 
      {/* <Route path="/CheckoutForm" element={<CheckoutForm />}></Route>  */}
      <Route path="/Success" element={<Success />}></Route> 
      <Route path="/Cancel" element={<Cancel />}></Route> 
   </Routes>
</Router>
);
}
export default App;