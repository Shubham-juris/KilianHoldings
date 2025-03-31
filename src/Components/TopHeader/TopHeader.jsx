import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
const TopHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C3F40',

        height: '60px',
      }}
    >
      <Typography
        sx={{
          padding: 1,
          fontSize: { xs: '10px', sm: '13px', md: '14px' },
          color: '#fff',
          textAlign: 'center',
        }}
      >
        We extend our services to Innisfail, Drayton Valley, Slave Lake, and
        Barrhead.
      </Typography>
    </Box>
  );
};

export default TopHeader;
