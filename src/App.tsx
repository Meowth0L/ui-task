import React from 'react';
import { Cards, Header, Overview, Services } from './components';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Overview />
        <Services />
        <Cards />
      </div>
    </>
  );
}

export default App;
