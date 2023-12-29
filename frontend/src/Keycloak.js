import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "react-todo-realm",
  clientId: "react-todo",
});

export default keycloak;
