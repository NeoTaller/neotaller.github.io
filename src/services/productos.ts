import axiosIntance from "../helpers/axiosIntance"
import { GetProducts } from "../interfaces/Products";



export const getProductos = async() => {

    try {
        const { data } = await axiosIntance.get<GetProducts[]>("/productos?limit=100");
    
        return data;
        
    } catch (error) {
        console.log(error)
    }

}

export const getProductosHome1 = async() => {

  try {
      const { data } = await axiosIntance.get<GetProducts[]>("/productos?limit=8");
  
      return data;
      
  } catch (error) {
      console.log(error)
  }

}

export const getProductosHome2 = async() => {

  try {
      const { data } = await axiosIntance.get<GetProducts[]>("/productos?limit=8&page=2");
  
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