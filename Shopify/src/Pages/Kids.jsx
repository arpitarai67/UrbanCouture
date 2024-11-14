import ProductCard from "../Components/ProductCard";
import kidsProductData from "../Data/KidsData";
function Kids() {
  return (
    <>
      <section className="product-grid">
        {kidsProductData.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id} // Use a unique key in production
            imgSrc={product.imgSrc}
            brand={product.brand}
            fabric={product.fabric}
            price={product.price}
            mrp={product.mrp}
            discount={product.discount}
          />
        ))}
      </section>
    </>
  );
}

export default Kids;
