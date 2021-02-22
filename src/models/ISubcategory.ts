import IProduct from './IProduct'
export default interface ISubcategory{
  id: number;
  nome: string;
  categoria: number;
  ativa:boolean;
  produtos:IProduct[];

}
