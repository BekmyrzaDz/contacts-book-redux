import React from "react";
import ContactImg from "../../images/contact-img.jpg";
import favorite from "../../images/favorite-transparent.svg";
import location from "../../images/location.svg";
import email from "../../images/email.svg";
import internet from "../../images/internet.svg";
import smartphone from "../../images/smartphone.svg";

import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(() => ({
  background: "#212121",
  color: "#fff",
  "&:hover": {
    background: "#414042",
  },
}));

const ContactListContent = () => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="136"
          image={ContactImg}
          alt="green iguana"
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Ubuntu",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              Vanessa Fahrmann
            </Typography>
            <IconButton>
              <img src={favorite} alt="favorite"></img>
            </IconButton>
          </Box>
          <Typography
            variant="ul"
            component="ul"
            color="#000"
            sx={{
              listStyle: "none",
              fontFamily: "Ubuntu",
              fontWeight: 400,
              fontSize: 13,
              lineHeight: "14.94px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
              variant="li"
              component="li"
            >
              <img style={{ marginRight: "5px" }} src={location} alt="" />
              Bishkek city, Kyrgyzstan
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
              variant="li"
              component="li"
            >
              <img style={{ marginRight: "5px" }} src={smartphone} alt="" />
              +996 550 002 232
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
              variant="li"
              component="li"
            >
              <img style={{ marginRight: "5px" }} src={internet} alt="" />
              mysite.com
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
              }}
              variant="li"
              component="li"
            >
              <img style={{ marginRight: "5px" }} src={email} alt="" />
              web@mysite.com
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <StyledButton
          size="small"
          color="primary"
          sx={{
            fontSize: 14,
            textTransform: "lowercase",
            fontFamily: "Ubuntu",
            fontWeight: 400,
          }}
        >
          show
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default ContactListContent;
