// src/components/BluetoothButton.js
import React from 'react';

const BluetoothButton = ({ onConnect }) => {
  return (
    <button 
      onClick={onConnect} 
      style={{
        marginBottom: '20px',
        backgroundColor: '#444', 
        color: 'white',
        padding: '10px 20px',
        border: '1px solid #555', 
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease', 
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#007bff'} // Slightly lighter on hover
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#444'}  // Revert to original color on mouse out
    >
      Connect Bluetooth
    </button>
  );
};

export default BluetoothButton;
