import styled, {css} from 'styled-components';

interface IModalProps{
  enabled?:boolean;
}


export const Main = styled.div<IModalProps>`
display:none;
position: absolute;
top:0;
left:0;
background: #0008;
width:100%;
height:100%;
padding:0px;
opacity:0;
transition: all 2s  ease;


${
  Props=>Props.enabled && css`
  display:flex;
  align-items: center;
  justify-content:center;
  opacity:1;
  `}


`

export const Modal = styled.div`

width:100vw;
height: 200px;
max-width: 600px;
background: #fff;
display:flex;
flex-direction:column;


.menubar{
  background: #232129;
  width:100%;
  text-align:center;

}
.body{
  height: 70;
  width: 100%;

  label{
    color: #232129;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    font-size: 18px;


    input{
      width:250px;
      height:30px;
      margin-top: 8px;
      padding:0px 4px;
      border: none;
      border-bottom: 1px solid;
      outline: none;
    }

  }
}

.footer{
  background: #232129;
  align-self:flex-end;
  width: 100%;
  padding: 8px 0px;
  margin-top: auto;
  display:flex;
  justify-content:space-around;
}

`


