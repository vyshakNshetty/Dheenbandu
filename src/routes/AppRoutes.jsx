import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "../components/common/Spinner";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Activities = lazy(() => import("../pages/Activities"));
const Gallery = lazy(() => import("../pages/Gallery"));
const GetInvolved = lazy(() => import("../pages/GetInvolved"));
const Contact = lazy(() => import("../pages/Contact"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;