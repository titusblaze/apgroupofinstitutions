import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link, useLocation } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import logo from "../components/images/logo512.png";

export default function Navbar() {
  const [hideOffset, setHideOffset] = useState(0); // 🔥 scroll movement
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();
  const timeoutRef = React.useRef(null);
  const [subAnchorEl, setSubAnchorEl] = React.useState(null);
  const [subDropdown, setSubDropdown] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdown, setDropdown] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);

  // 🔥 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (Math.abs(currentScroll - lastScroll) > 10) {
        if (currentScroll > lastScroll) {
          setHideOffset(-60); // ⬇️ move up
        } else {
          setHideOffset(0); // ⬆️ move down
        }
        setLastScroll(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  
  

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      submenu: [
        { name: "Institute", path: "/institute" },
        { name: "Chairman Message", path: "/chairman" },
      ],
    },
    {
    name: "Academic",
    submenu: [
      { name: "Program Added", path: "/programadded" },

      {
        name: "Health Science Courses",
        submenu: [
          { name: "ANM", path: "/anm" },
          { name: "DMLT", path: "/dmlt" },
          { name: "General Duty Assistant", path: "/gda" },
        ],
      },

      { name: "Catering & Hotel Management", path: "/catering" },
      { name: "Office Automation", path: "/office-automation" },
    ],
  },
    { name: "Anti Ragging", path: "/anti-ragging" },
    { name: "Facility", path: "/facility" },
    { name: "Admission", path: "/admission" },
    { name: "Placement", path: "/placement" },
    {
      name: "Gallery",
      submenu: [
        { name: "Image", path: "/image" },
        { name: "Video", path: "/video" },
      ],
    },
    { name: "Contact Us", path: "/contact" },
    { name: "Leave Form", 
      submenu: [
        { name: "Student Leave Form", path: "/studentleave" },
        { name: "Teacher Leave Form", path: "/teacherleave" },
      ] 
    },
  ];

  const isActive = (path) => location.pathname === path;

  const handleOpen = (e, name) => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }
  setAnchorEl(e.currentTarget);
  setDropdown(name);
};

const handleClose = () => {
  timeoutRef.current = setTimeout(() => {
    setAnchorEl(null);
    setDropdown(null);
  }, 200); // delay prevents flicker
};
const handleSubOpen = (e, name) => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  setSubAnchorEl(e.currentTarget);
  setSubDropdown(name);
};

