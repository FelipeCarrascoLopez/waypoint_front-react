import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 0,
  lng: 0,
};

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null); 

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await fetch("http://localhost:3000/api/v1/gps");
        const data = await response.json();
        console.log("Vehicles fetched:", data);
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    }
    fetchVehicles();
  }, []);

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
        {vehicles.map((vehicle) => {
          const lat = parseFloat(vehicle.latitude);
          const lng = parseFloat(vehicle.longitude);

          if (isNaN(lat) || isNaN(lng)) {
            console.error(`Invalid coordinates for vehicle ${vehicle.vehicle_identifier}`);
            return null;
          }

          return (
            <Marker
              key={vehicle.identifier}
              position={{ lat, lng }}
              label={vehicle.vehicle_identifier}
              onClick={() => setSelectedVehicle(vehicle)} 
            />
          );
        })}
      </GoogleMap>

      {selectedVehicle && (
        <div style={infoBoxStyle}>
          <h3>Información del Vehículo</h3>
          <p><strong>Identificador:</strong> {selectedVehicle.vehicle_identifier}</p>
          <p><strong>Latitud:</strong> {selectedVehicle.latitude}</p>
          <p><strong>Longitud:</strong> {selectedVehicle.longitude}</p>
          <button onClick={() => setSelectedVehicle(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

const infoBoxStyle = {
  marginTop: "20px",
  padding: "15px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
  width: "100%",
  maxWidth: "600px",
};

export default Map;
