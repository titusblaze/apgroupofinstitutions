// Payment.js

import React, { useEffect, useRef } from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import QRCodeStyling from "qr-code-styling";

const Payment = () => {
  // =========================================
  // DETAILS
  // =========================================

  const upiId = "apinstitution@indianbk";

  const amount = "1000";

  const whatsappNumber = "919840075091";

  // =========================================
  // UPI LINK
  // =========================================

  const upiLink =
    `upi://pay?pa=${upiId}` +
    `&pn=${encodeURIComponent("AP Institutions")}` +
    `&am=${amount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent("Admission Fee Payment")}`;

  // =========================================
  // OPEN UPI APP
  // =========================================

  const openUPI = () => {
    window.location.href = upiLink;

    setTimeout(() => {
      window.open(upiLink, "_self");
    }, 300);
  };

  // =========================================
  // COPY UPI
  // =========================================

  const copyUPI = async (e) => {
    e.stopPropagation();

    await navigator.clipboard.writeText(upiId);

    alert("UPI ID Copied");
  };

  // =========================================
  // WHATSAPP
  // =========================================

  const openWhatsApp = () => {
    const text =
      "Hello AP Institutions,%0A%0AI completed the admission fee payment.%0APlease verify my payment screenshot.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  // =========================================
  // QR GENERATOR
  // =========================================

  const qrRef = useRef(null);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 420,

      height: 420,

      type: "svg",

      data: upiLink,

      margin: 0,

      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg",

      qrOptions: {
        errorCorrectionLevel: "H",
      },

      backgroundOptions: {
        color: "transparent",
      },

      imageOptions: {
        crossOrigin: "anonymous",

        margin: 6,

        imageSize: 0.28,
      },

      dotsOptions: {
        type: "extra-rounded",

        gradient: {
          type: "linear",

          rotation: Math.PI / 4,

          colorStops: [
            {
              offset: 0,
              color: "#22c55e",
            },

            {
              offset: 0.4,
              color: "#00D4FF",
            },

            {
              offset: 0.75,
              color: "#2563eb",
            },

            {
              offset: 1,
              color: "#9333ea",
            },
          ],
        },
      },

      cornersSquareOptions: {
        type: "extra-rounded",

        gradient: {
          type: "linear",

          rotation: Math.PI / 4,

          colorStops: [
            {
              offset: 0,
              color: "#34d399",
            },

            {
              offset: 1,
              color: "#0ea5e9",
            },
          ],
        },
      },

      cornersDotOptions: {
        type: "dot",

        color: "#00D4FF",
      },
    });

    if (qrRef.current) {
      qrRef.current.innerHTML = "";

      qrCode.append(qrRef.current);
    }
  }, [upiLink]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        
        background:
          "radial-gradient(circle at top, #071120 0%, #020617 70%)",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        px: {
          xs: 1.5,
          md: 3,
        },

        py: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",

            overflow: "hidden",

            borderRadius: {
              xs: "30px",
              md: "42px",
            },

            border:
              "1px solid rgba(255,255,255,0.08)",

            background:
              "linear-gradient(180deg, rgba(5,15,35,0.98), rgba(2,8,20,0.98))",

            boxShadow:
              `
              0 0 100px rgba(0,212,255,0.08),
              0 0 80px rgba(168,85,247,0.08),
              inset 0 1px 0 rgba(255,255,255,0.08)
              `,

            p: {
             // xs: 2,
              sm: 3,
              md: 5,
            },

            display: "flex",

            flexDirection: {
              xs: "column",
              md: "row",
            },

            gap: {
              xs: 3,
              md: 5,
            },
          }}
        >
          {/* ========================================= */}
          {/* LEFT */}
          {/* ========================================= */}

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "42%",
              },

              display: "flex",

              justifyContent: "center",
            }}
          >
            <Box
              onClick={openUPI}
              sx={{
                width: "100%",

                maxWidth: {
                  xs: "100%",
                  sm: 420,
                  md: 470,
                },

                borderRadius: "34px",

                cursor: "pointer",

                p: {
                  xs: 2,
                  md: 3,
                },

                position: "relative",

                overflow: "hidden",

                background:
                  "linear-gradient(180deg, rgba(5,15,35,0.96), rgba(2,8,20,0.96))",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                boxShadow:
                  `
                  inset 0 1px 0 rgba(255,255,255,0.08),
                  0 0 45px rgba(0,212,255,0.12),
                  0 0 90px rgba(168,85,247,0.08)
                  `,
              }}
            >
              {/* QR SECTION */}

              <Box
                sx={{
                  position: "relative",

                  width: "100%",

                  display: "flex",

                  justifyContent: "center",

                  alignItems: "center",

                  mb: 3,
                }}
              >
                {/* OUTER GLOW */}

                <Box
                  sx={{
                    position: "absolute",

                    width: {
                      xs: 260,
                      sm: 340,
                      md: 430,
                    },

                    height: {
                      xs: 260,
                      sm: 340,
                      md: 430,
                    },

                    borderRadius: "50%",

                    background:
                      "radial-gradient(circle, rgba(0,212,255,0.22), rgba(168,85,247,0.15), transparent 72%)",

                    filter: "blur(50px)",

                    zIndex: 0,
                  }}
                />

                {/* QR CARD */}

                <Box
                  sx={{
                    position: "relative",

                    width: {
                      xs: 250,
                      sm: 330,
                      md: 410,
                    },

                    height: {
                      xs: 250,
                      sm: 330,
                      md: 410,
                    },

                    borderRadius: {
                      xs: "24px",
                      md: "34px",
                    },

                    overflow: "hidden",

                    background:
                      "linear-gradient(135deg, rgba(10,20,40,0.98), rgba(2,8,20,0.98))",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",

                    p: {
                      xs: 1.8,
                      md: 2.5,
                    },

                    boxShadow:
                      `
                      inset 0 1px 0 rgba(255,255,255,0.06),
                      0 0 40px rgba(0,212,255,0.16),
                      0 0 80px rgba(168,85,247,0.12)
                      `,
                  }}
                >
                  {/* QR */}

                  <Box
                    ref={qrRef}
                    sx={{
                      width: "100%",

                      height: "100%",

                      display: "flex",

                      justifyContent: "center",

                      alignItems: "center",

                      zIndex: 5,

                      "& canvas": {
                        width: "100% !important",
                        height: "100% !important",
                        background: "transparent !important",
                      },

                      "& svg": {
                        width: "100% !important",
                        height: "100% !important",
                      },
                    }}
                  />

                  {/* SHINE */}

                  <Box
                    sx={{
                      position: "absolute",

                      top: "-30%",

                      left: "-40%",

                      width: "60%",

                      height: "180%",

                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",

                      transform: "rotate(25deg)",

                      zIndex: 9,

                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Box>

              {/* TAP TEXT */}

              <Stack
                direction="row"
                spacing={1.2}
                justifyContent="center"
                alignItems="center"
                sx={{
                  mb: 3,
                }}
              >
                <QrCodeScannerRoundedIcon
                  sx={{
                    fontSize: {
                      xs: 28,
                      md: 34,
                    },

                    background:
                      "linear-gradient(90deg,#22c55e,#00D4FF,#9333ea)",

                    WebkitBackgroundClip:
                      "text",

                    WebkitTextFillColor:
                      "transparent",
                  }}
                />

                <Typography
                  sx={{
                    color: "#fff",

                    fontWeight: 600,

                    fontSize: {
                      xs: "18px",
                      md: "24px",
                    },
                  }}
                >
                  Tap / Scan QR to Pay
                </Typography>
              </Stack>

              {/* UPI ID */}

              <Typography
                sx={{
                  color: "#94a3b8",

                  mb: 1,

                  fontSize: "16px",
                }}
              >
                UPI ID
              </Typography>

              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",

                  borderRadius: "18px",

                  overflow: "hidden",

                  background:
                    "rgba(255,255,255,0.03)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Box
                  sx={{
                    flex: 1,

                    px: 2.5,

                    py: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",

                      fontWeight: 600,

                      wordBreak: "break-all",

                      fontSize: {
                        xs: "15px",
                        md: "20px",
                      },
                    }}
                  >
                    {upiId}
                  </Typography>
                </Box>

                <IconButton
                  onClick={copyUPI}
                  sx={{
                    px: 2.5,

                    color: "#38bdf8",
                  }}
                >
                  <ContentCopyRoundedIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* DIVIDER */}

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                md: "block",
              },

              borderColor:
                "rgba(255,255,255,0.08)",
            }}
          />

          {/* RIGHT */}

          <Box
            sx={{
              flex: 1,

              width: "100%",
            }}
          >
            <Stack spacing={4}>
              {/* HEADER */}

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: {
                      xs: 60,
                      md: 80,
                    },

                    height: {
                      xs: 60,
                      md: 80,
                    },

                    borderRadius: "50%",

                    background:
                      "linear-gradient(135deg,#9333ea,#38bdf8)",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",
                  }}
                >
                  <SchoolRoundedIcon
                    sx={{
                      color: "#fff",

                      fontSize: 36,
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",

                      fontSize: {
                        xs: "34px",
                        md: "58px",
                      },

                      lineHeight: 1.1,

                      background:
                        "linear-gradient(90deg,#d946ef,#38bdf8)",

                      WebkitBackgroundClip:
                        "text",

                      WebkitTextFillColor:
                        "transparent",
                    }}
                  >
                    Admission Fee
                  </Typography>

                  <Typography
                    sx={{
                      color: "#94a3b8",

                      fontSize: {
                        xs: "15px",
                        md: "20px",
                      },
                    }}
                  >
                    AP Institutions
                  </Typography>
                </Box>
              </Stack>

              {/* AMOUNT */}

              <Box
                sx={{
                  py: 4,

                  borderTop:
                    "1px solid rgba(255,255,255,0.08)",

                  borderBottom:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Typography
                  sx={{
                    color: "#94a3b8",

                    letterSpacing: 3,

                    mb: 1,

                    fontSize: "16px",
                  }}
                >
                  AMOUNT TO PAY
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "bold",

                    lineHeight: 1,

                    fontSize: {
                      xs: "58px",
                      md: "95px",
                    },

                    background:
                      "linear-gradient(90deg,#d946ef,#2563eb)",

                    WebkitBackgroundClip:
                      "text",

                    WebkitTextFillColor:
                      "transparent",
                  }}
                >
                  ₹{amount}
                </Typography>
              </Box>

              {/* WHATSAPP */}

              <Button
                onClick={openWhatsApp}
                startIcon={<WhatsAppIcon />}
                sx={{
                  py: 2,

                  borderRadius: "20px",

                  background:
                    "linear-gradient(90deg,#22c55e,#16a34a)",

                  color: "#fff",

                  fontWeight: "bold",

                  fontSize: {
                    xs: "15px",
                    md: "20px",
                  },

                  textTransform: "none",

                  "&:hover": {
                    background:
                      "linear-gradient(90deg,#16a34a,#15803d)",
                  },
                }}
              >
                Send Payment Screenshot On WhatsApp
              </Button>

              {/* INFO */}

              <Stack
                direction="row"
                spacing={2}
                alignItems="flex-start"
                sx={{
                  p: 2.5,

                  borderRadius: "22px",

                  background:
                    "rgba(255,255,255,0.03)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <InfoOutlinedIcon
                  sx={{
                    color: "#c026d3",

                    mt: 0.3,
                  }}
                />

                <Typography
                  sx={{
                    color: "#cbd5e1",

                    lineHeight: 1.8,

                    fontSize: {
                      xs: "14px",
                      md: "17px",
                    },
                  }}
                >
                  After successful payment,
                  send payment screenshot on{" "}
                  <span
                    style={{
                      color: "#22c55e",
                      fontWeight: 600,
                    }}
                  >
                    WhatsApp
                  </span>{" "}
                  for admission confirmation.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Payment;