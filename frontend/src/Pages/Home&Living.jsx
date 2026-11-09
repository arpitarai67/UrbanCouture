import ProductCard from "../Components/ProductCard";
import homeLivingProductData from "../Data/HomeLivingData";
function HomeLiving() {
  return (
    <>
      <section className="product-grid">
        {homeLivingProductData.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            imgSrc={product.imgSrc}
            brand={product.brand}
            fabric={product.product}
            price={product.price}
            mrp={product.mrp}
            discount={product.discount}
          />
        ))}
      </section>
    </>
  );
}

export default HomeLiving;
