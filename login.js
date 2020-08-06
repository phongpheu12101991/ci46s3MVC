import { setScreen } from "../../index.js";
import { login } from "../../controllers/auth.js";

class LoginScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("loginscreen").content.cloneNode(true)
    );
    this._shadowRoot
      .querySelector("#linktoRegister")
      .addEventListener("click", () => {
        setScreen("register");
      });
    this.$form = this._shadowRoot.querySelector("#formlogin");
    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.login();
    });
  }
  login() {
    let email = this.$form.querySelector('form-input[name="email"]').value;
    let password = this.$form.querySelector('form-input[name="password"]').value;
    login(email, password);
  }
}

customElements.define("login-screen", LoginScreen);
