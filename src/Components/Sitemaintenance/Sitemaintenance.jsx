import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import img from "../../assets/output-onlinegiftools.gif";

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const glowEffect = keyframes`
  0% { text-shadow: 0 0 5px #ff9800; }
  50% { text-shadow: 0 0 20px #ff9800; }
  100% { text-shadow: 0 0 5px #ff9800; }
`;

const Sitemaintenance = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(12, 12, 12, 0.27)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          animation: `${fadeIn} 1.5s ease-in-out`,
          backdropFilter: "blur(1.8px)",
        }}
      >
        <CssBaseline />
        <CssBaseline />
        <img
          src={img}
          alt="Maintenance Logo"
          style={{
            height: "400px",
            mixBlendMode: "color-burn",
            marginBottom: "22px",
            animation: "pulse 2s infinite",
          }}
        />

        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "34px", sm: "40px", md: "50px", lg: "60px" },
            mb: 2,
            animation: `${glowEffect} 2s infinite alternate`,
          }}
        >
          Scheduled Maintenance is Ongoing!
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "24px", sm: "28px", md: "32px" },
            opacity: 0.8,
          }}
        >
          We&apos;re making improvements to serve you better.
          <br />
          Check back soon!
        </Typography>
      </Box>
    </Box>
  );
};

export default Sitemaintenance;
