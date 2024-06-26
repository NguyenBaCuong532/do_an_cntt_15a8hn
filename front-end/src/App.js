import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
function App() {
  const [account,setAccount]=useState({});
  useEffect(()=>{
      let session = sessionStorage.getItem('account');
      if(session){
        setAccount(JSON.parse(session));
      }
  },[]);

  return (
     <Router>
    <div className="App">
      
        <AppRoutes/>
 
         
      
    </div>
   </Router>
  );
}

export default App;
