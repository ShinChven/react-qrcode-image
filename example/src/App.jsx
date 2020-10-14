import React from 'react';
import logo from './logo.svg';
import QRCodeImage from './QRCodeImage';
import './App.css';

function App() {


  return (
    <div className="App">

      <QRCodeImage
        options={{
          content:"https://atlassc.net",
          width: 300,
          logo: {
            src: logo,
            radius: 0,
          },
        }}
        />
    </div>
  );
}

export default App;
