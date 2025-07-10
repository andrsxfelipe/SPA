import Home from '../pages/home.js';
import About from '../pages/about.js';
import NotFound from '../pages/notFound.js';

const routes = {
  '/': Home,
  '/about': About
};

const router = () => {
  const path = location.hash.slice(1).toLowerCase() || '/';
  const page = routes[path] || NotFound;

  document.getElementById('app').innerHTML = page();
};

export default router;
