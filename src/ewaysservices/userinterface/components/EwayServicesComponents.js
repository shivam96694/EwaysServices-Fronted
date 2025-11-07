import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import EwaysCard from "./EwaysServiceComponentsCard";

import wds from "../../../assets/developer.png";
import appIcon from "../../../assets/app-development.png";
import apiIcon from "../../../assets/api.png";
import digitalPathshalaIcon from "../../../assets/gateway.png";
import erpIcon from "../../../assets/blended-learning.png";
import crmIcon from "../../../assets/progress.png";
import paymentIcon from "../../../assets/success.png";
import consultingIcon from "../../../assets/doctor-patient.png";

export default function AstrologyServices() {

  const data = [
  {
    id: 1,
    icon: wds, // Web Development Service
    title: "Web Development",
    desc: "We design and develop responsive, high-performing websites tailored to your business needs, ensuring scalability, security, and smooth performance."
  },
  {
    id: 2,
    icon: appIcon, // Mobile App Development
    title: "Mobile App Development",
    desc: "Get custom Android and iOS applications built with modern frameworks for seamless user experiences and optimized business operations."
  },
  {
    id: 3,
    icon: apiIcon, // API Solutions
    title: "API Integration & Development",
    desc: "We provide API solutions for travel, insurance, payment gateways, and more — enabling smooth communication between your systems and third-party platforms."
  },
  {
    id: 4,
    icon: digitalPathshalaIcon, // Education Tech
    title: "Digital Pathshala",
    desc: "An all-in-one education management system for schools and colleges — automate attendance, fees, exams, and communication effortlessly."
  },
  {
    id: 5,
    icon: erpIcon, // ERP Systems
    title: "ERP Solutions",
    desc: "Empower your enterprise with a complete ERP system to manage finance, HR, inventory, and resources efficiently from one central dashboard."
  },
  {
    id: 6,
    icon: crmIcon, // Customer Relationship Management
    title: "CRM Solutions",
    desc: "Boost your customer engagement with our intelligent CRM systems that streamline lead management, sales tracking, and client communication."
  },
  {
    id: 7,
    icon: paymentIcon, // Payment Solutions
    title: "Payment Gateway Solutions",
    desc: "Integrate secure, reliable, and fast payment gateways for your website or app — supporting UPI, credit cards, wallets, and international payments."
  },
  {
    id: 8,
    icon: consultingIcon, // Consultancy Service
    title: "Consultancy & IT Support",
    desc: "Get expert IT consultancy for your digital transformation journey — from project planning to deployment and technical support."
  }
];


  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  const handleLeft = () => sliderRef.current.slickPrev();
  const handleRight = () => sliderRef.current.slickNext();

  return (
    <Box sx={{ width: "100%", background: "#00a8ff", py: 5 }}>
      {/* Inner Box — content centered & 80% width */}
      <Box sx={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          EWAYS SERVICES
        </Typography>

        <Box sx={{ position: "relative" }}>
          {window.innerWidth >= 600 && (
            <Box
              onClick={handleLeft}
              sx={{
                position: "absolute",
                left: -40,
                top: "45%",
                zIndex: 2,
                cursor: "pointer",
                background: "#fff",
                borderRadius: "50%",
                width: 34,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              <KeyboardArrowLeftIcon />
            </Box>
          )}

          <Slider {...settings} ref={sliderRef}>
            {data.map((item) => (
              <EwaysCard key={item.id} item={item} />
            ))}
          </Slider>

          {window.innerWidth >= 600 && (
            <Box
              onClick={handleRight}
              sx={{
                position: "absolute",
                left: '98.7%',
                top: "45%",
                zIndex: 2,
                cursor: "pointer",
                background: "#fff",
                borderRadius: "50%",
                width: 34,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              <KeyboardArrowRightIcon />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
