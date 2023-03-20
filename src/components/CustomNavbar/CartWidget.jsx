import { BsCart4 } from 'react-icons/bs';
import { useContext } from 'react'; 
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {cartList} = useContext(CartContext)

  console.log(cartList)
  return (
    <i style={{fontSize: "30px", display: "flex", alignItems: "center"}}>
      {cartList.length}
      <BsCart4 />
    </i>
  );
};

export default CartWidget;



