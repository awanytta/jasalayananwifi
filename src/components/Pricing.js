// src/components/Pricing.js
import React from 'react';
import WifiPackages from './WifiPackages'; // Import WifiPackages
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing-container">
      
      {/* Menambahkan komponen WifiPackages ke dalam Pricing */}
      <WifiPackages />

      {/* Tambahkan elemen lain dalam Pricing jika ada */}
    </div>
  );
}

export default Pricing;
