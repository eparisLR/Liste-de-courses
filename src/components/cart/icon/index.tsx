import { ICartIconProps } from "./cart-icon.type";
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { addToCart, removeFromCart } from "../../../modules/cart/cart.service";

const CartIcon = ({ isInCart, recipeId, setIsInCart }: ICartIconProps) => {
  return isInCart ? (
    <BsFillCartDashFill
      size={23}
      onClick={(_) => {
        removeFromCart(recipeId);
        setIsInCart(!isInCart);
      }}
    />
  ) : (
    <BsCartPlusFill
      size={23}
      onClick={(_) => {
        addToCart(recipeId);
        setIsInCart(!isInCart);
      }}
    />
  );
};

export default CartIcon;
