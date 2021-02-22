import ICategory from "../models/ICategories";
import ISubcategory from "../models/ISubcategory";

export async function alterActiveSubCategory(id, selectedCategory): Promise<ISubcategory[]> {
  const alteredSubCategories = selectedCategory.subcategorias.map((subCategory)=>{
    if(subCategory.id === id) {
    return {...subCategory, ativa:!subCategory.ativa}
    }
    else{
      return subCategory
    }
  });

  return alteredSubCategories;

}

export async function updateSubcategoryAfterUpdateProducts(selectedSubcategory:ISubcategory, selectedCategory:ICategory ): Promise<ISubcategory[]> {
  const alteredSelectedSubcategories = selectedCategory.subcategorias.map((subcategory)=>(subcategory.id === selectedSubcategory.id? {...subcategory, produtos:selectedSubcategory.produtos}: subcategory));


  return alteredSelectedSubcategories;

}
