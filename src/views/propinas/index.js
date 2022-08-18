import * as React from 'react'
import { cilCaretLeft, cilCaretRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CContainer,
  CPagination,
  CPaginationItem,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import Link from 'react-router-dom/Link'
import FilterDropDown from './filterDropDown'

function Propinas() {
  return (
    <CContainer>
      <CCard>
        <CCardHeader
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <CCardTitle> Propinas </CCardTitle>
          <div>
            <CButton style={{ marginRight: '5px' }}>
              <FilterDropDown />
            </CButton>
            <Link to="/propinas/create">
              <CButton>Novo Pagamento</CButton>
            </Link>
          </div>
        </CCardHeader>
        <CCardBody>
          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>#</CTableHeaderCell>
                <CTableHeaderCell>Classe</CTableHeaderCell>
                <CTableHeaderCell width={'35%'}>Nome</CTableHeaderCell>
                <CTableHeaderCell>Último Mês Pago</CTableHeaderCell>
                <CTableHeaderCell>Data do último Pagamento</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell> 1 </CTableDataCell>
                <CTableDataCell> 10 </CTableDataCell>
                <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                <CTableDataCell> Julho </CTableDataCell>
                <CTableDataCell> 10/09/1990 </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell> 2 </CTableDataCell>
                <CTableDataCell> 1 </CTableDataCell>
                <CTableDataCell> Josiel Junior Samba </CTableDataCell>
                <CTableDataCell> Maio </CTableDataCell>
                <CTableDataCell> 02/09/2004 </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell> 3 </CTableDataCell>
                <CTableDataCell> 2 </CTableDataCell>
                <CTableDataCell> Jovem Feiamente Horrivel </CTableDataCell>
                <CTableDataCell> Dezembro </CTableDataCell>
                <CTableDataCell> 14/12/2005 </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell> 4 </CTableDataCell>
                <CTableDataCell> 5 </CTableDataCell>
                <CTableDataCell> Mariana Vinevala Martins </CTableDataCell>
                <CTableDataCell> Junho </CTableDataCell>
                <CTableDataCell> 11/08/2003 </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell> 5 </CTableDataCell>
                <CTableDataCell> 2 </CTableDataCell>
                <CTableDataCell> Jovem Feiamente Horrivel </CTableDataCell>
                <CTableDataCell> Dezembro </CTableDataCell>
                <CTableDataCell> 14/12/2005 </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell> 6 </CTableDataCell>
                <CTableDataCell> 10 </CTableDataCell>
                <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                <CTableDataCell> Julho </CTableDataCell>
                <CTableDataCell> 10/09/1990 </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell> 7 </CTableDataCell>
                <CTableDataCell> 1 </CTableDataCell>
                <CTableDataCell> Josiel Junior Samba </CTableDataCell>
                <CTableDataCell> Maio </CTableDataCell>
                <CTableDataCell> 02/09/2004 </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell> 8 </CTableDataCell>
                <CTableDataCell> 5 </CTableDataCell>
                <CTableDataCell> Mariana Vinevala Martins </CTableDataCell>
                <CTableDataCell> Junho </CTableDataCell>
                <CTableDataCell> 11/08/2003 </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell> 9 </CTableDataCell>
                <CTableDataCell> 10 </CTableDataCell>
                <CTableDataCell> Mário Domingos Varela </CTableDataCell>
                <CTableDataCell> Julho </CTableDataCell>
                <CTableDataCell> 10/09/1990 </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell> 10 </CTableDataCell>
                <CTableDataCell> 1 </CTableDataCell>
                <CTableDataCell> Josiel Junior Samba </CTableDataCell>
                <CTableDataCell> Maio </CTableDataCell>
                <CTableDataCell> 02/09/2004 </CTableDataCell>
              </CTableRow>
            </CTableBody>
            <CTableFoot></CTableFoot>
          </CTable>
        </CCardBody>
        <CCardFooter style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CPagination>
            <CPaginationItem>
              <CIcon icon={cilCaretLeft} />
            </CPaginationItem>
            <CPaginationItem>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>...</CPaginationItem>
            <CPaginationItem>60</CPaginationItem>
            <CPaginationItem>
              <CIcon icon={cilCaretRight} />
            </CPaginationItem>
          </CPagination>
        </CCardFooter>
      </CCard>
    </CContainer>
  )
}

export default Propinas
