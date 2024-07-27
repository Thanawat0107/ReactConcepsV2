import { createContext,useContext} from "react"
import {products} from "../data/product"


//สร้างพื้นที่ส่วนกลางสำหรับจัดเก็บ state
const CartContext = createContext();


const initState = {
    products:products,
    total:0,
    amount:0
}


//ส่ง state และค่าต่างๆ ออกไปใช้งานข้างนอก
export const useCart = ()=>{
    return useContext(CartContext);
}
