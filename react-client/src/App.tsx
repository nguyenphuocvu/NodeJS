import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

import LoginPage from "./pages/LoginPage";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import LayoutDefault from "./components/layouts/LayoutDefault";
import CustomerPage from "./pages/CustomerPage";
import CustomerProfile from "./pages/CustomerPage/CustomerProfile";
import CustomerOrders from "./pages/CustomerPage/CustomerOrders";
import CustomerDashboard from "./pages/CustomerPage/CustomerDashboard";
import numeral from 'numeral'
import 'numeral/locales/vi';
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

const queryClient = new QueryClient();
//định dạng tiền tệ theo kiểu việt nam
numeral.locale('vi');

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutDefault />}>
              <Route index element={<HomePage />} />
              <Route path="/categories/:id" element={<CategoryPage />} />
              <Route path="/products/:slug" element={<ProductPage />} />
              <Route path="/customer" element={<CustomerPage />}>
                <Route index element={<CustomerDashboard />} />
                <Route path="/customer/profile" element={<CustomerProfile />} />
                <Route path="/customer/orders" element={<CustomerOrders />} />
              </Route>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
           
           
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;