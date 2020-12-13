import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App, { App2 } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* GLOBAL VARIABLES */

// window.CurrentLanguage = 'es'
// window.$primaryLanguage = 'en';
// window.$secondaryLanguage = 'pl';
// window.$primaryLanguageIconId = 'primary-lang-icon';
// window.$secondaryLanguageIconId = 'secondary-lang-icon';

ReactDOM.render(
    <React.StrictMode>        
        {/* <App /> */}
        <App2 />
    </React.StrictMode>,
    document.getElementById('root')
);

// serviceWorker.register();
