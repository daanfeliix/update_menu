import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
}

body{
  background:#ccc;
  color:#dedede;
  font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;
  max-width: 100vw;
  padding: 0px 8px;

}

.paper{
  margin-top:10px;
  width: 100%;
  padding:0px;
}

.productName{
  cursor: pointer;
}

.productGrid{
  display: flex;
  align-items: center;
}

.grid{
  width:100%;
}
`
