import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function LegalComponents() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 3, md: 12 },
        background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", color: "#00a8ff", mb: 4 }}
      >
        Legal & Policy Information
      </Typography>

      {/* ================= PRIVACY POLICY SECTION ================= */}
      <section id="privacy">
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#00a8ff" }}>
          Privacy Policy
        </Typography>
        <Typography sx={{ color: "#555", mt: 2, lineHeight: 1.7 }}>
          We respect your privacy and are committed to protecting personal
          information. This section explains what data we collect, how we use it,
          and your rights regarding your information.
          <br /><br />
          • We never sell your data  
          • We collect information only for improving services  
          • You can request data deletion anytime  
        </Typography>
      </section>

      {/* Divider */}
      <Box sx={{ height: 40 }} />

      {/* ================= SECURITY SECTION ================= */}
      <section id="security">
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#00a8ff" }}>
          Security Practices
        </Typography>
        <Typography sx={{ color: "#555", mt: 2, lineHeight: 1.7 }}>
          At Eways Services, protecting user data is our top priority. We use:
          <br /><br />
          • Encrypted databases  
          • Secure authentication  
          • Regular security audits  
          • Strict access control for sensitive data  
        </Typography>
      </section>

      {/* Divider */}
      <Box sx={{ height: 40 }} />

      {/* ================= POLICIES SECTION ================= */}
      <section id="policies">
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#00a8ff" }}>
          Company Policies
        </Typography>
        <Typography sx={{ color: "#555", mt: 2, lineHeight: 1.7 }}>
          These policies outline expected user behavior, service rules, and
          operational standards.
          <br /><br />
          • No misuse of services  
          • No illegal activity allowed  
          • Users must provide accurate information  
          • Refund & cancellation policies vary by service  
        </Typography>
      </section>

      <Box sx={{ height: 50 }} />
    </Box>
  );
}
