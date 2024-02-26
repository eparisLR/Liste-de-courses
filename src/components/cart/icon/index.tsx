import { ICartIconProps } from "./cart-icon.type";
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { addToCart, removeFromCart } from "../../../modules/cart/cart.service";

const CartIcon = ({ isInCart, recipeId, setIsInCart }: ICartIconProps) => {
  return isInCart ? (
    <BsFillCartDashFill size={23} />
  ) : (
    <BsCartPlusFill size={23} />
  );
};

export default CartIcon;
