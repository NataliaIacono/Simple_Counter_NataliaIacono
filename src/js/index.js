//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './component/secondsCounter.jsx';

// include your styles into the webpack bundle
import '../styles/index.css';
let containerApp = ReactDOM.createRoot(document.getElementById('app'));
let contador = 0;
setInterval(() => {
    const seis = Math.floor(contador / 10000);
    const cinco = Math.floor(contador / 10000);
    const cuatro = Math.floor(contador / 1000);
    const tres = Math.floor(contador / 100);
    const dos = Math.floor(contador / 10);
    const uno = Math.floor(contador / 1);

    if (contador < 300) {
        contador++;
        containerApp.render(<SecondsCounter uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis} />);
    }
}, 1000);

//render your react application
