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
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter
  
  } from '@coreui/react'
  import React, { useState } from 'react'
  import CIcon from '@coreui/icons-react'
  import { cilDelete, cilTrash } from '@coreui/icons'
  //import { Link } from 'react-router-dom/cjs/react-router-dom.min'
  
  
  function Produtos () {
    const [ visible , setVisible ] = useState ( false )  

      return (
          <>
          <CContainer>
              <CCard>
                <CCardHeader
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <CCardTitle> Produtos </CCardTitle>
                    <CButton onClick = { ( ) => setVisible ( ! visible ) }  >Adicionar Produto</CButton> 
                </CCardHeader>
  
                  <CCardBody>
                      <CTable bordered>
                          <CTableHead>
                              <CTableRow>
                                  <CTableHeaderCell style={{ textAlign: 'center' }} >#</CTableHeaderCell>
                                  <CTableHeaderCell width={'35%'}>Nome</CTableHeaderCell>
                                  <CTableHeaderCell width={'25%'} style={{ textAlign: 'center' }} >Venda</CTableHeaderCell>
                                  <CTableHeaderCell style={{ textAlign: 'center' }} >Stock</CTableHeaderCell>
                                  <CTableHeaderCell style={{ textAlign: 'center' }} >Editar</CTableHeaderCell>
                                  <CTableHeaderCell style={{ textAlign: 'center' }} >Excluir</CTableHeaderCell>
                              </CTableRow>
                          </CTableHead>
  
                          <CTableBody>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 1 </CTableDataCell>
                          <CTableDataCell> Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilDelete}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 2 </CTableDataCell>
                          <CTableDataCell> Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilDelete}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 4 </CTableDataCell>
                          <CTableDataCell> Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilDelete}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 5 </CTableDataCell>
                          <CTableDataCell> Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilDelete}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 6 </CTableDataCell>
                          <CTableDataCell > Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilDelete}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 7 </CTableDataCell>
                          <CTableDataCell> Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilDelete}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 8 </CTableDataCell>
                          <CTableDataCell> Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 009696435LA190 </CTableDataCell>
                          <CTableDataCell> M </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilDelete}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                              <CTableDataCell style={{ textAlign: 'center' }} > 9 </CTableDataCell>
                              <CTableDataCell> Uniforme </CTableDataCell>
                              <CTableDataCell style={{ textAlign: 'center' }} > 009696435LA190 </CTableDataCell>
                              <CTableDataCell> M </CTableDataCell>
                              <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilDelete}/> </CTableDataCell>
                              <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
                          </CTableBody>
  
                          <CTableFoot></CTableFoot>
                      </CTable>
                   </CCardBody>
                </CCard>
            </CContainer>

        < CModal visible = { visible } onClose = { ( ) => setVisible ( false ) } >    
            < CModalHeader onClose = { ( ) => setVisible ( false ) } >   
                <CModalTitle> Título modal </CModalTitle>
            </ CModalHeader >

            < CModalBody > Woohoo, você está lendo este texto em um modal! </ CModalBody >

            < CModalFooter >
                < CButton color = " secundário " onClick = { ( ) => setVisible ( false ) } >    
                Perto
                </CButton >
                < CButton color = " primary " > Salvar alterações </ CButton > 
            </ CModalFooter >
        </CModal >
  </ >
       
    )
  }
  
  export default Produtos