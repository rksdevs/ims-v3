import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import AuthProvider from './context/authContext';
import {Provider} from 'react-redux'
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <Provider store={store}>
      <App />
      </Provider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
