const Header = (title = 'Mi SPA') => {
  return `
    <header>
      <h1>${title}</h1>
      <nav>
        <a href="#/">Inicio</a>
        <a href="#/about">Acerca de</a>
      </nav>
    </header>
  `;
};

export default Header;
