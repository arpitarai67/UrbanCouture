import ProductCard from "../Components/ProductCard";
import womenProductData from "../Data/WomenData";
function Women() {
  
  return (
    <>
      <section className="product-grid">
      {womenProductData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
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

export default Women;
