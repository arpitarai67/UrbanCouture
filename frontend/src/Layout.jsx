import Header from "./Components/Header";
import Slider from "./Components/Slider";
import { Outlet, useLocation } from "react-router-dom";
import { sliderData } from "./Data/SliderData";
import DiscountBanner from "./Components/DiscountBanner";
import Footer from "./Components/Footer";

function Layout() {
  const location = useLocation();

  // Define paths where the DiscountBanner should be hidden
  const hiddenBannerPaths = ["/cart", "/wishlist", "/login", "/register","/profile"];

  // Find the slider data for the current page based on the path
  const currentSlider = sliderData.find(slide => slide.path === location.pathname);

  return (
    <>
      <Header />
      {currentSlider && (
        <Slider
          imgSrc={currentSlider.imgSrc}
          headingText={currentSlider.headingText}
          discountText={currentSlider.discountText}
          brandText={currentSlider.brandText}
        />
      )}
      {/* Render the DiscountBanner only if the current path is not in hiddenBannerPaths */}
      {!hiddenBannerPaths.includes(location.pathname) && <DiscountBanner />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
