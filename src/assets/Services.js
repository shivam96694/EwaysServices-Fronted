import React, { useEffect, useState } from "react";
import { getData } from "../../../services/FetchApiServices";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    const data = await getData("api/services");
    setServices(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      {loading ? (
        <p>Loading services...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {services.map((service) => (
            <div key={service.service_id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "10px" }}>
              <h3>{service.service_name}</h3>
              <p>{service.service_description}</p>
              <p>
                <strong>Price:</strong> ₹{service.service_price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Services;
