import React, { useEffect } from "react";
import { UseAllProducts, UseProductAmount } from "../../api/product/UseProductData";
import ProductCardItem from "../../components/product-card/ProductCardItem";
import { Container, Pagination, PaginationItem } from "@mui/material";
import { UsePageComponentsList } from "./shared/PageComponents";
import { useParams, Link } from "react-router-dom";

const Catalog = () => {
  const { pageNum } = useParams<{ pageNum: string }>();

  useEffect(() => {
  }, [pageNum]);

  return (
    <>
      {/* BUG: ON PAGE SCROLLING PREVIOUS PAGE ITEMS DONT REMOVE */}
      {/* LINE 21 (pageNum) - 1. ON PAGE 0 DONT WORK GOOD */}
      <Container>
        <div className="d-flex justify-center flex-wrap">
          {
            UsePageComponentsList(Number(pageNum) - 1, 50, UseAllProducts()).map(product => (
              <ProductCardItem item={product} key={product.articul} />
            ))
          }
        </div>
        <div className="d-flex justify-center mt-2">
          <Pagination count={Math.round(UseProductAmount() / 50)} page={Number(pageNum) || 1}
            renderItem={(item) => (<PaginationItem component={Link} to={`/catalog/${item.page}`} {...item} />)}
            showFirstButton showLastButton />
        </div>
      </Container>
    </>
  );
}

export default Catalog;
