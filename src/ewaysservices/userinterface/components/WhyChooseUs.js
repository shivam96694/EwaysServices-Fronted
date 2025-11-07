import React from "react";
import { FaSmile, FaShieldAlt, FaCogs, FaBrain, FaUsersCog, FaHandsHelping, FaDollarSign, FaHandshake } from "react-icons/fa";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <FaSmile size={45} color="#001f60" />,
      title: "Customer Satisfaction",
      text: "We focus on long-term client relationships by delivering solutions that truly meet your needs. Our dedicated support team ensures your satisfaction at every stage of the project.",
    },
    {
      icon: <FaShieldAlt size={45} color="#001f60" />,
      title: "Quality Assurance",
      text: "Our development process includes rigorous testing and validation to guarantee secure, efficient, and bug-free digital solutions that meet international quality standards.",
    },
    {
      icon: <FaBrain size={45} color="#001f60" />,
      title: "Expertise",
      text: "Our team consists of experienced professionals skilled in the latest technologies — from web and mobile app development to ERP, CRM, and API integrations.",
    },
    {
      icon: <FaCogs size={45} color="#001f60" />,
      title: "Customized Solutions",
      text: "Every business is unique. We design tailored digital solutions that align perfectly with your goals — whether it’s a website, mobile app, or enterprise system.",
    },
    {
      icon: <FaUsersCog size={45} color="#001f60" />,
      title: "Innovation",
      text: "We stay ahead with modern technologies, smart automation, and creative problem-solving — ensuring your platform is future-ready and efficient.",
    },
    {
      icon: <FaHandsHelping size={45} color="#001f60" />,
      title: "24/7 Support",
      text: "We provide round-the-clock support and maintenance so your website, app, or platform stays up and running smoothly without interruptions.",
    },
    {
      icon: <FaDollarSign size={45} color="#001f60" />,
      title: "Affordable & Transparent Pricing",
      text: "We offer competitive pricing without compromising quality. Our transparent project approach ensures no hidden costs — just results you can trust.",
    },
    {
      icon: <FaHandshake size={45} color="#001f60" />,
      title: "Reliability & Commitment",
      text: "We deliver what we promise. Our commitment to timelines, quality, and ethical work practices has made us a trusted name in digital services.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "60px 80px",
        backgroundColor: "#f8f9fb",
        fontFamily: "Poppins, sans-serif",
        color: "#001f60",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "10px" }}>
          Why Choose Us?
        </h2>
        <p style={{ fontSize: "1rem", color: "#444", maxWidth: "700px", margin: "0 auto" }}>
          We are different from others. Here’s why businesses trust <b>EWAYS Services Pvt. Ltd.</b> as their technology partner:
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
            }}
          >
            <div style={{ marginBottom: "15px" }}>{item.icon}</div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.6" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
