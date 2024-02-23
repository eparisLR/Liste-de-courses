import { ICartIconProps } from "./cart-icon.type";
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { addToCart, removeFromCart } from "../../modules/cart/cart.service";

const CartIcon = ({ isInCart, recipe, setIsInCart }: ICartIconProps) => {
  return isInCart ? (
    <BsFillCartDashFill
      size={23}
      onClick={(_) => {
        removeFromCart(recipe.id);
        setIsInCart(!isInCart);
      }}
    />
  ) : (
    <BsCartPlusFill
      size={23}
      onClick={(_) => {
        addToCart(recipe.id);
        setIsInCart(!isInCart);
      }}
    />
  );
};

export default CartIcon;
