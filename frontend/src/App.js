import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import keycloak from "./Keycloak";
import Todos from "./Todos";
import Topnav from "./Topnav";
import RegistrationForm from "./RegistraionForm";
import Login from "./Login";

function App() {
  return (
    <React.Fragment>
      {/* <ReactKeycloakProvider authClient={keycloak}> */}
     
      <BrowserRouter>
      <Topnav></Topnav>
        <Routes>
        
          <Route exact path="/" element={<Todos />} />
          <Route exact path="/register" element={<RegistrationForm />} />
          <Route exact path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
      {/* </ReactKeycloakProvider> */}
    </React.Fragment>
  );
}

export default App;
