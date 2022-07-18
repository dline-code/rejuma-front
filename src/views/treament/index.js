import React, { useEffect } from 'react'
import {
  CButton,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Swal from 'sweetalert2'
import { cilPlus as cilPlusIcon } from '@coreui/icons'
import { TreatmentListItemActionsDropdown } from './components/ListItemActionsDropdown'
import { useState } from 'react'
import { SaveTreatmentForm } from './components/SaveTreatmentForm'
import { fetchTreatmentSalon } from './services/useFetchTreatmentSalon'
import api from 'src/services/api'
import { useHistory } from 'react-router-dom'

function Appointment() {
  const [treatmentSalon, setTreatmentSalon] = useState([])
  const [filteredData, setFilteredData] = useState(treatmentSalon)
  const [filterBy, setFilterBy] = useState('')
  const [isModalOpen, setIsModalOpen] = useState()
  const history = useHistory()

  const searchBy = (event) => {
    const { value } = event.target
    const newData = filteredData?.filter(
      (item) => String(item[filterBy]).toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1,
    )
    setFilteredData(newData)
  }

  useEffect(() => {
    fetchTreatmentSalon()
      .then((result) => {
        setTreatmentSalon(result)
      })
      .catch((error) => {
        console.log(error?.response)
      })
  }, [])

  const handleEdit = () => {
    setIsModalOpen(true)
  }


  const handleClickNewAppointment = () => {
    setIsModalOpen((currentValue) => !currentValue)
  }

  const fields = ['client', 'date']

  return (
    <>
      <CModal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CModalHeader>
          <CModalTitle>Salvar Serviço </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <SaveTreatmentForm />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setIsModalOpen(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>

      <div>
        <CCard>
          <CCardHeader>Dados de Pesquisa</CCardHeader>
          <CCardBody>
            <CForm>
              <CRow className="mb-3">
                <CCol md="5">
                  <CFormLabel htmlFor="selectSm">Filtrar por</CFormLabel>
                  <CFormSelect name="selectSm" id="SelectLm" onChange={(e) => console.log(e)}>
                    <option value="null">Please select</option>
                    {fields?.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                    /
                  </CFormSelect>
                </CCol>
                <CCol md="7">
                  <CFormLabel htmlFor="pesq" onChange={(event) => setFilterBy(event.target.value)}>
                    Pesquisar
                  </CFormLabel>
                  <CForm inline>
                    <CFormInput
                      className="mr-sm-2"
                      placeholder="Search"
                      id="pesq"
                      style={{ width: '80%' }}
                      onChange={searchBy}
                    />
                  </CForm>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
        <br />
        <CCard>
          <CCardBody>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
                marginBottom: '20px',
              }}
            >
              <h4>Serviços</h4>

              <CButton onClick={handleClickNewAppointment} size="sm" color="primary">
                Novo
                <CIcon style={{ marginLeft: '10px' }} icon={cilPlusIcon} className="me-2" />
              </CButton>
            </div>
            <div className="mb-40">
              <div className="mb-3" width="100px">
                <CFormLabel htmlFor="exampleFormControlInput1">Pesquise por algo</CFormLabel>
                <CFormInput type="search" id="exampleFormControlInput1" />
              </div>
            </div>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tratamento</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Preço</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {treatmentSalon?.map(({ id, treatment, price }, idx) => (
                  <CTableRow key={id}>
                    <CTableHeaderCell scope="row">{idx + 1}</CTableHeaderCell>
                    <CTableDataCell>{treatment?.name}</CTableDataCell>
                    <CTableDataCell>{price}</CTableDataCell>
                    <CTableDataCell>
                      <TreatmentListItemActionsDropdown
                        onEdit={handleEdit}
                        onRemove={() => console.log(id)}
                      />
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default Appointment
