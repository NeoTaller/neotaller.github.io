export interface Usuario {
    id?: number;
    email: string;
    password: string;
    nombres: string;
    apellidos: string;
    telefono?: string;
    direccionDespacho?: string;
    numeroDepartamntoDespacho?: string;
    comunaDespacho?: string;
    regionDespacho?: string;
    direccionFacturacion?: string;
    numeroDepartamntoFacturacion?: string;
    comunaFacturacion?: string;
    regionFacturacion?: string;
    rol?: string;
    iat?: number;
    exp?: number;
    isAuth?: boolean;
}