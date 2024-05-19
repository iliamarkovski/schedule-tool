import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { ScheduleDashboard } from './components/templates/ScheduleDashboard';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ScheduleDashboard />
    </Provider>
  </React.StrictMode>
);
