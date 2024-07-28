import "./ProductCart.css";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export const ProductCart = ({ product }) => {
  const { name, price, image } = product;
  const dispatch = useDispatch();

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => dispatch(remove(product))}><RemoveShoppingCartIcon/></button>
    </div>
  );
};
