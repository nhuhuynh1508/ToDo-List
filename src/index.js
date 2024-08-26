import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/form';
import Header from './components/header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-black min-h-screen">
      <Header />
      <Form />
    </div>
  </React.StrictMode>
);
