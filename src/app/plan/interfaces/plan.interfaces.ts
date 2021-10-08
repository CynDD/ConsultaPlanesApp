export interface Plan {
    id:           number;
    inciso:       number;
    descInciso:   string;
    ue:           number;
    descUe:       string;
    uc:           number;
    descUc:       string;
    compras:      Compra[];
    
}

export interface Compra {
    id:     number;
    num:    number;
    anio:   number;
}