import "./Header.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from "../context/CartContext";

export const Header = () => {
  const { amount } = useCart();

  return (
    <header>
      <p style={{fontSize: "1.6vw"}}>Shopping Application</p>
      <p style={{fontSize: "1.6vw"}}><AddShoppingCartIcon style={{fontSize: "2vw"}}/>{amount}</p>
    </header>
  );
};
