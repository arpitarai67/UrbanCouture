import "./DiscountBanner.css";

function DiscountBanner() {
  return (
    <div className="banner-container">
      <div className="banner-heading">
        <h1>COUPONS</h1>
      </div>
      <div className="banner-strips">
        <div className="banner-strip">
          <div className="coupon-deal">
            FLAT 100 OFF*
            <p>On All Products</p>
          </div>
          <div className="coupon-code">
            USE CODE
            <button>SHOPIFY100</button>
          </div>
        </div>
        <div className="banner-strip">
          <div className="coupon-deal">
            FLAT 200 OFF*
            <p>On All Products</p>
          </div>
          <div className="coupon-code">
            USE CODE
            <button>SHOPIFY200</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner;
