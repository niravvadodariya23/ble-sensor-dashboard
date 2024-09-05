import React, { useState } from 'react';
import SensorTabs from './SensorTabs';
import './SensorPage.css';
import BluetoothButton from '../components/BluetoothButton';

const SensorPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState('');

  const handleBluetoothConnect = async () => {
    try {
      console.log("Attempting to connect to Bluetooth...");
      // Request a Bluetooth device
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'] // You can specify services you want to interact with
      });

      console.log(`Connected to device: ${device.name}`);
      setIsConnected(true);
      setDeviceName(device.name);

      // Add additional logic to interact with the device here
      // For example, you could read data from a service or characteristic

    } catch (error) {
      console.error("Bluetooth connection failed", error);
    }
  };

  return (
    <div className="sensor-page">
      <h1>Sensor Data Dashboard</h1>
      <p>Visualize real-time data from the sensors below.</p>
      <p>Connect Bluetooth To View Real-Time Data</p>
      <div style={styles.container}>
        <BluetoothButton onConnect={handleBluetoothConnect} />
        {isConnected && <p>Connected to {deviceName}</p>}
        <SensorTabs /> {/* Your tab view of charts */}
      </div>
    </div>
  );
};

const styles = {
};

export default SensorPage;
