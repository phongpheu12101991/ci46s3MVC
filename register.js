import { setScreen } from "../../index.js";

class LoginScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("registerscreen").content.cloneNode(true)
    );
    this._shadowRoot
      .querySelector("#linktoLogin")
      .addEventListener("click", () => {
        setScreen("login");
      });
  }
}

customElements.define("register-screen", LoginScreen);
