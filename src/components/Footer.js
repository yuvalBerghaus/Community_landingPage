import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Instagram from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import HubSpotForm from "./HubSpotForm";
import Facebook from "@mui/icons-material/Facebook";
const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://app.comunityapp.com/">ComunityApp&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  useEffect(() => {
    // Load the Termly script for cookie consent
    const script = document.createElement("script");
    script.src =
      "https://app.termly.io/resource-blocker/0e7a92a3-9a7f-4572-b9dc-c6af6bbd3a10?autoBlock=on";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          {/* Additional content can be added here */}
          <HubSpotForm />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link color="text.secondary" href="#">
            Features
          </Link>
          <Link color="text.secondary" href="#">
            Testimonials
          </Link>
          <Link color="text.secondary" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" href="#">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link color="text.secondary" href="#">
            About us
          </Link>
          <Link color="text.secondary" href="#">
            Blogs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link color="text.secondary" href="https://app.comunityapp.com/terms-of-service">
            Terms
          </Link>
          <Link color="text.secondary" href="https://app.comunityapp.com/privacy-policy">
            Privacy
          </Link>
          <Link color="text.secondary" href="#">
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" href="https://app.comunityapp.com/privacy-policy">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="https://app.comunityapp.com/terms-of-service">
            Terms of Service
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          {/* Move the consent preferences link here */}
          <Link
            color="text.secondary"
            href="#"
            className="termly-display-preferences"
          >
            Consent Preferences
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://www.instagram.com/comunityapp/"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.facebook.com/profile.php?id=100095077067113&mibextid=ZbWKwL"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/mycomunityapp/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