const handleSubClose = () => {
  timeoutRef.current = setTimeout(() => {
    setSubAnchorEl(null);
    setSubDropdown(null);
  }, 200);
};

  return (
    <AppBar
      sx={{
        width: "100%",
        background: "linear-gradient(90deg, #0f172a, #1e3a8a)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        marginTop: { xs: "0"}, // header space
        position: "fixed",
        top: { xs: 0, md: "60px" }, // header space
        transform: {
          md: `translateY(${hideOffset}px)`,
          xs: "none",
        },
        transition: "transform 0.3s ease",
        zIndex: 1200,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
          minHeight: "60px",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 2 }}>
        <img src={logo} alt="Logo" style={{ height: "50px", width: "50px" }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
         AP Group of Institution
        </Typography>
        </Box>

        {/* Mobile Button */}
        <IconButton
          color="inherit"
          sx={{ display: { md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Menu */}
        <Box
            sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                width: "100%",
                justifyContent: "center"
            }}
            >
          {menuItems.map((item) => {
            const active = item.path && isActive(item.path);
            const isOpen = dropdown === item.name;

            return item.submenu ? (
              <div
                    key={item.name}
                    onMouseEnter={(e) => handleOpen(e, item.name)}
                    onMouseLeave={handleClose}
                    >
                <Button
                  color="inherit"
                  endIcon={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "30px",
                    px: 2.5,
                    py: 1,
                    transition: "all 0.3s ease",

                    background: isOpen
                      ? "linear-gradient(135deg,#00e5ff,#2979ff)"
                      : hovered === item.name
                      ? "rgba(255,255,255,0.12)"
                      : "transparent",

                    color: "#fff",

                    boxShadow: isOpen
                      ? "0 6px 20px rgba(0,229,255,0.4)"
                      : "none",

                    "&:hover": {
                      background: "rgba(255,255,255,0.2)",
                      transform: "translateY(-2px)", // 🔥 lift effect
                    },
                  }}
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item.name}
                </Button>

          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            MenuListProps={{
              onMouseEnter: () => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setDropdown(item.name);
              },
              onMouseLeave: handleClose,
            }}
            PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 3,
              background: "rgba(30,41,59,0.95)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            },
          }}
          >
          {item.submenu.map((sub) =>
            sub.submenu ? (
              <Box
                key={sub.name}
                onMouseEnter={(e) => handleSubOpen(e, sub.name)}
                onMouseLeave={handleSubClose}
              >
                {/* Parent Menu */}
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    
                  }}
                >
                  {sub.name}
                   <KeyboardArrowRightIcon /> {/*right arrow for submenu */}
                </MenuItem>

                {/* RIGHT SIDE SUBMENU */}
                <Menu
                  anchorEl={subAnchorEl}
                  open={subDropdown === sub.name}
                  onClose={handleSubClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  MenuListProps={{
                    onMouseEnter: () => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      setSubDropdown(sub.name);
                    },
                    onMouseLeave: handleSubClose,
                  }}
                  PaperProps={{
                    sx: {
                      mt: -1,
                      ml: 0.5,
                      borderRadius: 3,
                      background: "rgba(30,41,59,0.95)",
                      backdropFilter: "blur(10px)",
                      color: "#fff",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                    },
                  }}
                >
                  {sub.submenu.map((child) => (
                    <MenuItem
                      key={child.name}
                      component={Link}
                      to={child.path}
                      onClick={handleClose}
                    >
                      {child.name}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <MenuItem
                key={sub.name}
                component={Link}
                to={sub.path}
                onClick={handleClose}
              >
                {sub.name}
              </MenuItem>
            )
          )}
        </Menu>
              </div>
            ) : (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "25px",
                  px: 2,
                  transition: "0.3s",

                  // ✨ Active + Hover Gloss
                  background: active
                    ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                    : hovered === item.name
                    ? "rgba(255,255,255,0.15)"
                    : "transparent",

                  boxShadow: active
                    ? "0 4px 15px rgba(0,0,0,0.4)"
                    : "none",

                  "&:hover": {
                    background: "rgba(255,255,255,0.2)",
                  },
                }}
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.name}
              </Button>
            );
          })}
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: 240,
              background: "linear-gradient(180deg,#0f172a,#1e293b)",
              color: "#fff",
              p: 1,
            },
          }}
        >
          {/* HEADER */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1,
              py: 1,
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Typography fontWeight="bold" fontSize="16px">
              🎓 Menu
            </Typography>

            <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
              ✕
            </IconButton>
          </Box>

          {/* MENU */}
          <Box sx={{ mt: 1 }}>
            {menuItems.map((item, i) => (
              <Box key={i}>
                
                {/* MAIN BUTTON */}
                <Button
                  fullWidth
                  onClick={() =>
                    item.submenu
                      ? setOpenMenu((prev) => ({
                          ...prev,
                          [item.name]: !prev[item.name],
                        }))
                      : setOpen(false)
                  }
                  component={!item.submenu ? Link : "button"}
                  to={!item.submenu ? item.path : undefined}
                  sx={{
                    justifyContent: "space-between",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: 2,
                    py: 1,
                    px: 1.5,
                    mb: 0.5,
                    background: "rgba(255,255,255,0.03)",
                    transition: "0.3s",
                    "&:hover": {
                      background: "rgba(59,130,246,0.2)",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  {item.name}
                  {item.submenu &&
                    (openMenu[item.name] ? <ExpandLess /> : <ExpandMore />)}
                </Button>

                {/* FIRST DROPDOWN */}
                <Collapse in={openMenu[item.name]} timeout="auto" unmountOnExit>
                  <Box sx={{ pl: 1 }}>
                    {item.submenu?.map((sub, j) => (
                      <Box key={j}>
                        
                        <Button
                          fullWidth
                          onClick={() =>
                            sub.submenu
                              ? setOpenMenu((prev) => ({
                                  ...prev,
                                  [sub.name]: !prev[sub.name],
                                }))
                              : setOpen(false)
                          }
                          component={!sub.submenu ? Link : "button"}
                          to={!sub.submenu ? sub.path : undefined}
                          sx={{
                            justifyContent: "space-between",
                            color: "#cbd5f5",
                            textTransform: "none",
                            borderRadius: 2,
                            py: 0.8,
                            px: 1.5,
                            mb: 0.4,
                            fontSize: "14px",
                            "&:hover": {
                              background: "rgba(255,255,255,0.08)",
                              transform: "scale(1.02)",
                            },
                          }}
                        >
                          {sub.name}
                          {sub.submenu &&
                            (openMenu[sub.name] ? <ExpandLess /> : <ExpandMore />)}
                        </Button>

                        {/* SECOND DROPDOWN */}
                        <Collapse in={openMenu[sub.name]} timeout="auto" unmountOnExit>
                          <Box sx={{ pl: 2 }}>
                            {sub.submenu?.map((child, k) => (
                              <Button
                                key={k}
                                fullWidth
                                component={Link}
                                to={child.path}
                                onClick={() => setOpen(false)}
                                sx={{
                                  justifyContent: "flex-start",
                                  color: "#94a3b8",
                                  textTransform: "none",
                                  py: 0.7,
                                  px: 1.5,
                                  fontSize: "13px",
                                  borderRadius: 2,
                                  "&:hover": {
                                    background: "rgba(255,255,255,0.05)",
                                    transform: "scale(1.02)",
                                  },
                                }}
                              >
                                {child.name}
                              </Button>
                            ))}
                          </Box>
                        </Collapse>

                      </Box>
                    ))}
                  </Box>
                </Collapse>

              </Box>
            ))}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}