import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

document.body.style = 'background: black; margin: 0;';

ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);