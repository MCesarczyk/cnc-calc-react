import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { Provider } from 'Provider';
import reportWebVitals from 'reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
