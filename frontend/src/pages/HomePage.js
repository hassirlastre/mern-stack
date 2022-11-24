import { useProducts } from '../context/ProductContext';
import { ImFileEmpty } from 'react-icons/im';
import { Link } from 'react-router-dom';

export function HomePage() {
  const { products } = useProducts();

  if (products.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <ImFileEmpty className="text-9xl" />
        <h1 className="text-3xl">There aren't no products yet</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">

    <Link to="/new-product">Create a new product</Link>

      {products.map((product) => (
        <div key={product._id}>
          {product.name}
          {product.description}
          {product.price}
          {product.stock}
        </div>
      ))}
    </div>
  );
}
