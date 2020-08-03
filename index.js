import "./views/screens/login.js";
import "./views/screens/register.js";
import "./views/components/form-input.js";

let screenMap = {
  login: "<login-screen></login-screen>",
  register: "<register-screen></register-screen>",
};

function setScreen(screenname) {
  document.getElementById("app").innerHTML = screenMap[screenname];
}

setScreen("login");

export { setScreen };
