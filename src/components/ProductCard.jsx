import'./../styles/Products.css'//import custom styles for products cards

const ProductCard = ({ product }) => {//functional component that receives a product as a prop
    return (
      <div className="product-card">{/*container for the product card*/}
        
        {/*displaying product image*/}
<img className='imgPro'src={product.image_url} alt={product.name} />
 {/*displaying product name*/}
        <h3 className='name'>{product.name}</h3>
         {/*displaying product description*/}
        <p className='description'>{product.description}</p>
         {/*displaying product price*/}
        <p className="price">${product.price}</p>
         {/*cart button*/}
        <button className='cart'>Add to Cart</button>
      </div>
    );
  };
  
   export default ProductCard;



