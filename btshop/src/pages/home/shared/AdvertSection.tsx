import { Container, Grid } from "@mui/material";
import React from "react";

const AdvertSection = () => {
  return (
    <section className="advert-section not-coppy">
      <div className="advert-bg">
        <Container>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={14} sm={10} md={6}>
              <div className="advert-text family-archivo color-white">
                <div className="advert-text-big">30% OFF</div>
                <div className="advert-text-small">
                  Unleash your inner fashionista with our curated collection of
                  the hottest shoe trends.
                </div>
                <div className="advert-btn">
                  <a href="" className="font-archivo color-black no-text-decoration">SHOP NOW</a>
                </div>
              </div>
            </Grid>
            <Grid item xs={2} sm={6} md={10}></Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default AdvertSection;
