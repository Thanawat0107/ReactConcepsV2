import { Item } from "./Item";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { products } = useCart();
  return (
    <div>
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
};
