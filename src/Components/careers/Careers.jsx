import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  TextareaAutosize,
} from "@mui/material";
 
const Careers = () => {
  return (
    <Box width="100%" mx="auto" p={6}>
      {/* First Job Posting */}
      <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        fontFamily: "serif",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        mb: 4,
        position: "relative",
        p: 3,
      }}
      >
      <Typography
        variant="h4"
        fontWeight="bold"
        fontFamily="ui-sans-serif"
        textAlign="center"
        sx={{
        position: "absolute",
        top: -20,
        left: "50%",
        transform: "translateX(-50%)",
        bgcolor: "white",
        px: 2,
        py: 1,
        borderRadius: 1,
        }}
      >
        WE ARE HIRING!
      </Typography>
 
      {/* Left Section: Job Description */}
      <Box flex={1} py={8} px={8}>
        <Typography
        variant="h4"
        color="#2563EB"
        fontWeight="Bold"
        fontFamily={"ui-serif, Georgia, Cambria, Times New Roman, Times, serif"}
        gutterBottom
        sx={{
          filter:
          "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
        }}
        >
        Administrative Assistant - Office
        </Typography>
        <Typography color={"#4b5563"} fontFamily={"ui-sans-sarif, system-ui, sans-sarif"}>
        COMPANY: Killian Holdings Limited
        </Typography>
 
        <Typography fontWeight={500} fontSize={"1.225rem"} fontFamily={"ui-sans-sarif, system-ui, sans-sarif"} mt={2} mb={1}>
        Job Details
        </Typography>
       
        <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Pay: $27 an hour</Typography></li>
        <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Job type: Full-time</Typography></li>
       
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Location: 4804 42 Ave, Innisfail, AB T4G 1N4, Canada</Typography></li>
 
          <Typography fontWeight={500} fontSize={"1.225rem"} fontFamily={"ui-sans-sarif, system-ui, sans-sarif"} mt={2} >
            Full Job Description
          </Typography>
          <Typography fontWeight={500} fontSize={"1.12rem"} fontFamily={"ui-sans-sarif, system-ui, sans-sarif"} mb={1} >Company Overview</Typography>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Job Category: OFFICE ADMIN</Typography></li>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Job Type: OFFICE WORK</Typography></li>
 
          <Typography fontWeight={500} fontSize={"1.225rem"} fontFamily={"ui-sans-sarif, system-ui, sans-sarif"} mt={2}mb={1}>
            Qualifications
          </Typography>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Education: Secondary (high) school graduation certificate
            </Typography></li>
            <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}> Experience: 1 year to less than 2 years</Typography></li>
 
            <Typography fontWeight={500} fontSize={"1.225rem"} fontFamily={"ui-sans-sarif, system-ui, sans-sarif"} mt={2}mb={1}>
            Responsibilities
          </Typography>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Record and prepare minutes of meetings, seminars, and conferences.</Typography></li>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Establish office procedures and routines.</Typography></li>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Schedule and confirm appointments.</Typography>
          </li>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Answer telephone and electronic enquiries.
            </Typography></li>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Order office supplies and maintain inventory.</Typography></li>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Greet visitors and direct them accordingly.</Typography></li>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}>Set up and maintain filing systems.</Typography></li>
          <li><Typography display={"inline"} fontSize={"14px"} color={"#4b5563"}> Prepare and proofread documents.</Typography></li>
 
          <Typography fontWeight={500} fontSize={"1.225rem"} fontFamily={"ui-sans-sarif, system-ui, sans-sarif"} mt={2}mb={1}>
          How to apply
          </Typography>
          <Typography  fontSize={"14px"} color={"#4b5563"} fontWeight={600}>By email</Typography>
          <Typography  fontSize={"14px"} color={"#3B82F6"}  textDecoration={"underline"} sx={{ textDecoration: "underline" }}> kilianholdingltd@gmail.com</Typography>
          <Typography  fontSize={"14px"} color={"#4b5563"}>How-to-apply instructions</Typography>
          <Typography  fontSize={"14px"} color={"#4b5563"}>Here is what you must include in your application: </Typography>
          <Typography  fontSize={"14px"} color={"#4b5563"}>Cover letter </Typography>
          <Typography  fontSize={"14px"} color={"#4b5563"}>This job posting includes screening questions. Please answer the following questions</Typography>
          <Typography  fontSize={"14px"} color={"#4b5563"}>when applying:</Typography>
          <Typography  fontSize={"14px"} color={"#4b5563"}>Are you available for the advertised start date? </Typography>
          <Typography  fontSize={"14px"} color={"#4b5563"}>Are you currently legally able to work in Canada? </Typography>
        </Box>
 
        {/* Right Section: Application Form */}
        <Box flex={1} py={8} px={8}>
          <Button variant="text">APPLY NOW</Button>
          <Box component="form">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
            />
            <Box
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.23)",
                borderRadius: "4px",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "inherit",
                outline: "none",
                transition: "border-color 0.2s",
                "&:focus-within": {
                  border: "2px solid #3f51b5",
                },
                mt: 2,
              }}
            >
              <TextareaAutosize
                minRows={5}
                placeholder="Cover letter"
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  resize: "none",
                  fontSize: "16px",
                  fontFamily: "ui-sans-serif, system-ui",
                }}
              />
            </Box>
            <Box sx={{ mt: 2, textAlign: "left" }}>
              <Button color="primary" component="label">
                Attach Resume
                <input type="file" hidden />
              </Button>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Attachments (0)
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, p: 1.5, borderRadius: "20px" }}
              type="submit"
            >
              SUBMIT APPLICATION
            </Button>
          </Box>
        </Box>
      </Box>
 </Box>
  );
};

export default Careers;
