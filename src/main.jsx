import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import merkezVeri from './app/store';
import { Provider } from 'react-redux';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={merkezVeri}>
      <App />
    </Provider>
  </React.StrictMode>,
)
