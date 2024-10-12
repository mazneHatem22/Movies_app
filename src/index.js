import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/all.min.css"
import { Provider } from 'react-redux';
import { Store } from './redux/store/store';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

AOS.init(); // Initialize AOS



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store} >
    <App />
  </Provider>
);

