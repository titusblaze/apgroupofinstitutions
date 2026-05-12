// =========================================
// IMPORT
// =========================================

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  TextField,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import QRCodeStyling from "qr-code-styling";

// =========================================
// COMPONENT
// =========================================

const Payment = () => {
  // =========================================
  // DETAILS
  // =========================================

  const upiId = "apinstitution@indianbk";

  const whatsappNumber = "919840075091";

  // =========================================
  // STATES
  // =========================================

  const [amount, setAmount] = useState("");

  const [generatedAmount, setGeneratedAmount] =
    useState("");

  // =========================================
  // REFS
  // =========================================

  const qrRef = useRef(null);

  const qrSectionRef = useRef(null);

  // =========================================
  // UPI LINK
  // =========================================

  const upiLink =
    `upi://pay?pa=${upiId}` +
    `&pn=${encodeURIComponent("AP Institutions")}` +
    `&am=${generatedAmount || 0}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(
      "Payment Fees Payment"
    )}`;

  // =========================================
  // OPEN UPI APP
  // =========================================

  const openUPI = () => {
    if (!generatedAmount) {
      alert("Please Enter Amount & Create QR Code");
      return;
    }

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
      "Hello AP Institutions,%0A%0AI completed the payment.%0APlease verify my payment screenshot.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  // =========================================
  // CREATE QR
  // =========================================

  const createQRCode = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please Enter Valid Amount");
      return;
    }

    setGeneratedAmount(amount);

    // =========================================
    // AUTO SCROLL TO QR
    // =========================================

    setTimeout(() => {
      qrSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  };

  // =========================================
  // QR GENERATOR
  // =========================================

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
              color: "#9333ea",
            },

            {
              offset: 1,
              color: "#2563eb",
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
              color: "#9333ea",
            },

            {
              offset: 1,
              color: "#00D4FF",
            },
          ],
        },
      },

      cornersDotOptions: {
        type: "dot",

        color: "#38bdf8",
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
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",

            overflow: "hidden",

            borderRadius: {
              xs: "28px",
              md: "40px",
            },

            border:
              "1px solid rgba(255,255,255,0.08)",

            background:
              "linear-gradient(180deg, rgba(5,15,35,0.98), rgba(2,8,20,0.98))",

            boxShadow: `
              0 0 80px rgba(0,212,255,0.06),
              0 0 70px rgba(168,85,247,0.06),
              inset 0 1px 0 rgba(255,255,255,0.06)
            `,

            p: {
              xs: 2,
              sm: 3,
              md: 4,
            },

            display: "flex",

            flexDirection: {
              xs: "column",
              md: "row",
            },

            gap: {
              xs: 3,
              md: 4,
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
                md: "45%",
              },

              display: "flex",

              justifyContent: "center",
            }}
          >
            {/* QR CARD */}

            <Box
              ref={qrSectionRef}
              onClick={openUPI}
              sx={{
                width: "100%",

                borderRadius: "30px",

                cursor: "pointer",

                p: {
                  xs: 2,
                  md: 3,
                },

                position: "relative",

                overflow: "hidden",

                background:
                  "linear-gradient(180deg, rgba(8,20,40,0.98), rgba(2,8,20,0.98))",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.06),
                  0 0 40px rgba(0,212,255,0.08)
                `,
              }}
            >
              {/* QR */}

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
                <Box
                  sx={{
                    position: "absolute",

                    width: {
                      xs: 240,
                      sm: 320,
                      md: 360,
                    },

                    height: {
                      xs: 240,
                      sm: 320,
                      md: 360,
                    },

                    borderRadius: "50%",

                    background:
                      "radial-gradient(circle, rgba(147,51,234,0.20), rgba(37,99,235,0.15), transparent 75%)",

                    filter: "blur(50px)",

                    zIndex: 0,
                  }}
                />

                <Box
                  sx={{
                    position: "relative",

                    width: {
                      xs: 250,
                      sm: 320,
                      md: 360,
                    },

                    height: {
                      xs: 250,
                      sm: 320,
                      md: 360,
                    },

                    borderRadius: "28px",

                    overflow: "hidden",

                    background:
                      "linear-gradient(135deg, rgba(10,20,40,0.98), rgba(2,8,20,0.98))",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",

                    p: 2,

                    boxShadow: `
                      inset 0 1px 0 rgba(255,255,255,0.06),
                      0 0 40px rgba(0,212,255,0.12)
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
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",

                      transform: "rotate(25deg)",

                      zIndex: 9,
                    }}
                  />
                </Box>
              </Box>

              {/* TEXT */}

              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{
                  mb: 3,
                }}
              >
                <QrCodeScannerRoundedIcon
                  sx={{
                    fontSize: 30,

                    background:
                      "linear-gradient(90deg,#9333ea,#38bdf8)",

                    WebkitBackgroundClip: "text",

                    WebkitTextFillColor:
                      "transparent",
                  }}
                />

                <Typography
                  sx={{
                    color: "#fff",

                    fontWeight: 600,

                    fontSize: {
                      xs: "17px",
                      md: "22px",
                    },
                  }}
                >
                  Scan or Tap To Pay
                </Typography>
              </Stack>

              {/* UPI ID */}

              <Typography
                sx={{
                  color: "#94a3b8",

                  mb: 1,

                  fontSize: "14px",

                  letterSpacing: 1,
                }}
              >
                UPI ID
              </Typography>

              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",

                  borderRadius: "16px",

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

                    px: 2,

                    py: 1.8,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",

                      fontWeight: 600,

                      wordBreak: "break-all",

                      fontSize: {
                        xs: "14px",
                        md: "18px",
                      },
                    }}
                  >
                    {upiId}
                  </Typography>
                </Box>

                <IconButton
                  onClick={copyUPI}
                  sx={{
                    color: "#38bdf8",

                    mr: 1,
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
                "rgba(255,255,255,0.06)",
            }}
          />

          {/* ========================================= */}
          {/* RIGHT */}
          {/* ========================================= */}

          <Box
            sx={{
              flex: 1,

              width: "100%",

              display: "flex",

              alignItems: "center",
            }}
          >
            <Stack
              spacing={4}
              sx={{
                width: "100%",
              }}
            >
              {/* HEADER */}

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: 70,

                    height: 70,

                    borderRadius: "24px",

                    background:
                      "linear-gradient(135deg,#9333ea,#38bdf8)",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",

                    boxShadow:
                      "0 0 30px rgba(147,51,234,0.35)",
                  }}
                >
                  <SchoolRoundedIcon
                    sx={{
                      color: "#fff",

                      fontSize: 38,
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,

                      fontSize: {
                        xs: "34px",
                        md: "50px",
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
                    Payment Fees
                  </Typography>

                  <Typography
                    sx={{
                      color: "#94a3b8",

                      fontSize: {
                        xs: "15px",
                        md: "18px",
                      },
                    }}
                  >
                    AP Institutions
                  </Typography>
                </Box>
              </Stack>

              {/* FORM */}

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

                    mb: 2.5,

                    fontSize: "15px",
                  }}
                >
                  PAY AMOUNT
                </Typography>

                {/* INPUT */}

                <TextField
                  fullWidth
                  type="number"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  InputProps={{
                    sx: {
                      height: 72,

                      borderRadius: "20px",

                      color: "#fff",

                      fontSize: "34px",

                      fontWeight: 700,

                      px: 1,

                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                    },
                  }}
                  sx={{
                    mb: 3,

                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor:
                          "rgba(255,255,255,0.12)",
                      },

                      "&:hover fieldset": {
                        borderColor: "#38bdf8",
                      },

                      "&.Mui-focused fieldset":
                        {
                          borderColor: "#9333ea",
                          borderWidth: "2px",
                        },
                    },

                    input: {
                      color: "#fff",
                    },

                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                      {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                  }}
                />

                {/* BUTTON */}

                <Button
                  fullWidth
                  onClick={createQRCode}
                  sx={{
                    height: 66,

                    borderRadius: "22px",

                    background:
                      "linear-gradient(90deg,#9333ea,#2563eb)",

                    color: "#fff",

                    fontWeight: 700,

                    fontSize: {
                      xs: "17px",
                      md: "20px",
                    },

                    textTransform: "none",

                    boxShadow:
                      "0 10px 30px rgba(37,99,235,0.35)",

                    "&:hover": {
                      background:
                        "linear-gradient(90deg,#7e22ce,#1d4ed8)",
                    },
                  }}
                >
                  Create QR Code
                </Button>

                {/* AMOUNT */}

                {generatedAmount && (
                  <Typography
                    sx={{
                      mt: 4,

                      textAlign: "center",

                      fontWeight: 800,

                      lineHeight: 1,

                      fontSize: {
                        xs: "58px",
                        md: "88px",
                      },

                      background:
                        "linear-gradient(90deg,#a855f7,#2563eb)",

                      WebkitBackgroundClip:
                        "text",

                      WebkitTextFillColor:
                        "transparent",
                    }}
                  >
                    ₹{generatedAmount}
                  </Typography>
                )}
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

                  fontWeight: 700,

                  fontSize: {
                    xs: "15px",
                    md: "18px",
                  },

                  textTransform: "none",

                  boxShadow:
                    "0 10px 30px rgba(34,197,94,0.25)",

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
                      md: "16px",
                    },
                  }}
                >
                  After successful payment,
                  send payment screenshot on{" "}
                  <span
                    style={{
                      color: "#22c55e",
                      fontWeight: 700,
                    }}
                  >
                    WhatsApp
                  </span>{" "}
                  for payment confirmation.
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