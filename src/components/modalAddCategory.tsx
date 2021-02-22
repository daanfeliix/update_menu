import { Button } from '@material-ui/core';
import { useState } from 'react';
import { Modal, Main } from '../styles/components/modalAddCategory';

interface IModalProps{
  enabled:boolean
}

export default function ModalAddCategory({ enabled }:IModalProps) {

  const [closeModal, useCloseModal] = useState(true);
  const disableModal = () =>{
    useCloseModal(!closeModal);

  }

  return (
    <>
    <Main enabled = {enabled === closeModal} >
    <Modal>
      <div className="menubar">
        <h1>Adicionar Categoria</h1>
      </div>

      <div className="body">
        <label htmlFor="nome">
          <span>Nome</span>
          <input type="text" id="nome"/>
        </label>
      </div>

      <div className="footer">
        <Button variant='contained' onClick={()=>disableModal()} >Cancelar</Button>
        <Button variant='contained' >Salvar</Button>

      </div>
    </Modal>
    </Main>
    </>



  )
}
