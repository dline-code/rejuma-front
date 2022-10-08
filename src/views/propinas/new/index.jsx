import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CCol,
  CRow,
  CFormCheck,
  CButton,
} from '@coreui/react'
import React from 'react'
import { useState } from 'react'
import { anos, meses, formasDePagamento, classes } from './data'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function NewPropinaPayment() {
  const [dateIsInterval, setDateIsInterval] = useState(true)

  const exampleNames = [
    {
      id: 0,
      name: 'José Gonçalves',
    },
    {
      id: 1,
      name: 'Goreth Manuel',
    },
    {
      id: 2,
      name: 'Margarida André',
    },
    {
      id: 3,
      name: 'Matuta Jorge',
    },
    {
      id: 4,
      name: 'Passil Paulino',
    },
  ]

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

  return (
    <>
      <CCard>
        <CCardHeader>Pagamento de Propinas</CCardHeader>
        <CCardBody>
          <CForm>
            <CContainer>
              <CRow>
                <CCol>
                  <CFormLabel htmlFor="name"> Nome do Aluno </CFormLabel>
                  {/* <CFormInput id="name" /> */}

                  <ReactSearchAutocomplete
                    items={exampleNames}
                    // onSearch={handleOnSearch}
                    // onHover={handleOnHover}
                    // onSelect={handleOnSelect}
                    // onFocus={handleOnFocus}
                    id="name"
                    autoFocus
                    formatResult={formatResult}
                  />
                </CCol>

                <CCol>
                  <CFormLabel htmlFor="classe"> Classe do Aluno </CFormLabel>
                  <CFormSelect id="classe" options={classes} />
                </CCol>
              </CRow>

              <br />

              <CRow>
                <CCol>
                  <CFormLabel htmlFor="selectMeses"> O mês que pretende Pagar </CFormLabel>
                  <CFormSelect id="selectMeses" options={meses} />

                  <br />

                  <CFormLabel htmlFor="selectAnos"> O ano que pretende Pagar </CFormLabel>
                  <CFormSelect id="selectAnos" options={anos} />

                  <br />
                  <CFormLabel htmlFor="addInterval">Adicionar intervalo</CFormLabel>
                  <CFormCheck
                    id="addInterval"
                    style={{ marginLeft: 5 }}
                    onChange={(e) =>
                      e.target.checked ? setDateIsInterval(false) : setDateIsInterval(true)
                    }
                  />
                </CCol>

                <CCol>
                  <CFormLabel htmlFor="selectMesesTo"> Até </CFormLabel>
                  <CFormSelect options={meses} id="selectMesesTo" disabled={dateIsInterval} />

                  <br />

                  <CFormLabel htmlFor="selectAnosTo"> Até </CFormLabel>
                  <CFormSelect options={anos} id="selectAnosTo" disabled={dateIsInterval} />
                </CCol>

                <CCol>
                  <CFormLabel htmlFor="valueToPay"> Valor a Pagar </CFormLabel>
                  <CFormInput id="valueToPay" />

                  <br />

                  <CFormLabel htmlFor="whoPaid"> A pessoa que pagou </CFormLabel>
                  <CFormInput id="whoPaid" />
                </CCol>

                <CCol>
                  <CFormLabel htmlFor="paymentMode"> Forma de pagamento </CFormLabel>
                  <CFormSelect options={formasDePagamento} id="paymentMode" />

                  <br />

                  <CFormLabel htmlFor="paymentReference"> Referência do Pagamento </CFormLabel>
                  <CFormInput id="paymentReference" />
                </CCol>
              </CRow>
              <CRow>
                <CCol
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '100%',
                    alignItems: 'flex-end',
                  }}
                >
                  <CButton> Adicionar Novo Pagamento </CButton>
                </CCol>
              </CRow>
            </CContainer>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default NewPropinaPayment
