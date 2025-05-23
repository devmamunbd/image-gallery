"use server";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default async function Footer() {
  return (
    <Box
      className="bg-blue-500 py-4"
      //   sx={{
      //     backgroundColor: (theme) =>
      //       theme.palette.mode === "light"
      //         ? theme.palette.grey[200]
      //         : theme.palette.grey[800],
      //     p: 6,
      //   }}
      //   component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            devmamunbd
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
