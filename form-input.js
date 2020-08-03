class FormInput extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("forminput").content.cloneNode(true)
    );
    this.$input = this._shadowRoot.querySelector("#input");
    this.$label = this._shadowRoot.querySelector("#label");
  }

  static get observedAttributes() {
    return ["type", "label", "name"];
  }

  attributeChangedCallback() {
    this.render();
  }
  get value() {
      return this.$input.value;
  }

  render() {
    this.$input.type = this.getAttribute("type");
    this.$label.innerHTML = this.getAttribute("label");
  }
}

customElements.define("form-input", FormInput);
