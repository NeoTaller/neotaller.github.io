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

export const getProductoByCategoria = async(id:number) => {

    try {
        const { data } = await axiosIntance.get<GetProducts[]>(`/productos/categoria/${id}`);
    
        return data;
        
    } catch (error) {
        console.log(error)
    }

}