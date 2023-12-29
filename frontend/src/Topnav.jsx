import React from "react";
import { AppBar, Button, Container, Toolbar, Typography, IconButton, Link } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate, useLocation } from "react-router-dom";

function Topnav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <AppBar style={{ backgroundColor:'#444950'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <ListAltIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TODO's
          </Typography>
          {isHome && (
            <div style={{ marginLeft: "auto" }}>
              <Button
                color="inherit"
                startIcon={<AccountCircleIcon />}
                onClick={() => {
                  navigate('/login');
                  // Add your login logic here
                }}
              >
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topnav;
