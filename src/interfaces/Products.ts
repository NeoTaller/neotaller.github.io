
export interface GetProducts {
    id:          number;
    nombre:      string;
    descripcion: string;
    precio:      number;
}

export interface GetProductDetail {
    id:          number;
    idMarca:     number;
    nombre:      string;
    descripcion: string;
    precio:      number;
    inventario: inventario[];
}

interface inventario {
  id: number;
  talla: string;
  cantidad: number; 
}
