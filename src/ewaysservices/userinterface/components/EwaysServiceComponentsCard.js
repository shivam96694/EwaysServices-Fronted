import React, { useState } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EwaysServiceComponentsCard({ item }) {
  const [getScale, setScale] = useState('scale(1)');
  const navigate = useNavigate();

  const handleClick = () => {
    // Convert title to slug like "web-development"
    const slug = item.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/servicepage/${slug}`, { state: item });
  };
  return (
    <Paper
          onClick={handleClick} 
      onMouseLeave={() => setScale('scale(1)')} 
      onMouseOver={() => setScale("scale(1.05)")}
      style={{
        cursor:'pointer',
        transition:'0.5s ease',
        transform:getScale,
        width: 265,
        height: 330,
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        borderRadius:20,
        margin:10,
        borderBottom: '5px solid #00a8ff'
      }}
    >
      <Box sx={{
        width: 90,
        height: 90,
        borderRadius: '50%',
        backgroundColor: '#00a8ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
      }}>
        <img src={item.icon} alt={item.title} style={{ width: '100%', height: '100%' }} />
      </Box>

      <Typography sx={{ fontWeight: 'bold', marginTop: 2, fontSize: '1.1rem' }}>
        {item.title}
      </Typography>

      <Typography sx={{ fontSize: '0.95rem', textAlign: 'center', color: '#555', padding: '0 10px', marginTop: 1,marginBottom:2 }}>
        {item.desc}
      </Typography>
    </Paper>
  );
}
