import { Item } from "./Item";
import { useCart } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
export const Cart = () => {
  const { products, total, formatMoney } = useCart();
  return (
    <div>
      <NavLink className="" to="addProducts"><Button variant="contained" color="success">Cereate</Button>
      </NavLink>

      <h1 style={{ textAlign: "center" }}>
        {products.length > 0 ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท` : "ไม่มีสินค้าในตะกร้า"}
      </h1>
      
      { products.map((data) => <Item key={data.id} {...data} />) }
    </div>
  );
};
