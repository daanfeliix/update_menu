import ICategory from "../models/ICategories";

export async function alterActiveCategory(id:number, data): Promise<ICategory[]> {
  const alteredCategories = data.map((category)=>{
    if(category.id === id) {
    return {...category, ativa:!category.ativa}
    }
    else{
      return category
    }
  });

  return alteredCategories;
}

export async function updateDataAfterUpdateSubcategory(data:ICategory[], selectedCategory:ICategory): Promise<ICategory[]>{
  const alteredCategories = data.map((category)=>(category.id === selectedCategory.id? {...category, subcategorias:selectedCategory.subcategorias}:category));
  return alteredCategories
}

export async function addNewCategory(category:ICategory) {

  return category;

}
