import DetailRestaurant from '../views/pages/detail-restaurant';
import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default homepage
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': DetailRestaurant,
};

export default routes;
