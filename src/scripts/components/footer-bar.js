class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Copyright &copy; 2023 - Los Buenos Restaurantes</p>
      </footer>
      `;
  }
}
customElements.define('footer-bar', FooterBar);
