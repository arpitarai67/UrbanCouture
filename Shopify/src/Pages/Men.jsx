import ProductCard from "../Components/ProductCard";

import menData from "../Data/MenData"

function Men() {
  return (
    <>
      <section className="product-grid">
      {menData.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          imgSrc = {product.imgSrc}
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

export default Men;
