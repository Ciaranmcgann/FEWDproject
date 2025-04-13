


import Guitars from './routes/Instruments/guitar.svelte';

  import Contact from './routes/contact.svelte';
  import ShoppingCart from './routes/shopping_cart.svelte';


const routes = {
  '/Instruments/guitar': Guitars,
  '/contact': Contact,
  '/shopping_cart': ShoppingCart,
  // add more routes
};

export default routes;
