import Product from "./Product";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid  sm:grid-cols-1 lg:grid-cols-1  justify-items-center">
      
        <Product key={products[0].id} {...products[0]} />
      
    </div>
  );
};

export default ProductGrid;
