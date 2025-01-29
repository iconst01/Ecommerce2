import'./../styles/Products.css'

const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        
        
<img className='imgPro'src={product.image_url} alt={product.name} />
        <h3 className='name'>{product.name}</h3>
        <p className='description'>{product.description}</p>
        <p className="price">${product.price}</p>
        <button className='cart'>Add to Cart</button>
      </div>
    );
  };
  
   export default ProductCard;



