import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          handleGeolocationSuccess,
          handleGeolocationError
        );
      } else {
        console.error('Geolocation is not available on this device.');
      }
    }
  }, [cameraAccess]);

  const requestCameraAccess = () => {
    
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
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
    } else {
      console.error('Camera access is not available on this device.');
    }
  };

  const checkNearbyLocations = () => {
    const data = [
      {
        name: 'Location 1',
        latitude: 12.3456,
        longitude: 78.9101,
      },
      {
        name: 'Location 2',
        latitude: 26.7766,
        longitude: 75.8421,
      },
    ];

    const radius = 5; // 5 kilometers
    const filteredLocations = data.filter((location) => {
      const distance = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        location.latitude,
        location.longitude
      );
      return distance <= radius;
    });

    setNearbyLocations(filteredLocations);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const degToRad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      {!cameraAccess ? (
        <button onClick={requestCameraAccess}>Access Camera</button>
      ) : (
        <div>
          <button onClick={checkNearbyLocations}>Check Nearby Jobs</button>
          <div>
            <h2>Nearby Jobs:</h2>
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
