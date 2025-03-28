import { Box, Typography } from "@mui/material";

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "1500px",
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        // height:'500px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", sm: "60%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            my: { xs: 2, sm: 3 },
            color: "#0C3F40",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            fontWeight: { xs: "300", sm: "700" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Welcome to Kilian Holdings Ltd Consulting
        </Typography>
        <Typography
          sx={{
            my: 3,
            color: "#5E5E5E",
            fontSize: { xs: "1rem", sm: "1.5rem" },
            fontWeight: { xs: "300", sm: "500" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          At Kilian Holdings, we understand that navigating the legal landscape
          can be daunting. That&apos;s why we&apos;re here to guide you through every step
          of the process with expertise, compassion, and dedication.{" "}
        </Typography>
        <div className="underline font-bold">
          <a href="/">CONTECT US</a>
        </div>
      </Box>
    </Box>
  );
};

export default WelcomeSection;
