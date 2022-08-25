import ContactListTop from "./ContactListTop";
import { Container, Grid } from "@mui/material";
import ContactListContent from "./ContactListContent";

const ContactList = () => {
  return (
    <main className="main">
      <Container>
        <ContactListTop />
        <Grid container spacing={{ xs: 2, sm: 4, md: 6 }}>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
          <Grid item>
            <ContactListContent />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default ContactList;
