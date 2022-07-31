import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CContainer,
  CLink,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'

function Matriculas() {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <CCardTitle> Matriculas </CCardTitle>
            <CLink href="/matriculas/create">
              <CButton> Nova Matricula </CButton>
            </CLink>
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
                <CTableRow>
                  <CTableDataCell> 1 </CTableDataCell>
                  <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                  <CTableDataCell> 009696435LA190 </CTableDataCell>
                  <CTableDataCell> M </CTableDataCell>
                  <CTableDataCell> 10/09/1990 </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell> 2 </CTableDataCell>
                  <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                  <CTableDataCell> 009696435LA190 </CTableDataCell>
                  <CTableDataCell> M </CTableDataCell>
                  <CTableDataCell> 10/09/1990 </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell> 3 </CTableDataCell>
                  <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                  <CTableDataCell> 009696435LA190 </CTableDataCell>
                  <CTableDataCell> M </CTableDataCell>
                  <CTableDataCell> 10/09/1990 </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell> 4 </CTableDataCell>
                  <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                  <CTableDataCell> 009696435LA190 </CTableDataCell>
                  <CTableDataCell> M </CTableDataCell>
                  <CTableDataCell> 10/09/1990 </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell> 5 </CTableDataCell>
                  <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                  <CTableDataCell> 009696435LA190 </CTableDataCell>
                  <CTableDataCell> M </CTableDataCell>
                  <CTableDataCell> 10/09/1990 </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell> 6 </CTableDataCell>
                  <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                  <CTableDataCell> 009696435LA190 </CTableDataCell>
                  <CTableDataCell> M </CTableDataCell>
                  <CTableDataCell> 10/09/1990 </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell> 7 </CTableDataCell>
                  <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                  <CTableDataCell> 009696435LA190 </CTableDataCell>
                  <CTableDataCell> M </CTableDataCell>
                  <CTableDataCell> 10/09/1990 </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell> 8 </CTableDataCell>
                  <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                  <CTableDataCell> 009696435LA190 </CTableDataCell>
                  <CTableDataCell> M </CTableDataCell>
                  <CTableDataCell> 10/09/1990 </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell> 9 </CTableDataCell>
                  <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                  <CTableDataCell> 009696435LA190 </CTableDataCell>
                  <CTableDataCell> M </CTableDataCell>
                  <CTableDataCell> 10/09/1990 </CTableDataCell>
                </CTableRow>
              </CTableBody>
              <CTableFoot></CTableFoot>
            </CTable>
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  )
}

export default Matriculas
