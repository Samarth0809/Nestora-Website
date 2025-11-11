import './ProductCard.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ id, name, price, image }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="product-card" role="listitem">
      <div className="product-image-wrap">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-meta">
          <span className="product-price">{price}</span>
          <button className="add-btn" onClick={handleAdd} aria-label={`Add ${name} to cart`}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
