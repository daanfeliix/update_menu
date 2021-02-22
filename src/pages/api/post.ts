export default async (req, res) => {

  const data = await fetch('https://menufacil.net.br/imperial-espeteria/api/view/admin/Cardapio.php/selectAll', {
    method:'POST'
  });
  res.status(200).json(await data.json())
}
