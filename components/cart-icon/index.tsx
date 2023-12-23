import { ICartIconProps } from "./cart-icon.type";
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { useAppDispatch } from "../../lib/store";
import { addToCart, removeFromCart } from "../../lib/cart/cart.reducer";

const CartIcon = ({ isInCart, recipe }: ICartIconProps) => {
  const dispatch = useAppDispatch();
  return isInCart ? (
    <BsFillCartDashFill
      size={23}
      onClick={(_) => dispatch(removeFromCart(recipe.id))}
    />
  ) : (
    <BsCartPlusFill size={23} onClick={(_) => dispatch(addToCart(recipe))} />
  );
};

export default CartIcon;
