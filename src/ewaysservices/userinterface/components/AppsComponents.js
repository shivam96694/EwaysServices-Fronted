import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import playIcon from "../../../assets/playstore.webp";
import appIcon from "../../../assets/appstore.webp";

export default function AppsComponents() {
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
          Apps For You
        </Typography>

        <Typography sx={{ color: "#555", maxWidth: 700, mx: "auto" }}>
          Discover mobile applications crafted by Eways Services for productivity,
          management, and seamless digital operations.
        </Typography>
      </Box>

      {/* App Cards */}
    {/* App Cards */}
<Grid container spacing={4} sx={{ mt: 4 }}>
  {[
    {
      name: "Eways CRM App",
      desc: "Manage leads, clients, tasks, and track your full sales pipeline.",
      features: [
        "Lead Management",
        "Smart Notifications",
        "Sales Dashboard",
        "Team Collaboration",
      ],
     
    },
    {
      name: "Digital Pathshala App",
      desc: "A modern school/college management app for students, teachers, and parents.",
      features: [
        "Online Attendance",
        "Exam & Result Portal",
        "Fee Management",
        "Live Classes",
      ],
     
    },
    {
      name: "Eways Billing App",
      desc: "Quick and easy billing solution designed for small and medium businesses.",
      features: [
        "Invoice Generator",
        "Expense Tracking",
        "Customer Ledger",
        "GST Compatible",
      ],
    
    },
  ].map((app, index) => (
    <Grid item size={4} xs={12} md={4} key={index}>
      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 4,
          minHeight: 220,
          textAlign: "center",
          transition: "0.3s",
          borderBottom: "4px solid #00a8ff",
          "&:hover": { transform: "translateY(-5px)" },
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 1 }}
        >
          {app.name}
        </Typography>

        <Typography sx={{ color: "#555", mb: 2 }}>
          {app.desc}
        </Typography>

        {/* Features List */}
        <Box sx={{ textAlign: "left", mx: "auto" }}>
          {app.features.map((f, i) => (
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

      {/* Download Buttons */}
      <Box textAlign="center" mt={6}>
        <Typography sx={{ mb: 2, color: "#555" }}>
          Download the Eways Apps:
        </Typography>

        <Box display="flex" justifyContent="center" gap={2}>
          <img
            src={playIcon}
            alt="Google Play"
            style={{ cursor: "pointer", width: 150 }}
          />
          <img
            src={appIcon}
            alt="App Store"
            style={{ cursor: "pointer", width: 150 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
