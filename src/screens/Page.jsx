import React from 'react';
import Portfolio from '../components/Portfolio';
import Navigationtwo from '../components/Navigationtwo';

const Page = () => (
  <div
    style={{
      padding: 0,
      margin: 0,
      backgroundColor: '#f5f7f8',
    }}
  >
    <Navigationtwo />
    <h1
      style={{
        fontFamily: 'Simonetta',
        fontSize: '62px',
        fontWeight: 'bold',
        color: '#172b4d',
        paddingTop: '42px',
        margin: '0 0 -14px 0',
        textAlign: 'center',
      }}
    >
      Portfolio
      <sup
        style={{
          fontSize: '12px',
          fontWeight: 'normal',
          color: '#344563',
        }}
      >
        Okari ron
      </sup>
    </h1>
    <div>
      <Portfolio />
    </div>
  </div>
);

export default Page;
