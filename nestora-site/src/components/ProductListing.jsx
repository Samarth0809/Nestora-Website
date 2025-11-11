import './ProductListing.css';
import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import sampleImg from '../assets/react.svg';

const ProductListing = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('popular');

  const products = useMemo(() => (
    [
      { id: 101, name: 'Milk 1L', price: '₹49', category: 'Dairy', image: sampleImg },
      { id: 102, name: 'Bananas (6pcs)', price: '₹39', category: 'Fruits', image: sampleImg },
      { id: 103, name: 'Bread Loaf', price: '₹35', category: 'Bakery', image: sampleImg },
      { id: 104, name: 'Potatoes 1kg', price: '₹29', category: 'Vegetables', image: sampleImg },
      { id: 105, name: 'Eggs (6 pcs)', price: '₹60', category: 'Dairy', image: sampleImg },
      { id: 106, name: 'Chips Pack', price: '₹49', category: 'Snacks', image: sampleImg },
      { id: 107, name: 'Apple (1 pc)', price: '₹25', category: 'Fruits', image: sampleImg },
      { id: 108, name: 'Instant Noodles', price: '₹20', category: 'Pantry', image: sampleImg }
    ]
  ), []);

  const categories = useMemo(() => ['All', 'Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Snacks', 'Pantry'], []);

  const filtered = products.filter(p => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="products" className="product-listing">
      <div className="container listing-container">
        <aside className="listing-sidebar">
          <div className="search-box">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for products, e.g., milk, chips" aria-label="Search products" />
          </div>
          <div className="categories">
            <h4>Categories</h4>
            <ul>
              {categories.map((c) => (
                <li key={c} className={c === category ? 'active' : ''} onClick={() => setCategory(c)}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="sort">
            <h4>Sort</h4>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="popular">Popular</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </aside>

        <main className="listing-main">
          <div className="listing-header">
            <h2>All products</h2>
            <p className="muted">Showing {filtered.length} items{category !== 'All' ? ` in ${category}` : ''}</p>
          </div>

          <div className="listing-grid">
            {filtered.map(p => (
              <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} image={p.image} />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default ProductListing;
