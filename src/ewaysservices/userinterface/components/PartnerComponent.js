import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PartnerComponent() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 3, md: 12 },
        background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
      }}
    >
      {/* Banner */}
      <Box textAlign="center" mb={6}>
      

        <Typography
          variant="h4"
          sx={{ mt: 3, fontWeight: "bold", color: "#00a8ff" }}
        >
          Partner With Eways Services
        </Typography>

        <Typography
          sx={{ color: "#555", mt: 1, maxWidth: 700, mx: "auto" }}
        >
          Grow your business with our strong digital ecosystem and technical
          expertise. Let’s work together to build smart, scalable and profitable
          solutions.
        </Typography>
      </Box>

     {/* Benefits */}
<Grid  container textAlign="center" spacing={4} sx={{ mb: 8, mt: 4 }}>
  {[
    {
      title: "High-Quality Development",
      desc: "Enterprise-grade applications built with clean UI and solid architecture.",
      features: [
        "Modern frameworks",
        "Fast & responsive UI",
        "Secure coding standards"
      ]
    },
    {
      title: "Scalable Infrastructure",
      desc: "Technology that grows with your business requirements.",
      features: [
        "Cloud-ready design",
        "Microservices support",
        "High-availability systems"
      ]
    },
    {
      title: "Strong Technical Support",
      desc: "Dedicated team offering end-to-end maintenance and upgrades.",
      features: [
        "24/7 support available",
        "Regular updates",
        "Bug fixes & monitoring"
      ]
    },
    {
      title: "Affordable Pricing",
      desc: "Premium digital solutions at budget-friendly pricing.",
      features: [
        "Customizable plans",
        "Flexible billing",
        "Long-term partnership discounts"
      ]
    },
    {
      title: "Trusted by Businesses",
      desc: "We have a proven track record of delivering real business results.",
      features: [
        "High client retention",
        "Transparent communication",
        "Result-oriented approach"
      ]
    }
  ].map((item, index) => (
    <Grid size={4} item xs={12} md={4} key={index}>
      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 4,
          minHeight: 230,
          textAlign: "center",
          borderBottom: "4px solid #00a8ff",
          transition: "0.3s",
          "&:hover": { transform: "translateY(-5px)" }
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#00a8ff",
            mb: 1,
            textTransform: "capitalize"
          }}
        >
          {item.title}
        </Typography>

        <Typography sx={{ color: "#555", mb: 2 }}>
          {item.desc}
        </Typography>

        {/* Features */}
        <Box sx={{ textAlign: "left", mx: "auto" }}>
          {item.features.map((f, i) => (
            <Typography
              key={i}
              sx={{ fontSize: 14, color: "#555", mb: 0.5 }}
            >
              • {f}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Grid>
  ))}
</Grid>

    
      {/* CTA */}
      <Box textAlign="center">
        <Button
          variant="contained"
          sx={{
            background: "#00a8ff",
            px: 4,
            py: 1.5,
            borderRadius: "25px",
            fontWeight: "bold",
            "&:hover": { background: "#008bd1" },
          }}
          onClick={() => navigate("/contact")}
        >
          Contact Us to Partner
        </Button>
      </Box>
    </Box>
  );
}
