import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
const TopHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0C3F40",
        width: "100vw",
        height: "60px",
      }}
    >
      <Typography
        sx={{
          overflow: "hidden",
          padding: 1,
          fontSize: { xs: "14px", sm: "20px", md: "24px" },
          color: "#fff",
          textAlign: "center",
        }}
      >
        We extend our services to Innisfail, Drayton Valley, Slave Lake, and
        Barrhead.
      </Typography>
    </Box>
  );
};

export default TopHeader;
