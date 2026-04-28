import React from "react";
import { Box, Typography, IconButton, Link, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e0e0e0",
        color: "#0C3F40",
        mt: 4,
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Company Info */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Kilian Holdings Ltd.
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            At Kilian Holdings, our mission is to provide exceptional paralegal
            services focused on meticulous documentation assistance.
          </Typography>
          <Typography variant="body2">
            © {new Date().getFullYear()} Kilian Holdings Ltd. All rights
            reserved.
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            About Us
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/aboutus" },
              { label: "Services", href: "/services" },
              { label: "Accounting & Bookkeeping", href: "/accountbook" },
              { label: "Stock Market", href: "/stockmarket" },
              // { label: "Book a Consultation", href: "#" },
              // { label: "Client Portal", href: "/clintportal" },
              { label: "Careers", href: "/careers" },
              // { label: "Contact Us", href: "/contactus" },
              // { label: "Blogs", href: "/Blogs" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                underline="none"
                sx={{
                  color: "#0C3F40",
                  "&:hover": { color: "#1976d2" },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Contact Info */}
        /* Contact Info */}
<Box sx={{ flex: 1 }}>
  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
    Contact Us
  </Typography>

  {/* Office Locations */}
            <Box
              sx={{
                mb: 3,
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 3,
                backgroundColor: "#f9fbfb",
              }}
            >
              {[
                "4804 42 Ave, Innisfail, Alberta T4G 1N4, Canada",
                "#3 5105 51 Ave, Drayton Valley, Alberta T7A 0C3",
                "Unit 215, 321 Main Street Northeast, Slave Lake, Alberta T0G 2A0",
                "5009D, 51 Street, Barrhead, Alberta T7N 1L1",
                "1835 Albert Street, Regina, Saskatchewan S4P 2S9, Canada",
              ].map((address, index, array) => (
                <Box key={index}>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.8,
                      color: "#0C3F40",
                      py: 1,
                    }}
                  >
                    {address}
                  </Typography>
                  {index < array.length - 1 && (
                    <Divider sx={{ borderColor: "#d9e3e3" }} />
                  )}
                </Box>
              ))}
            </Box>

            {/* Contact Details */}
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: kilianholdingltd@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +1 780-360-7434
            </Typography>
            <Typography variant="body2">
              Mon - Fri: 9:00 AM - 5:00 PM
            </Typography>
          </Box>
        {/* <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Email: kilianholdingltd@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Phone: +1 780-360-7434
          </Typography>
          <Typography variant="body2">Mon - Fri: 9:00 AM - 5:00 PM</Typography>
        </Box> */}

        {/* Social Media */}
        <Box sx={{ flex: 1, textAlign: { xs: "left", md: "center" } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Follow Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "center" },
              gap : 2,
            }}
          >
            <IconButton
              href="https://www.facebook.com/kilianholdings/"
              target="_blank"
              sx={{ color: "#3b5998", "&:hover": { transform: "scale(1.2)" } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/kilian22299/"
              target="_blank"
              sx={{ color: "#E4405F", "&:hover": { transform: "scale(1.2)" } }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://x.com/Kilian_holding"
              target="_blank"
              sx={{ color: "#000000", "&:hover": { transform: "scale(1.2)" } }}
            >
              <XIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Divider & Bottom Info */}
      <Divider sx={{ my: 4, borderColor: "#e0e0e0" }} />
      <Box sx={{ textAlign: "center", fontSize: "0.875rem", color: "#757575" }}>
        <Typography variant="body2">
          Powered by Office Based Jobs |{" "}
          <Link
            href="#"
            sx={{
              color: "#0C3F40",
              textDecoration: "none",
              "&:hover": { color: "#1976d2" },
            }}
          >
            Terms of Service
          </Link>{" "}
          |{" "}
          <Link
            href="#"
            sx={{
              color: "#0C3F40",
              textDecoration: "none",
              "&:hover": { color: "#1976d2" },
            }}
          >
            Privacy Policy
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
