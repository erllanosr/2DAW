import '../assets/bootstrap.css';
// import ProductCard from './ProductCard';
import ProductMui from './ProductMui';
function Product() {
  return (
    <div className="container py-5">
      <div className='row row-cols-4 gap-5'>
        <ProductMui></ProductMui>
      </div>
    </div>
  )
}
export default Product