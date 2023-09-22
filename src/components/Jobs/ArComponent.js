import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aframe';
import 'aframe-ar';
import geolib from 'geolib';

const ARComponent = () => {
  const [cameraAccess, setCameraAccess] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyLocations, setNearbyLocations] = useState([]);

  useEffect(() => {
    const handleGeolocationSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ latitude, longitude });
      notifyLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
    };

    const handleGeolocationError = (error) => {
      console.error('Error fetching geolocation:', error);
    };

    const notifyLocation = (location) => {
      toast.info(`You are at ${location}`, {
        position: 'bottom-left',
        autoClose: 5000,
      });
    };

    if (cameraAccess) {
      navigator.geolocation.getCurrentPosition(
        handleGeolocationSuccess,
        handleGeolocationError
      );
    }
  }, [cameraAccess]);

  const requestCameraAccess = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        setCameraAccess(true);
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
        toast.error('Error accessing camera. Please try again.', {
          position: 'bottom-left',
        });
      });
  };

  // Function to check nearby locations
  const checkNearbyLocations = () => {
    // Your logic to load and filter nearby locations from a data file
    // Example: Load data and filter locations within a certain radius
    const data = require('./data.json'); // Replace with your data source
    const radius = 5000; // 5 kilometers (adjust as needed)
    const filteredLocations = data.filter((location) => {
      const distance = geolib.getDistance(userLocation, {
        latitude: location.latitude,
        longitude: location.longitude,
      });
      return distance <= radius;
    });
    setNearbyLocations(filteredLocations);
  };

  return (
    <div>
      {!cameraAccess ? (
        <button onClick={requestCameraAccess}>Access Camera</button>
      ) : (
        <div>
          <button onClick={checkNearbyLocations}>Check Nearby Locations</button>
          <a-scene embedded arjs="trackingMethod: best; sourceType: webcam;">
            {/* AR Marker */}
            <a-marker preset="hiro">
              {/* Add 3D content to display when the marker is detected */}
              <a-box position="0 0.5 0" material="color: red;"></a-box>
            </a-marker>
            {/* Camera to view the AR scene */}
            <a-entity camera></a-entity>
          </a-scene>
          {/* Display nearby locations */}
          <div>
            <h2>Nearby Locations:</h2>
            <ul>
              {nearbyLocations.map((location, index) => (
                <li key={index}>
                  {location.name} ({location.latitude}, {location.longitude})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ARComponent;
