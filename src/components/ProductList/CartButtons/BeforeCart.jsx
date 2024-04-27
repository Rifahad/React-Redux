import { useDispatch } from 'react-redux'
import './CartButton.css'
import { addToCart } from "../../../redux/Cart";

function BeforeCart() {
  const dispatch=useDispatch()

  return (
    <div className='before-cart'>
      <button className='add-cart-button' onClick={ () => dispatch(addToCart()) }>Add to cart</button>
    </div>
  )
}

export default BeforeCart
