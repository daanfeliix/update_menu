import ISubcategory from "../models/ISubcategory";
import IProduct from '../models/IProduct';
export async function alterActiveProduct(id:number, selectedSubCategory:ISubcategory){
  const alteredProducts = selectedSubCategory.produtos.map((product)=>{
    if(product.id === id){
      return{...product, ativo:!product.ativo}
    }
    else{
      return product;
    }
  });

  return alteredProducts;
}


export async function deleteProduct(id:number, selectedSubcategory:ISubcategory):Promise<IProduct[]> {

  const listProductsAfterDelete = selectedSubcategory.produtos.filter((product)=>(product.id !== id));

  return listProductsAfterDelete;


}
