import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SimilarProduct from "./pages/SimilarProduct/SimilarProduct";
import * as routes from "@/constant/router";
import { OurRangeOfProduct } from "./pages/OurRangeOfProduct/OurRangeOfProduct";

import "./App.css";
import "./fonts/AntiqueOliveTCompactRegular.otf";

function App() {
  return (
    <Routes>
      <Route path={routes.Product.searchProduct} element={<ProductList />} />
      <Route path={routes.Product.productDetail} element={<ProductDetail />} />
      <Route
        path={routes.Product.productSimilar}
        element={<SimilarProduct />}
      />
      <Route
        path={routes.Product.ourRangeOfProduct}
        element={<OurRangeOfProduct />}
      />
    </Routes>
  );
}

export default App;
