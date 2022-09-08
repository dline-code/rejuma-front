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
                                <CTableHeaderCell width={'25%'}>Cargo</CTableHeaderCell>
                                <CTableHeaderCell>Género</CTableHeaderCell>
                                <CTableHeaderCell>Data de Nascimento</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>

                        <CTableBody>

                        <CTableRow>
                        <CTableDataCell> 1 </CTableDataCell>
                        <CTableDataCell> Goreth Manuel </CTableDataCell>
                        <CTableDataCell> Professora </CTableDataCell>
                        <CTableDataCell> M </CTableDataCell>
                        <CTableDataCell> 10/09/1990 </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                        <CTableDataCell> 2 </CTableDataCell>
                        <CTableDataCell> Albertina Jorge </CTableDataCell>
                        <CTableDataCell> Professora </CTableDataCell>
                        <CTableDataCell> M </CTableDataCell>
                        <CTableDataCell> 10/09/1992 </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                        <CTableDataCell> 3 </CTableDataCell>
                        <CTableDataCell> Domingos Sebastião </CTableDataCell>
                        <CTableDataCell> Secretário </CTableDataCell>
                        <CTableDataCell> M </CTableDataCell>
                        <CTableDataCell> 10/09/1990 </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                        <CTableDataCell> 4 </CTableDataCell>
                        <CTableDataCell> Mário Varela </CTableDataCell>
                        <CTableDataCell> Segurança </CTableDataCell>
                        <CTableDataCell> M </CTableDataCell>
                        <CTableDataCell> 10/09/1990 </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                        <CTableDataCell> 5 </CTableDataCell>
                        <CTableDataCell> Suzana Pereira </CTableDataCell>
                        <CTableDataCell> Professora </CTableDataCell>
                        <CTableDataCell> M </CTableDataCell>
                        <CTableDataCell> 10/09/1990 </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                        <CTableDataCell> 6 </CTableDataCell>
                        <CTableDataCell> Luzia José </CTableDataCell>
                        <CTableDataCell> Secretária Pedagógica </CTableDataCell>
                        <CTableDataCell> M </CTableDataCell>
                        <CTableDataCell> 10/09/1990 </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                        <CTableDataCell> 7 </CTableDataCell>
                        <CTableDataCell> Osvaldo de Sousa </CTableDataCell>
                        <CTableDataCell> Professor </CTableDataCell>
                        <CTableDataCell> M </CTableDataCell>
                        <CTableDataCell> 10/09/1990 </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                        <CTableDataCell> 8 </CTableDataCell>
                        <CTableDataCell> Magarida André </CTableDataCell>
                        <CTableDataCell> Coordenadora </CTableDataCell>
                        <CTableDataCell> M </CTableDataCell>
                        <CTableDataCell> 10/09/1990 </CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                            <CTableDataCell> 9 </CTableDataCell>
                            <CTableDataCell> Paulino Passil </CTableDataCell>
                            <CTableDataCell> Servente Escolar </CTableDataCell>
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

export default Funcionarios