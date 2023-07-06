import { Button } from "@mui/material";
import ProductList from "./ProductList";
import { useEffect } from "react";
import Loading from "../../app/layout/Loading";
import { useAppDispatch, useAppSelector } from "../../app/util/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(!productsLoaded) dispatch(fetchProductsAsync())
  }, [productsLoaded,dispatch]);

  if (status.includes('pending')) return <Loading message="Loading products..." />;

  return (
    <>
      <ProductList products={products} />
      <Button variant="contained">Add Product</Button>
    </>
  );
}
