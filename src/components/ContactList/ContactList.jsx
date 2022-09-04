import React, { useState } from "react";
import ContactListTop from "./ContactListTop";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ContactListContent from "./ContactListContent";

import { useEffect } from "react";
import { GetUsersAll } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const contactsFilterAZ = (a, b, i) => {
  const nameA = a[i];
  const nameB = b[i];

  if (nameA < nameB) {
    return 1;
  }

  if (nameA > nameB) {
    return -1;
  } else {
    return 0;
  }
};

const contactsFilterZA = (a, b, i) => {
  const nameA = a[i];
  const nameB = b[i];

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
};

const ContactList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  console.log("state", state);

  const [favorite, setFavorite] = useState(true);

  useEffect(() => {
    const getData = localStorage.getItem("LocalStorageData");
    if (!getData) {
      dispatch(GetUsersAll());
    }
  }, []);

  const showFavorites = () => {
    setFavorite(!favorite);
    if (favorite) {
      const favoriteList = localStorage.getItem("Favorite");
      if (!favoriteList) {
        alert("There is no Favourite contact");
      }
      console.log(favoriteList);
    }
  };

  const filteringAzOnClick = (data) => {
    return data.sort((a, b) => {
      return contactsFilterAZ(a, b, "firstName");
    });
  };
  const filteringZaOnClick = (data) => {
    return data.sort((a, b) => {
      return contactsFilterZA(a, b, "firstName");
    });
  };

  const favoriteList = JSON.parse(localStorage.getItem("Favorite"));
  let dataList = favorite ? state : favoriteList;

  return state.loading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : state.error ? (
    <Box>
      <Typography component="h1">{state.error}</Typography>
    </Box>
  ) : (
    <main className="main">
      <Container>
        <ContactListTop showFavorites={() => showFavorites()} />
        <Grid container spacing={{ xs: 2, sm: 4, md: 6 }}>
          {dataList.map((contact) => (
            <Grid item key={contact.id}>
              <ContactListContent
                key={contact.id}
                id={contact.id}
                firstName={contact.firstName}
                lastName={contact.lastName}
                city={contact.city}
                country={contact.country}
                phoneNumber={contact.phoneNumber}
                website={contact.website}
                email={contact.email}
                image={contact.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default ContactList;
