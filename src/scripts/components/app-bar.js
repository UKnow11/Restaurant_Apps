class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav>
                <button id="menu">
                  ☰
                </button>
                <div class="nav-brand"><a href="#">Los Buenos Restaurantes</a></div>
                <div class="drawer">
                    <div class="hero-drawer"></div>
                    <ul class="nav-list">
                        <li class="nav-items"><a href="#/home">Home</a></li>
                        <li class="nav-items"><a href="#/favorite">Favorite</a></li>
                        <li class="nav-items"><a href="https://github.com/UKnow11" target="_blank">About Us</a></li>
                    </ul>
                </div>
            </nav>
        `;
  }
}
customElements.define('app-bar', AppBar);
