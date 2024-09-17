import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFOund from "./pages/PageNotFOund";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<li>list of cities</li>} />
          <Route path="cities" element={<li>List of cities</li>} />
          <Route path="countries" element={<li>List of countries</li>} />
          <Route path="form" element={<li>FORM</li>} />
        </Route>
        <Route path="login" element={<Login />} />

        <Route path="*" element={<PageNotFOund />} />
      </Routes>
    </BrowserRouter>
  );
}
