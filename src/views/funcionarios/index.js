/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
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
import { funcionarios } from './mock'


function Funcionarios () {
    return (
        <>
        <CContainer>
            <CCard>
                <CCardHeader
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <CCardTitle> Funcionários </CCardTitle>
                    <Link to="/funcionarios/create">
                    <CButton>Adicionar Funcionário</CButton>
                    </Link>
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

export default Funcionarios