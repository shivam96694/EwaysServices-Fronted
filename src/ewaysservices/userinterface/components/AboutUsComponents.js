import React from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import PeopleIcon from "@mui/icons-material/Groups";
import VerifiedIcon from "@mui/icons-material/VerifiedUser";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import aboutImg from "../../../assets/about-eway.png"; // 👈 replace with your image

export default function AboutUsComponents() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        px: { xs: 3, md: 10 },
        background: "linear-gradient(180deg, #fff 0%, #00a8ff 100%)",
      }}
    >
      {/* Header Section */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 2 }}
        >
          About Eways Services
        </Typography>
        <Typography
          sx={{ color: "#555", maxWidth: 700, mx: "auto", lineHeight: 1.7 }}
        >
          Eways Services is a fast-growing digital solutions company focused on
          delivering innovative web, mobile, and business automation products.
          We help brands grow through smart design, robust technology, and a
          passion for results.
        </Typography>
      </Box>

      {/* Main Info Section */}
      <Grid
        container
        spacing={5}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 8 }}
      >
        

        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#00a8ff", mb: 2 }}
          >
            Who We Are
          </Typography>
          <Typography sx={{ color: "#555", mb: 2, lineHeight: 1.8 }}>
            Founded with a vision to simplify digital transformation, Eways
            Services provides end-to-end IT services — from website development
            and mobile app design to ERP, CRM, and API integrations.
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.8 }}>
            Our team of skilled developers, designers, and strategists
            collaborate to deliver solutions that are not only functional but
            also help our clients achieve measurable growth.
          </Typography>
        </Grid>
      </Grid>

      {/* Mission & Vision Section */}
      <Grid container spacing={5} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6} mb={5}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 4,
              height: "100%",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#00a8ff", mb: 2 }}
            >
              Our Mission
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
              To empower businesses of all sizes with reliable and efficient
              technology solutions that drive innovation, productivity, and
              growth. We aim to simplify complex digital challenges through
              creativity, expertise, and commitment.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 4,
              height: "100%",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.02)" },
              
              
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#00a8ff", mb: 2 }}
            >
              Our Vision
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
              To become a trusted global leader in IT services by building
              meaningful digital experiences that transform businesses, connect
              people, and inspire innovation across industries.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Our Values Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 2 }}
        >
          Our Core Values
        </Typography>
        <Typography sx={{ color: "#555", mb: 5 }}>
          We believe great companies are built on strong values. At Eways
          Services, these principles guide everything we do.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <PeopleIcon sx={{ fontSize: 40, color: "#00a8ff" }} />,
              title: "Teamwork",
              desc: "We collaborate closely and grow together as a unified team.",
            },
            {
              icon: <VerifiedIcon sx={{ fontSize: 40, color: "#00a8ff" }} />,
              title: "Integrity",
              desc: "We deliver what we promise, maintaining transparency and trust.",
            },
            {
              icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: "#00a8ff" }} />,
              title: "Innovation",
              desc: "We embrace creativity and strive for continuous improvement.",
            },
            {
              icon: <RocketLaunchIcon sx={{ fontSize: 40, color: "#00a8ff" }} />,
              title: "Excellence",
              desc: "We aim to exceed expectations in every project we undertake.",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} mb={5}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  width:'400px',
                  height: "200px",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#e6f4ff",
                    width: 70,
                    height: 70,
                    margin: "0 auto 15px",
                  }}
                >
                  {item.icon}
                </Avatar>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#00a8ff", mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#555", fontSize: 14 }}>
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
