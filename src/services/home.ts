import ICategory from "../models/ICategories";

export async function getData(): Promise<ICategory[]> {
  const response = await fetch('https://menufacil.net.br/imperial-espeteria/api/view/admin/Cardapio.php/selectAll', {
    method: 'POST'
  });

  const responseJson = await response.json()
  return responseJson;

}











