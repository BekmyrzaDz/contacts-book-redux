import ContactListTop from "./ContactListTop";
import { Container, Grid } from "@mui/material";
import ContactListContent from "./ContactListContent";

import { useEffect } from "react";
import { GetUsersAll } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const dispach = useDispatch();
  const state = useSelector((state) => state.data);
  console.log("state", state);

  useEffect(() => {
    const getData = localStorage.getItem("LocalStorageData");
    if (!getData) {
      dispach(GetUsersAll());
    }
  }, []);

  return (
    <main className="main">
      <Container>
        <ContactListTop />
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
