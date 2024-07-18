import ProductCard from '../components/ProductCard';

const Collection = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: '$10', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', image: '/path/to/image2.jpg' },
  ];

  return (
    <main>
      <h1>Collection</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Collection;
