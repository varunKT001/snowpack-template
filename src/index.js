import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));

if (import.meta.hot) {
  import.meta.hot.accept();
}
