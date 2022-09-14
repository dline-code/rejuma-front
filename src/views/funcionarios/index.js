import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CContainer,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
} from '@coreui/react'
import React, { useState } from 'react'
//import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { funcionarios } from './mock'

function Funcionarios() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <CCardTitle> Funcionários </CCardTitle>
            <CButton onClick={() => setVisible(!visible)}>Adicionar Funcionário</CButton>
          </CCardHeader>

          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>#</CTableHeaderCell>
                  <CTableHeaderCell width={'35%'}>Nome</CTableHeaderCell>
                  <CTableHeaderCell width={'25%'}>Gênero</CTableHeaderCell>
                  <CTableHeaderCell>Cargo</CTableHeaderCell>
                  <CTableHeaderCell>Salário</CTableHeaderCell>
                  <CTableHeaderCell>Editar</CTableHeaderCell>
                  <CTableHeaderCell>Excluir</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {funcionarios.map((item) => {
                  return (
                    <CTableRow key={item.id}>
                      <CTableDataCell> {item.id} </CTableDataCell>
                      <CTableDataCell> {item.nome} </CTableDataCell>
                      <CTableDataCell> {item.genero} </CTableDataCell>
                      <CTableDataCell> {item.cargo} </CTableDataCell>
                      <CTableDataCell> {item.salario} </CTableDataCell>
                      <CTableDataCell> {item.iconPen} </CTableDataCell>
                      <CTableDataCell> {item.iconTrash} </CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>

              <CTableFoot></CTableFoot>
            </CTable>
          </CCardBody>
        </CCard>
      </CContainer>

      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle> Funcionários </CModalTitle>
        </CModalHeader>

        <CModalBody>
          <CForm>
            <CFormInput type="name" id="" placeholder="Nome" text="Must be 8-20 characters long." />
            <br />
            <CFormInput
              type="text"
              id=""
              placeholder="Gênero"
              text="Must be 8-20 characters long."
            />
            <br />
            <CFormInput
              type="text"
              id=""
              placeholder="Cargo"
              text="Must be 8-20 characters long."
            />
            <br />
            <CFormInput type="number" id="" placeholder="Salário" />
          </CForm>
        </CModalBody>

        <CModalFooter>
          <CButton onClick={() => setVisible(false)}> Salvar </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Funcionarios
