import axiosIntance from "../helpers/axiosIntance"
import { GetProducts } from "../interfaces/Products";



export const getProductos = async() => {

    try {
        const { data } = await axiosIntance.get<GetProducts[]>("/productos");
    
        return data;
        
    } catch (error) {
        console.log(error)
    }

}