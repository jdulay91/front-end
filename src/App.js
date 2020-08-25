import React, { useState} from "react";
import Header from "./components/Header";
import { Route, useHistory } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import TechRentalList from "./components/TechRentalList";
import AddTechItem from "./components/AddTechItem"
import EditTechRentalItem from "./components/EditTechRentalItem";



const App = () => {
  const [techEquipments, setTechEquipment] = useState([]);  
  const history = useHistory()

  return (
    <>
      <Header />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/tech" component={TechRentalList} />
      <PrivateRoute
        path="/addtech"
        component={() => <AddTechItem history={history} setTechEquipment={setTechEquipment}  techEquipments={techEquipments}  />}
      />
      <PrivateRoute path="/techlist" component={()=> <TechRentalList techEquipments={techEquipments} setTechEquipment={setTechEquipment}/>} />
      <PrivateRoute exact path="/updatetech/:id" component={EditTechRentalItem}/>
    </>
  );
};

export default App;
