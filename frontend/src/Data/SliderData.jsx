import mensSliderImage from '../images/mens-slider.avif';
import womenSliderImage from '../images/women-slider.avif';
import kidsliderImage from '../images/kids-slider-img.jpeg';
import homeSliderImage from "../images/home-slider-img.jpeg";
import homePageSliderImage from '../images/homepage-slider-img.webp';
import beautySliderImage from "../images/beauty.webp";
export const sliderData = [
  {
    path: "/", // Home page
    imgSrc: homePageSliderImage,
    headingText: "Home Collection",
    discountText: "Up to 50% off",
    brandText: "Exclusive Home Deals"
  },
  {
    path: "/men",
    imgSrc: mensSliderImage,
    headingText: "Men's Collection",
    discountText: "Min. 40% off",
    brandText: "Best Deals for Men"
  },
  {
    path: "/women",
    imgSrc: womenSliderImage,
    headingText: "Women's Fashion",
    discountText: "Flat 50% off",
    brandText: "Top Brands for Women"
  },
  {
    path: "/kids",
    imgSrc: kidsliderImage,
    headingText: "Kids' Fashion",
    discountText: "Min. 30% off",
    brandText: "Best Deals for Kids"
  },
  {
    path: "/beauty",
    imgSrc: beautySliderImage,
    headingText: "Beauty Products",
    discountText: "Up to 60% off",
    brandText: "Top Beauty Brands"
  },
  {
    path: "/home&Living",
    imgSrc: homeSliderImage,
    headingText: "Home & Living",
    discountText: "Up to 40% off",
    brandText: "Best Home Deals"
  }
];
