import React, { useEffect } from 'react';
import './index.css';
import {  Route } from 'react-router-dom';

function PrivateRoutes(props) {
  useEffect(()=>{

  },[]);
  return (
    <>
    <Route path={props.path} component={props.component}/>
    </>
  )
}
export default PrivateRoutes;
