import { Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";

export const NotFound = () => {
   useEffect(() => {window.scrollTo(0, 0);});
   
return (
<section>
   <div className="container">
      <div className="section-title">
         <h2>404 <br></br>Page Not Found</h2>
      </div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links: <Link to="/">Home</Link></p>
   </div>
</section>
)
}
export default NotFound;