import { Box, Button, Typography } from '@mui/material';
import HeroImage from '../../assets/Herosection/Heroimg.jpg';
 
const Herosection = () => {
  return (
    <Box
      sx={{
        mb: { xs: 3, sm: 4 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `linear-gradient(rgba(12, 63, 64, 0.3), rgba(12, 63, 64, 0.3)), url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundColor: '#000',
        height: '800px',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          width: '80%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          textAlign: { xs: 'center', sm: 'left' },
          gap: { sm: 4 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              width: { xs: '100%', md: '80%' },
              fontSize: { xs: '1rem', sm: '1.5rem' },
              fontWeight: { xs: '300', sm: '500' },
              mb: 2,
            }}
          >
            Our paralegals are well knowledgeable about Alberta&apos;s paralegal
            system.
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              mt: 3,
              width: { xs: '100%', md: '80%' },
              fontSize: { xs: '1.5rem', sm: '2.5rem' },
              fontWeight: { xs: '600', sm: '700' },
            }}
          >
            Kilian Holdings Ltd-court agents, small civil claims, Divorce
            Paralegal.
          </Typography>
          <Button
            sx={{
              color: '#000',
              backgroundColor: '#fff',
              width: { xs: '100%', sm: 'auto', lg: "15%" },
              mt: 3,
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            LEARN MORE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
 
export default Herosection;