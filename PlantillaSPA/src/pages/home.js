import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Home = () => {
  return `
    ${Header('Inicio')}
    <main>
      <h2>Bienvenido a la Página Principal</h2>
      <p>Esta es una SPA hecha con Vanilla JS.</p>
    </main>
    ${Footer()}
  `;
};

export default Home;
