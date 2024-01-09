

export interface GetProducts {
  id: number;
	esFavorito?: boolean;
	nombre: string;
	descripcion: string;
	talla: string;
	precioNormal: string;
	esOferta?: boolean;
	precioOferta?: string;
	condicion?: string;
	material?: string;
	medidaCadera?: number;
	medidaPecho?: number;
	medidaLargo?: number;
	ilustradorId?: number;
	img1?: string;
	img2?: string;
	img3?: string;
}


export interface GetProductDetail {
  id: number;
	esFavorito?: boolean;
	nombre: string;
	descripcion: string;
	talla: string;
	precioNormal: string;
	esOferta?: boolean;
	precioOferta?: string;
	condicion?: string;
	material?: string;
	medidaCadera?: number;
	medidaPecho?: number;
	medidaLargo?: number;
	ilustradorId?: number;
	img1?: string;
	img2?: string;
	img3?: string;
}
