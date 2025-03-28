import { Box, Button, Typography } from "@mui/material";
import HeroImage from "../../assets/Herosection/HeroImage.webp";
const Herosection = () => {
  return (
    <Box
      sx={{
        mb: { xs: 3, sm: 4 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        height: "800px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            width: { xs: "80%", md: "50%" },
            fontSize: { xs: "1rem", sm: "1.5rem" },
            fontWeight: { xs: "300", sm: "500" },
            mb: 2,
          }}
        >
          Our paralegals are well knowledgeable about Alberta&apos;s legal system.
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            mt: 3,
            width: { xs: "80%", md: "50%" },
            fontSize: { xs: "1.5rem", sm: "2.5rem" },
            fontWeight: { xs: "600", sm: "700" },
          }}
        >
          Kilian Holdings Ltd-court agents, small civil claims, Divorce
          Paralegal.
        </Typography>
        <Button
          sx={{
            color: "#000000",
            backgroundColor: "#fff",
            width: { xs: "80%", sm: "12%" },
            mt: 3,
          }}
        >
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
};

export default Herosection;
