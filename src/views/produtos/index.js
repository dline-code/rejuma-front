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
    CModalFooter,
    CForm,
    CFormInput
  
  } from '@coreui/react'
  import React, { useState } from 'react'
  import CIcon from '@coreui/icons-react'
  import { cilPen, cilTrash } from '@coreui/icons'
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
                          <CTableDataCell> Cartão </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 0 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }}> 9 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilPen}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 2 </CTableDataCell>
                          <CTableDataCell> Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 3 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }}> 30 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilPen}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 4 </CTableDataCell>
                          <CTableDataCell> Folha </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 20 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }}> 15 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilPen}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 5 </CTableDataCell>
                          <CTableDataCell> Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 12 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }}> 44 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilPen}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 6 </CTableDataCell>
                          <CTableDataCell> Cartão </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 5 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }}> 35 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilPen}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 7 </CTableDataCell>
                          <CTableDataCell> Uniforme </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 2 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }}> 5 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilPen}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                          <CTableDataCell style={{ textAlign: 'center' }} > 8 </CTableDataCell>
                          <CTableDataCell> Folha </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > 10 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }}> 15 </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilPen}/> </CTableDataCell>
                          <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilTrash}/> </CTableDataCell>
                          </CTableRow>
  
                          <CTableRow>
                              <CTableDataCell style={{ textAlign: 'center' }} > 9 </CTableDataCell>
                              <CTableDataCell> Uniforme </CTableDataCell>
                              <CTableDataCell style={{ textAlign: 'center' }} > 4 </CTableDataCell>
                              <CTableDataCell style={{ textAlign: 'center' }}> 6 </CTableDataCell>
                              <CTableDataCell style={{ textAlign: 'center' }} > <CIcon icon={cilPen}/> </CTableDataCell>
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
                <CModalTitle> Produtos </CModalTitle>
            </ CModalHeader >

            < CModalBody > 
            <CForm>
                <CFormInput
                    type="name"
                    id=""
                    placeholder="nome do produto"
                    text="Must be 8-20 characters long."
                />
                <br/>
                <CFormInput
                    type="venda"
                    id=""
                    placeholder="Venda"
                    text="Must be 8-20 characters long."
                />
                <br/>
                <CFormInput
                    type="text"
                    id=""
                    placeholder="stock"
                    text="Must be 8-20 characters long."
                />
            </CForm>
            
            </ CModalBody >

            < CModalFooter >
                <CButton onClick={() => setVisible(false)}> Salvar alterações </CButton > 
            </ CModalFooter >
        </CModal >
  </ >
       
    )
  }
  
  export default Produtos