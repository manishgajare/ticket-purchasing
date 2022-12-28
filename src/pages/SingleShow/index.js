import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { atom, useAtom } from "jotai";
import shows from "../../services/mock/data";

export const selectedQuantityAtom = atom(0);
export const selectedShowAtom = atom({});

const SingleShow = () => {
  const { showId } = useParams();
  const show = shows.find((show) => show.id === showId);
  const { image, name, date, time, location, venue, price } = show;
  const [ticketQuantity, setTicketQuantity] = useAtom(selectedQuantityAtom);
  const [selectedShow, setSelectedShow] = useAtom(selectedShowAtom);

  const handleChange = (event) => {
    setTicketQuantity(event.target.value);
    setSelectedShow(show);
  };

  return (
    <section style={{ marginTop: "25px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          background: "linear-gradient(to right, #E9F8FF, #90B2D8, #C1E3FF)",
          padding: "16px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <img height="80px" src={image} alt={name} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "32px"
            }}
          >
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="h5"
                color="text.primary"
              >
                {name}
              </Typography>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body1"
                color="text.secondary"
              >
                {new Date(date).toDateString()}, {time}
              </Typography>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {`${venue} — ${location}`}
              </Typography>
            </>
          </div>
        </div>
        <Alert sx={{ width: "400px" }} icon={false} severity="info">
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.secondary"
          >
            Important Event Info: This venue is standing room only - NO seats!
            Must be 21+ with valid ID.
          </Typography>
        </Alert>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "32px"
        }}
      >
        <div style={{ alignSelf: "center" }}>
          There is an overall 8 ticket limit for this event
        </div>
        <Typography
          sx={{ display: "inline", alignSelf: "center" }}
          component="span"
          variant="h5"
          color="#3f51b5"
        >
          ${price} ea + fees
        </Typography>
        <FormControl
          sx={{ m: 1, maxWidth: 120, alignSelf: "center" }}
          size="small"
        >
          <Select
            labelId="ticket-quantity"
            id="ticket-quantity"
            value={ticketQuantity}
            onChange={handleChange}
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1 Ticket</MenuItem>
            <MenuItem value={2}>2 Tickets</MenuItem>
            <MenuItem value={3}>3 Tickets</MenuItem>
            <MenuItem value={4}>4 Tickets</MenuItem>
            <MenuItem value={5}>5 Tickets</MenuItem>
            <MenuItem value={6}>6 Tickets</MenuItem>
            <MenuItem value={7}>7 Tickets</MenuItem>
            <MenuItem value={8}>8 Tickets</MenuItem>
          </Select>
          <Button
            component={Link}
            to={{ pathname: `/checkout` }}
            sx={{ textTransform: "none", marginTop: "16px" }}
            variant="contained"
            disabled={ticketQuantity === 0}
          >
            Checkout
          </Button>
        </FormControl>
        {}
      </div>
    </section>
  );
};

export default SingleShow;
