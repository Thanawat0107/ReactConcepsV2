import { useCart } from "../context/CartContext";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Item.css";

export const Item = (props) => {
  const { id, name, price, image, quantity } = props;
  const {formatMoney, removeItem, addQuantity, subtractQuantity} = useCart();
  

  return (
    <div className="card">
      <img src={image} />
      <div className="product">
        <p className="name" style={{fontSize: "1.2vw"}}>ชื่อสินค้า : {name} </p>
        <p className="price" style={{fontSize: "1.2vw"}}>ราคา : {formatMoney(price)} บาท </p>
      </div>

      <div className="total-price" style={{fontSize: "1.2vw"}}>${formatMoney(quantity * price)}</div>

      <div className="quantity">
        <button className="addQuantity" onClick={()=>addQuantity(id)}><AddCircleIcon/></button>
        <input type="text" value={quantity} disabled style={{fontSize: "1.2vw"}} />
        <button className="subtractQuantity" onClick={()=>subtractQuantity(id)}><RemoveCircleIcon/></button>
      </div>
      <button className="delete_prod" style={{fontSize: "1.2vw"}} onClick={()=>removeItem(id)}><DeleteIcon/></button>
    </div>
  );
};
