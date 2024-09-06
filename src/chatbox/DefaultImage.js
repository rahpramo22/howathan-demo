import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

function DeafultImage({ image, title, overlayText }) {
  return (
    <Card sx={{ position: 'relative', display: 'inline-block' }}>
      {/* Full Image */}
      <CardMedia
        component="img"
        image={`../images/${image}.svg`}
        alt={title}
        sx={{ width: '100%', height: 'auto' }}
      />
      {/* Overlay with text */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          fontSize: '15px',
          bgcolor: 'rgba(0, 0, 0, 0.6)', // semi-transparent background
          color: 'white',
          padding: '2px',
          opacity:'0.8'
        }}
      >
        <Typography>{overlayText}</Typography>
      </Box>
    </Card>
  );
}

export default DeafultImage;
