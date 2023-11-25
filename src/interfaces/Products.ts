
export interface GetProducts {
    id:          number;
    nombre:      string;
    descripcion: string;
    precio:      string;
}

export interface GetProductDetail {
    id:          number;
    idMarca:     number;
    nombre:      string;
    descripcion: string;
    precio:      string;
    inventario: inventario[];
}

interface inventario {
  id: number;
  talla: string;
  cantidad: number; 
}
