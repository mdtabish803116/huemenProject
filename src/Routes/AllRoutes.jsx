import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import Wishlist from "../Pages/Wishlist";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default AllRoutes;
