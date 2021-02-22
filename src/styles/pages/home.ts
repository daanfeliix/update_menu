import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid'

interface IBoxProps{
  selected?:boolean;
}

export const Title = styled.div `
  display:flex;
  font-size: 28px;
  font-weight:bold;
  align-items:center;
  justify-content:space-around;
  padding:8px;

  Button{
    color:#fff;
    background-color:#00e676;
    width: 30px;
    height:25px;
    font-weight:700;

    &:hover, &:active{
      background-color:#00c853
;
    }
  }
`


export const Box = styled.div<IBoxProps>`
 padding: 5px 2px;
 box-sizing:border-box;
 width:100%;
 box-sizing:border-box;
 ${props =>
 props.selected &&
 css`
 background:#ddd;
 `}
`

export const IconArea = styled(Grid)`
  display:flex;
  justify-content:center;
  flex-direction:row;
  align-items:center;
`





