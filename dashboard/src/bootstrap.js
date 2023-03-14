import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
  const app = createApp(Dashboard);

  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const container = document.querySelector('#_dashboard-dev-root');
  if (container) {
    mount (container);
  }
}

export { mount };
