import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Wishlist from "../Pages/Wishlist";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default AllRoutes;
