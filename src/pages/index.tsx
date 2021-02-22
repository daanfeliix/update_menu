import { useState, useEffect, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { Add, Delete, Edit } from '@material-ui/icons';
import ModalAddCategory from '../components/modalAddCategory';

import { getData } from '../services/home';
import { alterActiveCategory, updateDataAfterUpdateSubcategory } from '../services/category';
import { alterActiveSubCategory, updateSubcategoryAfterUpdateProducts } from '../services/subcategory';
import { alterActiveProduct, deleteProduct } from '../services/product';


import ISubcategory from '../models/ISubcategory';
import ICategory from '../models/ICategories';


import { Box, IconArea, Title } from '../styles/pages/home'
import formatValue from '../utils/formatValue';

export default function Home() {
  const [data, useData] = useState<ICategory[]>([]);
  const [selectedCategory, useSelectedCategory] = useState<ICategory>(null);
  const [selectedSubCategory, useSelectedSubCategory] = useState<ISubcategory>(null)
  const [viewAddCategoryModal, useViewAddCategoryModal] = useState<boolean>(false);

  useEffect(() => {
    async function post()
     {
       const response = await getData()
      useData(response)
      };
      post();
  }, []);

  useEffect(()=>{
    async function alterData(){

  const alteredCategories = await updateDataAfterUpdateSubcategory(data, selectedCategory);
  useData(alteredCategories);
    }
    selectedCategory && alterData();

  },[selectedCategory]);


  useEffect(()=>{
    async function alterSelectedCategory() {
      const alterSelectedCategory = await updateSubcategoryAfterUpdateProducts(selectedSubCategory, selectedCategory);
      useSelectedCategory({...selectedCategory, subcategorias:alterSelectedCategory});
    }
    selectedSubCategory && alterSelectedCategory();
  },[selectedSubCategory]);



  const alterSelectedCategory = useCallback((category:ICategory)=>{
    useSelectedCategory(category);
    useSelectedSubCategory(null);
  },[]);
  const handlerActiveCategory = async (id:number)=>{
    const alteredCategories = await alterActiveCategory(id, data);
    useData(alteredCategories);
  };


  const alterSubSelectedCategory = useCallback((subCategory:ISubcategory)=>{
    useSelectedSubCategory(subCategory);
  },[]);
  const handlerActiveSubCategory = async (id:number)=>{
  const alteredSubCategories = await alterActiveSubCategory(id, selectedCategory);
  useSelectedCategory({...selectedCategory, subcategorias: alteredSubCategories });
  };


  const handlerActiveProduct = async(id:number)=>{
    const alteredProducts = await alterActiveProduct(id, selectedSubCategory);
    useSelectedSubCategory({...selectedSubCategory, produtos:alteredProducts});
  }

  const handlerDeleteProduct = async(id:number)=>{
    const listProductAfterDelete = await deleteProduct(id, selectedSubCategory);
    useSelectedSubCategory({...selectedSubCategory, produtos:listProductAfterDelete});
  }








  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} className={'paper'}>
            <Title>Categorias
            <Button variant='contained' onClick={()=>{useViewAddCategoryModal(!viewAddCategoryModal)}}><Add /></Button>
            </Title>

            <hr />
            { data.map((category)=>(
            <Box selected={selectedCategory && category.id === selectedCategory.id} key={'cat'+category.id}>

              <Grid container spacing={2} className={'productGrid'}>
                <Grid item xs={8} sm={9} onClick={()=>alterSelectedCategory(category)} className={'productName'}>
                  {category.nome}
              </Grid>
                <IconArea item xs={4} sm={3} >
                  <Switch size="small" checked={!!category.ativa} onClick={()=>handlerActiveCategory(category.id)}/>
                  <Button> <Delete /></Button>


                </IconArea>
              </Grid>
            </Box>
            ))}
          </Paper>

          <Paper elevation={3} className={'paper'}>
            <Title>Subcategorias</Title>

            <hr />
            {
              selectedCategory &&  selectedCategory.subcategorias.map((subcategory)=>(
            <Box selected={selectedSubCategory && subcategory.id === selectedSubCategory.id} key={'sub'+subcategory.id}>
              <Grid container spacing={2} className={'productGrid'}>
                <Grid item xs={8} sm={9} onClick={()=>alterSubSelectedCategory(subcategory)} className={'productName'}>
                  {subcategory.nome}
              </Grid>
                <IconArea item xs={4} sm={3} >
                  <Switch size="small" checked={!!subcategory.ativa} onClick={() => handlerActiveSubCategory(subcategory.id) } />
                  <Button> <Delete /></Button>


                </IconArea>
              </Grid>
            </Box>
            ))}
          </Paper>
        </Grid>
        {selectedSubCategory &&
        <Grid item xs={12} sm={8} className={'grid'}>
          <Paper elevation={3} className={'paper'}>
            <Title>Produtos</Title>

            <hr />
            {selectedSubCategory && selectedSubCategory.produtos.map((product)=>(
            <Box key = {'prod'+product.id} >
              <Grid container spacing={1}  className={'productGrid'}>
                <Grid item xs={5} sm={6} >
                  <h4>{product.nome}</h4>
                  <p>{product.descricao}</p>
              </Grid>
              <Grid item xs={3} sm={2}>
                {formatValue(product.valor)}
              </Grid>
                <IconArea item xs={3} sm={4} >
                  <Switch size="small" checked={!!product.ativo} onChange={() => handlerActiveProduct(product.id)} />
                  <Button> <Edit /></Button>
                  <Button onClick={async ()=>await handlerDeleteProduct(product.id)}> <Delete /></Button>
                </IconArea>
              </Grid>
            </Box>
            ))}
          </Paper>
        </Grid>}
      </Grid>



      <ModalAddCategory enabled={viewAddCategoryModal} />

    </>
  )
}
