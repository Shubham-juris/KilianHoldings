import { Box, Button, Typography } from "@mui/material";
import HeroImage from "../../assets/Herosection/Heroimg.jpg";

const Herosection = () => {
  return (
    <>
      <style>{`
        .notice-slider-red {
          overflow: hidden;
          background:#0C3F40;
          color: yellow;
          padding: 8px 0;
        }
        .notice-text {
          display: inline-block;
          white-space: nowrap;
          padding-left: 100%;
          animation: slide 80s linear infinite;
          font-size: 2.05rem;
        }
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      <Box
        sx={{
          mb: { xs: 3, sm: 4 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundImage: `linear-gradient(rgba(12, 63, 64, 0.3), rgba(12, 63, 64, 0.3)), url(${HeroImage})`,
          backgroundSize: "cover",
          height: "800px",
        }}
      >
        <Box
          className="notice-slider-red"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
          }}
        >
          <span className="notice-text">
            Please be advised that our office is currently operating at full
            capacity. Therefore, we are unable to accept any new clients or new
            matters until 26 January 2026. During this period, we will only be
            attending to collection-related matters. For any urgent matters or
            inquiries pertaining to existing clients, please contact us through
            the same email address.” kilianholdingltd@gmail.com
          </span>
        </Box>

        <Box
          sx={{
            maxWidth: "1200px",
            width: "80%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: { xs: "center", sm: "left" },
            gap: { sm: 4 },
            mt: 5,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                width: { xs: "100%", md: "80%" },
                fontSize: { xs: "1rem", sm: "1.5rem" },
                fontWeight: { xs: "300", sm: "500" },
                mb: 2,
              }}
            >
              Our paralegals are well knowledgeable about Alberta's paralegal
              system.
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                mt: 3,
                width: { xs: "100%", md: "80%" },
                fontSize: { xs: "1.5rem", sm: "2.5rem" },
                fontWeight: { xs: "600", sm: "700" },
              }}
            >
              Kilian Holdings Ltd – court agents, small civil claims, Divorce
              Paralegal.
            </Typography>

            <Button
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                width: { xs: "100%", sm: "auto", lg: "15%" },
                mt: 3,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            ></Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Herosection;
