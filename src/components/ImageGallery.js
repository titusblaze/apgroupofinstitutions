import React, { useState } from "react";
import {
  Box,
  Grid,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Close,
  ArrowBackIos,
  ArrowForwardIos,
  ZoomIn,
  ZoomOut,
} from "@mui/icons-material";

// ✅ 16 Unsplash Nursing / Medical Images
const images = [
  "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
  "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc",
  "https://images.unsplash.com/photo-1584515933487-779824d29309",
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842",
  "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289",
  "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
];

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setZoom(1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setZoom(1);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    setZoom(1);
  };

  const zoomIn = () => setZoom((z) => z + 0.2);
  const zoomOut = () => setZoom((z) => (z > 1 ? z - 0.2 : 1));

  return (
    <Box sx={{ p: 3 }}>
      {/* ✅ Heading */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 3,
        }}
      >
        Photos
      </Typography>

      {/* Gallery Grid */}
      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              component="img"
              src={img}
              alt="gallery"
              onClick={() => handleOpen(index)}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 3,
                cursor: "pointer",
                transition: "0.3s",
                boxShadow: 3,
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close */}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}
          >
            <Close />
          </IconButton>

          {/* Prev */}
          <IconButton
            onClick={prevImage}
            sx={{ position: "absolute", left: 10, color: "#fff" }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* Image */}
          <Box
            component="img"
            src={images[currentIndex]}
            sx={{
              maxHeight: "80vh",
              maxWidth: "90vw",
              transform: `scale(${zoom})`,
              transition: "0.3s",
            }}
          />

          {/* Next */}
          <IconButton
            onClick={nextImage}
            sx={{ position: "absolute", right: 10, color: "#fff" }}
          >
            <ArrowForwardIos />
          </IconButton>

          {/* Zoom Controls */}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              display: "flex",
              gap: 2,
            }}
          >
            <IconButton onClick={zoomIn} sx={{ color: "#fff" }}>
              <ZoomIn />
            </IconButton>
            <IconButton onClick={zoomOut} sx={{ color: "#fff" }}>
              <ZoomOut />
            </IconButton>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ImageGallery;