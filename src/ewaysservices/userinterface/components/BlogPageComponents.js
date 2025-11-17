import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import Swal from "sweetalert2";

import blog1 from "../../../assets/video.png";
import blog2 from "../../../assets/blog.png";
import blog3 from "../../../assets/blog (1).png";

export default function BlogPageComponents() {
  const [blogs] = useState([
    {
      id: 1,
      title: "Transforming Businesses Through Digital Innovation",
      author: "Eways Team",
      date: "Oct 20, 2025",
      image: blog1,
      excerpt:
        "Discover how Eways Services helps startups and enterprises achieve success through technology, automation, and creative digital strategies.",
    },
    {
      id: 2,
      title: "Why Every Business Needs a Strong Web Presence",
      author: "Shivam Sharma",
      date: "Nov 02, 2025",
      image: blog2,
      excerpt:
        "Learn why having a modern, responsive website is essential for brand credibility, user engagement, and long-term business growth.",
    },
    {
      id: 3,
      title: "Top 5 Tech Trends Shaping the Future of IT Services",
      author: "Team Eways",
      date: "Nov 10, 2025",
      image: blog3,
      excerpt:
        "AI, automation, and API integration are revolutionizing digital services. Find out how Eways is adapting to these changes for clients worldwide.",
    },
  ]);

  const handleReadMore = (title) => {
    Swal.fire({
      title: "Coming Soon!",
      text: `Full article for "${title}" will be published soon.`,
      icon: "info",
      confirmButtonColor: "#00a8ff",
    });
  };

  return (
    <Box
      sx={{
        width: "89.4%",
        py: 8,
        px: { xs: 3, md: 10 },
        background: "linear-gradient(180deg, #f0f9ff 30%, #ffffff 100%)",
      }}
    >
      {/* Page Title */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#00a8ff", mb: 1 }}
        >
          Eways Services Blog
        </Typography>
        <Typography sx={{ color: "#555", maxWidth: 600, mx: "auto" }}>
          Insights, trends, and updates from the Eways Services team.  
          Stay informed about the latest in technology, design, and innovation.
        </Typography>
      </Box>

      {/* Blog Cards */}
      <Grid container spacing={4} justifyContent='center'>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card
              elevation={4}
              sx={{height:'400px',
                width:'800px',
                borderRadius: 3,
                transition: "0.4s",
                "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
               
                image={blog.image}
                alt={blog.title}
                style={{objectFit:'contain',width:'50%'}}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#00a8ff",
                    mb: 1,
                    lineHeight: 1.4,
                  }}
                >
                  {blog.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1.5,
                    color: "#777",
                    fontSize: 14,
                  }}
                >
                  <PersonIcon sx={{ fontSize: 18 }} /> {blog.author}
                  <CalendarMonthIcon sx={{ fontSize: 18, ml: 2 }} /> {blog.date}
                </Box>

                <Typography sx={{ color: "#555", fontSize: 14 }}>
                  {blog.excerpt}
                </Typography>

                <Button
                  onClick={() => handleReadMore(blog.title)}
                  variant="outlined"
                  sx={{
                    mt: 2,
                    borderColor: "#00a8ff",
                    color: "#00a8ff",
                    borderRadius: "20px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#00a8ff",
                      color: "#fff",
                    },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Newsletter / CTA Section */}
      <Paper
        elevation={2}
        sx={{
            width:'80%',
          mt: 10,
          p: { xs: 4, md: 6 },
          textAlign: "center",
          borderRadius: 4,
          background: "#00a8ff",
          color: "white",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Stay Updated!
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Subscribe to our newsletter to get the latest tech updates and
          insights from Eways Services.
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
              title: "Subscribed!",
              text: "Thank you for subscribing to our updates!",
              icon: "success",
              confirmButtonColor: "#00a8ff",
            })
          }
        >
          Subscribe Now
        </Button>
      </Paper>
    </Box>
  );
}
