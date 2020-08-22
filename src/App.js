import React, { useState, useEffect} from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import TechRentalList from "./components/TechRentalList";

const App = () => {
  const [techEquipments, setTechEquipments] = useState([]);

  return (
    <>
      <Header />
      <Route path="/login" component={Login} /> 
      <Route path="/signup" component={SignUp}/>
      <PrivateRoute path="/tech" component={TechRentalList}/>    
    </>
  );
};

export default App;
