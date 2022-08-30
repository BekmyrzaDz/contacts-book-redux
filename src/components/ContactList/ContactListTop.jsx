import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import favorite from "../../images/favorite-heart.svg";
import sortAZ from "../../images/sort-AZ.svg";
import sortZA from "../../images/sort-ZA.svg";

const ContactListTop = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        m: "47px 0 30px",
      }}
    >
      <TextField
        label="type to search..."
        type="search"
        sx={{
          width: 551,
        }}
        id="search"
      />
      <Box>
        <IconButton>
          {/* <FavoriteIcon color="#D32F2F" /> */}
          <img src={favorite} alt="heart"></img>
        </IconButton>
        <IconButton>
          <img src={sortAZ} alt="sortAZ"></img>
        </IconButton>
        <IconButton>
          <img src={sortZA} alt="sortZA"></img>
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactListTop;
