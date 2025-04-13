import Guitars from './routes/Instruments/guitar.svelte';
import Drums from './routes/Instruments/drums.svelte';
import Piano from './routes/Instruments/piano.svelte';
import Violin from './routes/Instruments/violin.svelte';
import Synths from './routes/Instruments/synthesisers.svelte';
import Recording from './routes/Instruments/recording_equipment.svelte';

import Contact from './routes/contact.svelte';
import ShoppingCart from './routes/shopping_cart.svelte';

const routes = {
  '/Instruments/guitar': Guitars,
  '/Instruments/drums': Drums,
  '/Instruments/piano': Piano,
  '/Instruments/violin': Violin,
  '/Instruments/synthesisers': Synths,
  '/Instruments/recording_equipment': Recording,
  '/contact': Contact,
  '/shopping_cart': ShoppingCart,
};

export default routes;
