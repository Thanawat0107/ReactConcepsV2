import { createContext, useContext, useReducer } from "react";
import products from "../data/products";
import { cartReducer } from "../reducer/cartReducer";

//สร้างพื้นที่ส่วนกลางสำหรับจัดเก็บ state
const CartContext = createContext();

const initState = {
  products: products,
  total: 0,
  amount: 0,
};

export const CartProvider = ({ children }) => {
  //ส่งค่าเข้าไปทำงานสองค่าคือ cartReducer และ initState
  //และ return ค่าที่จะนำไปใช้ต่อสองค่าคือ state และ dispatch
  const [state, dispatch] = useReducer(cartReducer, initState);

  //กระจายข้อมูลที่จะนำไปใช้งานหรือแชร์ด้วย Context Provider ผ่านคุณสมบัติ value
  return (
    <CartContext.Provider value={{ ...state }}>
      {children} {/* คอมโพเนนต์ที่จะทำ value ไปใช้งาน */}
    </CartContext.Provider>
  );
};

//ส่ง state และค่าต่างๆ ออกไปใช้งานข้างนอก
export const useCart = () => {
  return useContext(CartContext);
};
