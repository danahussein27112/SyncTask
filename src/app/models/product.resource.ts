export interface ProductResource{
    id : string;
    name : string;
    data : Data;
    createdDate : string;
}
export interface Data {
    capacity: string;
    color: string;
}