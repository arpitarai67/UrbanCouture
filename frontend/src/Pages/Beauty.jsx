import ProductCard from "../Components/ProductCard";
import beautyProductData from "../Data/BeautyData";

function Beauty() {
  return (
    <>
      <section className="product-grid">
        {beautyProductData.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            imgSrc={product.imgSrc}
            brand={product.brand}
            fabric={product.product} // Using 'fabric' to display product name/type
            price={product.price}
            mrp={product.mrp}
            discount={product.discount}
          />
        ))}
      </section>
    </>
  );
}
export default Beauty;
