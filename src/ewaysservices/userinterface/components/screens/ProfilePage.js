import React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Divider,
  Stack,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "DELETE_USER" });
    localStorage.removeItem("user");

    Swal.fire({
      title: "Logged out successfully!",
      icon: "success",
      timer: 2000,
      toast: true,
      showConfirmButton: false,
      position: "top-end",
    });

    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, sm: 3, md: 5 },

        // Smooth page animation
        animation: "fadeIn 0.6s ease-in-out",

        "@keyframes fadeIn": {
          from: {
            opacity: 0,
            transform: "translateY(20px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 15px 45px rgba(0,0,0,0.12)",
          transition: "all 0.3s ease",

          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 20px 55px rgba(0,0,0,0.16)",
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
            padding: { xs: 3, sm: 4 },
            textAlign: "center",
            color: "white",
          }}
        >
          <Avatar
            sx={{
              width: 90,
              height: 90,
              margin: "0 auto 15px",
              backgroundColor: "white",
              color: "#1976d2",
              fontSize: 40,
              fontWeight: "bold",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",

              "&:hover": {
                transform: "scale(1.08) rotate(3deg)",
              },
            }}
          >
            {user?.username?.charAt(0)?.toUpperCase() || "U"}
          </Avatar>

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              wordBreak: "break-word",
            }}
          >
            {user?.username || "User"}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.85,
              marginTop: 0.5,
            }}
          >
            EwaysServices User
          </Typography>
        </Box>

        <CardContent sx={{ padding: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ marginBottom: 2.5 }}
          >
            Personal Information
          </Typography>

          <Stack spacing={2}>
            {/* Name */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: 2,
                borderRadius: 2,
                backgroundColor: "#f7f9fc",
                transition: "all 0.3s ease",

                "&:hover": {
                  backgroundColor: "#eef4fb",
                  transform: "translateX(5px)",
                },
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#e3f2fd",
                  color: "#1976d2",
                }}
              >
                <PersonIcon />
              </Avatar>

              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  Full Name
                </Typography>

                <Typography fontWeight="600">
                  {user?.username || "Not available"}
                </Typography>
              </Box>
            </Box>

            {/* Email */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: 2,
                borderRadius: 2,
                backgroundColor: "#f7f9fc",
                transition: "all 0.3s ease",

                "&:hover": {
                  backgroundColor: "#eef4fb",
                  transform: "translateX(5px)",
                },
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#e8f5e9",
                  color: "#2e7d32",
                }}
              >
                <EmailIcon />
              </Avatar>

              <Box
                sx={{
                  minWidth: 0,
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  Email Address
                </Typography>

                <Typography
                  fontWeight="600"
                  sx={{
                    wordBreak: "break-word",
                  }}
                >
                  {user?.email || "Not available"}
                </Typography>
              </Box>
            </Box>

            {/* Phone */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: 2,
                borderRadius: 2,
                backgroundColor: "#f7f9fc",
                transition: "all 0.3s ease",

                "&:hover": {
                  backgroundColor: "#eef4fb",
                  transform: "translateX(5px)",
                },
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#fff3e0",
                  color: "#ef6c00",
                }}
              >
                <PhoneIcon />
              </Avatar>

              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  Phone Number
                </Typography>

                <Typography fontWeight="600">
                  {user?.mobile || "Not available"}
                </Typography>
              </Box>
            </Box>
          </Stack>

          <Divider sx={{ margin: "25px 0" }} />

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Button
              fullWidth
              variant="outlined"
              startIcon={<EditIcon />}
             onClick={() => navigate("/edit-profile")}
              sx={{
                borderRadius: 2,
                padding: "10px 20px",
                textTransform: "none",
                fontWeight: "bold",
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              Edit Profile
            </Button>

            <Button
              fullWidth
              variant="contained"
              color="error"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                borderRadius: 2,
                padding: "10px 20px",
                textTransform: "none",
                fontWeight: "bold",
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              Logout
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;