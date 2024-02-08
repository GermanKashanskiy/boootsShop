import React from "react";
import { products } from "../../api/data/products.data";
import { FindBestseller } from './BestsellerItemSearch';
import { Container, Grid } from "@mui/material";

const Bestseller = () => {
    const bestItem = FindBestseller(products);

    return (
        <Container>
            <div className="betss-rows">
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={16} sm={8}>
                        <div className="betss-row1">
                            <div className="betss-text-big">
                                BEST <br /> SELLERS
                            </div>
                            <div className="betss-text-small">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatum ratione numquam voluptate ad at totam, facilis perspiciatis deleniti harum.
                            </div>
                            <div className="betss-img-row1">
                                <img src={'/DB/products/' + bestItem?.articul + '/' + bestItem?.image[1]} alt="bst1" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={16} sm={8}>
                        <div className="betss-row2">
                            <div className="best-item">
                                <div className="betss-img-row2">
                                    <img src={'/DB/products/' + bestItem?.articul + '/' + bestItem?.image[0]} alt={bestItem?.name} />
                                </div>

                                <div className="betss-item-info">
                                    <div className="betss-item-info-text">
                                        <div className="betss-brand-name">{bestItem?.brand.name}</div>
                                        <div className="betss-item-name">{bestItem?.name}</div>
                                    </div>
                                    <div className="betss-item-price"><span>&#36;</span>{bestItem?.price}</div>
                                </div>

                                <div className="betss-add-btn">
                                    <a href={bestItem?.page}>ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default Bestseller;