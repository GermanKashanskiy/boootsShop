import React from "react";
import { products } from "../../../../../api/data/products.data";
import { FindBestseller } from "./BestsellerItemSearch";
import { Container, Grid } from "@mui/material";
import './style/bestseller-section.css';

const Bestseller = () => {
  const bestItem = FindBestseller(products);

  return (
    <section className="bestseller-section">
      <Container>
        <div className="d-flex justify-center">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={16} sm={8}>
              <div className="m-1n5 d-flex dir-column color-black font-archivo">
                <div className="betss-text-big">
                  BEST <br /> SELLERS
                </div>
                <div className="betss-text-small mt-1n5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt voluptatum ratione numquam voluptate ad at totam,
                  facilis perspiciatis deleniti harum.
                </div>
                <div className="betss-img-row1 mt-1n5 d-flex justify-center items-center">
                  <img
                    src={
                      "/DB/products/" +
                      bestItem?.articul +
                      "/" +
                      bestItem?.image[1]
                    }
                    alt="bst1"
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={16} sm={8}>
              <div>
                <div className="m-1n5 d-flex dir-column color-black font-archivo">
                  <div className="betss-img-row2">
                    <img
                      src={
                        "/DB/products/" +
                        bestItem?.articul +
                        "/" +
                        bestItem?.image[0]
                      }
                      alt={bestItem?.name}
                    />
                  </div>

                  <div className="d-flex justify-space-between items-center">
                    <div className="betss-item-info-text">
                      <div className="betss-brand-name mt-1">
                        {bestItem?.brand.name}
                      </div>
                      <div className="betss-item-name mt-1">{bestItem?.name}</div>
                    </div>
                    <div className="betss-item-price mt-1">
                      <span>&#36;</span>
                      {bestItem?.price}
                    </div>
                  </div>

                  <div className="betss-add-btn">
                    <a href="#">ADD TO CART</a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Bestseller;
