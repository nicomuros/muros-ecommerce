import { BsCart4 } from 'react-icons/bs';
import { useContext } from 'react'; 
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {getCartTotalQuantity} = useContext(CartContext)
  const totalProducts = getCartTotalQuantity()

  return (
    <i style={{fontSize: "30px", display: "flex", alignItems: "center"}}>
      {totalProducts}
      <BsCart4 />
    </i>
  );
};

export default CartWidget;



