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
import { GetUsersAll, sortAZ, sortZA } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  console.log("state", state);

  useEffect(() => {
    const getData = localStorage.getItem("LocalStorageData");
    if (!getData) {
      dispatch(GetUsersAll());
    }
  }, []);

  const filteringAzOnClick = () => {
    dispatch(sortAZ());
    console.log("sortAZ");
  };
  const filteringZaOnClick = () => {
    dispatch(sortZA());
    console.log("sortZA");
  };

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
        <ContactListTop
          filteringAzOnClick={() => filteringAzOnClick()}
          filteringZaOnClick={() => filteringZaOnClick()}
        />
        <Grid container spacing={{ xs: 2, sm: 4, md: 6 }}>
          {state.map((contact) => (
            <Grid item>
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
