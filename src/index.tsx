import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app/App';
import { HashRouter } from 'react-router-dom';
import store from './store/store';
import './shared/config/i18n';
import { ErrorBoundary } from './app/provider/router/ErrorBoundary';
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(

  <StrictMode>
    
      <Provider store={store}>
        <HashRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </HashRouter>
      </Provider>
    
  </StrictMode>,
);
