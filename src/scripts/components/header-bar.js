class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
            <div class="hero">
              <div class="hero-inner">
                <h1 class="hero-title">Los Buenos Restaurantes</h1>
                <p class="hero-tagline">Find The Best Restaurants in Indonesia!</p>
              </div>
              
            </div>
        </header>
    `;
  }
}
customElements.define('header-bar', HeaderBar);
