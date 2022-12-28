import React from "react";
import { atom, useAtom } from "jotai";
import { selectedQuantityAtom, selectedShowAtom } from "../SingleShow";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import {
  validateEmail,
  validateCardNo,
  validateCVV,
  validateZipcode,
  validateCardExp
} from "../../services/helpers";

const selectedQuantity = atom((get) => get(selectedQuantityAtom));
const selectedShow = atom((get) => get(selectedShowAtom));

const Checkout = () => {
  let navigate = useNavigate();
  const [quantity] = useAtom(selectedQuantity);
  const [show] = useAtom(selectedShow);
  const [fullName, setFullName] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [purchaseSuccessful, setPurchaseSuccessful] = React.useState(false);
  const [cardNo, setCardNo] = React.useState("");
  const [cardExp, setCardExp] = React.useState("");
  const [cardCVV, setCardCVV] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [delay, setDelay] = React.useState(3000);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    debugger;
    if (
      fullName !== "" &&
      validateEmail(email) &&
      validateCardNo(cardNo) &&
      validateCardExp(cardExp) &&
      validateCVV(cardCVV) &&
      validateZipcode(zipcode)
    ) {
      setPurchaseSuccessful(true);
    } else {
      setPurchaseSuccessful(false);
    }
  };

  React.useEffect(() => {
    if (quantity === 0 || show === {}) {
      return navigate("/");
    }
  }, [quantity, show]);

  React.useEffect(() => {
    if (delay === 0) {
      return navigate("/");
    }
  }, [delay]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        flexDirection: "column",
        marginBottom: "16px"
      }}
    >
      {!purchaseSuccessful && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              flexDirection: "row"
            }}
          >
            <Alert sx={{ width: "600px" }} icon={false} severity="warning">
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Your spot tickets will be held for{" "}
                <strong>
                  {minutes}:{seconds}
                </strong>{" "}
                minutes to complete checkout. Refreshing or leaving page will
                remove you from queue.
              </Typography>
            </Alert>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "auto",
              marginTop: "16px"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Card sx={{ width: "500px" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Contact Information
                  </Typography>
                  <FormControl
                    sx={{ m: 1, width: 300, alignSelf: "center" }}
                    size="small"
                  >
                    <TextField
                      required
                      label="Full Name"
                      error={isSubmitted && fullName === ""}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <br />
                    <TextField
                      required
                      label="Email"
                      value={email}
                      error={isSubmitted && !validateEmail(email)}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                </CardContent>
              </Card>
              <Card sx={{ width: "500px", marginTop: "16px" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Payment
                  </Typography>
                  <FormControl
                    sx={{ m: 1, width: 405, alignSelf: "center" }}
                    size="small"
                  >
                    <TextField
                      required
                      label="Credit/Debit Card"
                      inputProps={{ maxLength: 16 }}
                      value={cardNo}
                      error={isSubmitted && !validateCardNo(cardNo)}
                      onChange={(e) => {
                        const regex = /^[0-9\b]+$/;
                        if (
                          e.target.value == "" ||
                          regex.test(e.target.value)
                        ) {
                          setCardNo(e.target.value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      m: 1,
                      width: 210,
                      alignSelf: "center",
                      display: "inline"
                    }}
                    size="small"
                  >
                    <TextField
                      required
                      label="EXP (MM/YY)"
                      value={cardExp}
                      error={isSubmitted && !validateCardExp(cardExp)}
                      onChange={(e) => setCardExp(e.target.value)}
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      m: 1,
                      width: 210,
                      alignSelf: "center",
                      display: "inline"
                    }}
                    size="small"
                  >
                    <TextField
                      required
                      label="CVV"
                      inputProps={{ maxLength: 3 }}
                      error={isSubmitted && !validateCVV(cardCVV)}
                      value={cardCVV}
                      onChange={(e) => {
                        const regex = /^[0-9\b]+$/;
                        if (
                          e.target.value == "" ||
                          regex.test(e.target.value)
                        ) {
                          setCardCVV(e.target.value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormControl
                    sx={{ m: 1, width: 195, alignSelf: "center" }}
                    size="small"
                  >
                    <TextField
                      required
                      label="Zipcode"
                      inputProps={{ maxLength: 5 }}
                      error={isSubmitted && !validateZipcode(zipcode)}
                      value={zipcode}
                      onChange={(e) => {
                        const regex = /^[0-9\b]+$/;
                        if (
                          e.target.value == "" ||
                          regex.test(e.target.value)
                        ) {
                          setZipcode(e.target.value);
                        }
                      }}
                    />
                  </FormControl>
                </CardContent>
              </Card>
            </div>
            <Card sx={{ width: "300px", marginLeft: "16px" }}>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Total
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {show.price * quantity + 0.05 * show.price * quantity}
                  </Typography>
                </div>
                <hr />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Typography gutterBottom variant="body2" component="div">
                    Base Price: {show.price} * {quantity}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    {show.price * quantity}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Typography gutterBottom variant="body2" component="div">
                    Fees: 5%
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    {(show.price * quantity * 0.05).toFixed(2)}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Typography gutterBottom variant="body2" component="div">
                    Delivery
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    Free
                  </Typography>
                </div>
                <br />
                <Typography gutterBottom variant="body2" component="div">
                  All sales are final. No Refunds.
                </Typography>
                <Typography gutterBottom variant="Body1" component="div">
                  <b>Delivery Details</b>
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Mobile Entry - Free
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tickets available 2 hours before show -{" "}
                  {new Date(show.date).toDateString()}, {show.time} <br />
                  <br />
                  These mobile tickets will be transferred directly to you from
                  a trusted seller. We'll email you the instructions on how to
                  accept them on the original ticket provider's mobile app.
                </Typography>
                <br />
                <Button
                  sx={{ textTransform: "none", width: "270px" }}
                  variant="contained"
                  onClick={() => handleFormSubmit()}
                >
                  Place Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </>
      )}
      {purchaseSuccessful && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            flexDirection: "row"
          }}
        >
          <Alert sx={{ width: "600px" }} icon={false} severity="success">
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              Tickets purchased successfully! Confirmation is sent on&nbsp;
              <strong>{email}</strong>
            </Typography>
          </Alert>
        </div>
      )}
    </section>
  );
};

export default Checkout;
