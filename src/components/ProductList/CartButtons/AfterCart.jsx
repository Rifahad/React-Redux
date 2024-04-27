import { useDispatch, useSelector } from 'react-redux'
import './CartButton.css'
import {  decrement, increment } from "../../../redux/Cart";


function AfterCart() {
  const {cartCount} = useSelector((state) =>state.cart)
  const dispatch=useDispatch()


  return (
    <div className='after-cart'>
        <button className='cart-counter-button' onClick={()=> dispatch(decrement())}>-</button>
      <div className='cart-count'>{cartCount}</div>
      <button className='cart-counter-button' onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default AfterCart
