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
} from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { alunos } from './mock'

function Cadastro() {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <CCardTitle> Cadastro </CCardTitle>
            <Link to="/cadastro/create">
              <CButton>Novo Cadastro</CButton>
            </Link>
          </CCardHeader>

          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>#</CTableHeaderCell>

                  <CTableHeaderCell width={'35%'}>Nome</CTableHeaderCell>
                  <CTableHeaderCell width={'25%'}>BI Nº</CTableHeaderCell>
                  <CTableHeaderCell>Género</CTableHeaderCell>
                  <CTableHeaderCell>Data de Nascimento</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {alunos.map((item) => {
                  return (
                    <CTableRow key={item.id}>
                      <CTableDataCell> {item.id} </CTableDataCell>
                      <CTableDataCell> {item.nome} </CTableDataCell>
                      <CTableDataCell> {item.bi} </CTableDataCell>
                      <CTableDataCell> {item.genero} </CTableDataCell>
                      <CTableDataCell> {item.datadeNascimento} </CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>

              <CTableFoot></CTableFoot>
            </CTable>
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  )
}

export default Cadastro
