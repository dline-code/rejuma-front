/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import { 
    //CButton,
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
  import CIcon from '@coreui/icons-react'
  import { cilDelete } from '@coreui/icons'
  import { Link } from 'react-router-dom/cjs/react-router-dom.min'
  
  
  function Produtos () {
      return (
          <>
          <CContainer>
              <CCard>
                  <CCardHeader
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                      <CCardTitle> Produtos </CCardTitle>
                      <Link to="/produtos/create">
                    <CButton>Adicionar Produtos</CButton>
                    </Link>
                  </CCardHeader>
  
                  <CCardBody>
                      <CTable bordered>
                          <CTableHead>
                              <CTableRow>
                                  <CTableHeaderCell>#</CTableHeaderCell>
                                  <CTableHeaderCell width={'35%'}>Nome</CTableHeaderCell>
                                  <CTableHeaderCell width={'25%'}>Venda</CTableHeaderCell>
                                  <CTableHeaderCell>Stock</CTableHeaderCell>
                                  <CTableHeaderCell>Editar</CTableHeaderCell>
                                  <CTableHeaderCell>Excluir</CTableHeaderCell>
                              </CTableRow>
                          </CTableHead>
  
                          <CTableBody>
  
                          <CTableRow>
                          <CTableDataCell> 1 </CTableDataCell>
                          <CTableDataCell> Goreth Manuel </CTableDataCell>
                          <CTableDataCell> 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          
                          <CTableDataCell> <CIcon icon={cilDelete}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell> 2 </CTableDataCell>
                          <CTableDataCell> Albertina Jorge </CTableDataCell>
                          <CTableDataCell> 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell> 4 </CTableDataCell>
                          <CTableDataCell> Mário Varela </CTableDataCell>
                          <CTableDataCell> 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell> 5 </CTableDataCell>
                          <CTableDataCell> Suzana Pereira </CTableDataCell>
                          <CTableDataCell> 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell> 6 </CTableDataCell>
                          <CTableDataCell> Luzia José </CTableDataCell>
                          <CTableDataCell> 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell> 7 </CTableDataCell>
                          <CTableDataCell> Osvaldo de Sousa </CTableDataCell>
                          <CTableDataCell> 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell> 8 </CTableDataCell>
                          <CTableDataCell> Magarida André </CTableDataCell>
                          <CTableDataCell> 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                              <CTableDataCell> 9 </CTableDataCell>
                              <CTableDataCell> Paulino Passil </CTableDataCell>
                              <CTableDataCell> 009696435LA190 </CTableDataCell>
                              <CTableDataCell> M </CTableDataCell>
                             
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
  
  export default Produtos