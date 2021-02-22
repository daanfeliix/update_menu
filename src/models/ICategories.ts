import ISubcategory from './ISubcategory'

export default interface ICategory{

  id:number;
  nome:string;
  ativa: boolean;
  subcategorias:ISubcategory[];

}
