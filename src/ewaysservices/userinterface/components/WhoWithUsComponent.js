import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Swal from "sweetalert2";

// Example team images
import team1 from "../../../assets/food.jpg";
import team2 from "../../../assets/food.jpg";
import team3 from "../../../assets/food.jpg";
import team4 from "../../../assets/food.jpg";

export default function WhoWithUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Shivam Sharma",
      role: "Founder & Full Stack Developer",
      image: team1,
      linkedin: "https://linkedin.com/in/shivamro4545",
      email: "shivam@ewaysservices.com",
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "UI/UX Designer",
      image: team2,
      linkedin: "#",
      email: "priya@ewaysservices.com",
    },
    {
      id: 3,
      name: "Rohit Verma",
      role: "Backend Developer",
      image: team3,
      linkedin: "#",
      email: "rohit@ewaysservices.com",
    },
    {
      id: 4,
      name: "Amit Gupta",
      role: "Project Manager",
      image: team4,
      linkedin: "#",
      email: "amit@ewaysservices.com",
    },
  ];

  const handleSocialClick = (link) => {
    if (link === "#") {
      Swal.fire({
        title: "Coming Soon!",
        text: "This profile will be available soon.",
        icon: "info",
        confirmButtonColor: "#00a8ff",
      });
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <Box
      sx={{width:'100%',
        py: 8,
        px: { xs: 3, md: 10 },
        background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 1 }}
        >
          Who With Us
        </Typography>
        <Typography sx={{ color: "#555", maxWidth: 700, mx: "auto" }}>
          Meet the talented and passionate individuals driving Eways Services
          forward. Our diverse team works together to create innovative digital
          experiences, deliver quality, and build long-term partnerships.
        </Typography>
      </Box>

      {/* Team Grid */}
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={3} key={member.id}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                transition: "0.4s",
                "&:hover": { transform: "scale(1.03)" },
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={member.image}
                alt={member.name}
                sx={{
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#00a8ff",
                    mb: 0.5,
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </Typography>
                <Typography sx={{ color: "#555", mb: 1 }}>
                  {member.role}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mt: 1,
                  }}
                >
                  <LinkedInIcon
                    sx={{
                      color: "#0077b5",
                      cursor: "pointer",
                      "&:hover": { color: "#00a8ff" },
                    }}
                    onClick={() => handleSocialClick(member.linkedin)}
                  />
                  <EmailIcon
                    sx={{
                      color: "#555",
                      cursor: "pointer",
                      "&:hover": { color: "#00a8ff" },
                    }}
                    onClick={() =>
                      Swal.fire({
                        title: "Email",
                        text: `${member.email}`,
                        icon: "info",
                        confirmButtonColor: "#00a8ff",
                      })
                    }
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Partner Section */}
      <Paper
        elevation={3}
        sx={{
          mt: 10,
          p: { xs: 4, md: 6 },
          textAlign: "center",
          borderRadius: 4,
          background: "#00a8ff",
          color: "white",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Our Partners
        </Typography>
        <Typography sx={{ mb: 3 }}>
          We collaborate with forward-thinking businesses and organizations that
          share our passion for innovation, technology, and growth.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#00a8ff",
            borderRadius: "25px",
            px: 4,
            py: 1,
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#f9f9f9" },
          }}
          onClick={() =>
            Swal.fire({
              title: "Partner With Us",
              text: "Interested in collaboration? Let's connect and grow together!",
              icon: "success",
              confirmButtonColor: "#00a8ff",
            })
          }
        >
          Partner With Us
        </Button>
      </Paper>
    </Box>
  );
}
