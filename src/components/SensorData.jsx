// SensorData.js
import React, { useState } from 'react';
import BluetoothButton from './BluetoothButton';

const SensorData = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleBluetoothConnect = () => {
    // Add your Bluetooth connection logic here
    console.log("Attempting to connect to Bluetooth...");
    setIsConnected(true); // Update state when connected
  };

  return (
    <div style={styles.container}>
      <BluetoothButton onConnect={handleBluetoothConnect} />
      {isConnected && <p>Bluetooth Connected</p>}
      <div style={styles.charts}>
        {/* Placeholder for your charts */}
        <p>Your charts will appear here.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#333', // Dark background
    color: 'white',
    minHeight: '100vh',
  },
  charts: {
    marginTop: '20px',
  }
};

export default SensorData;
