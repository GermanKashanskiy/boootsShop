import React from "react";
import AccordionSection from "./shared/Accordion/AccordionSection";
import { Container, Grid } from "@mui/material";
import MiniBio from "./shared/mini-bio/MiniBio";

const Profile = () => {
  return (
    <Container className="mt-5">

      <Grid container spacing={2} columns={16}>
        <Grid item xs={6}>
          <MiniBio />
        </Grid>
        <Grid item xs={10}>
          <AccordionSection />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;