import React from 'react';
import { Box, Typography } from '@mui/material';

const ChannelNavbar = () => {
  const serverName = 'Kurizu';
  const bannerImageUrl = 'https://images6.alphacoders.com/130/thumbbig-1302043.webp';

  return (
    <Box
      sx={{
        position: 'relative',
        height: '12vh',
      }}
    >
      <img
        src={bannerImageUrl}
        alt="Server Banner"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '10%',
        }}
      >
        <Typography sx={{ color: '#eff0f2', fontSize: '1rem', fontWeight: 'bold', fontFamily: 'GG Sans, sans-serif' }}>
          {serverName}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChannelNavbar;
