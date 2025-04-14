
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')
});

export default app; // pushes app.svelte to the index file

import './script.js';
import './mailAPI.js';
import './style.css';