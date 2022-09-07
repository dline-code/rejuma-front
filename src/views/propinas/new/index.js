import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CInputGroup,
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

function NewPropinaPayment() {
  const [dateIsInterval, setDateIsInterval] = useState(true)

  const meses = [
    {
      value: 'Janeiro',
      label: 'Janeiro',
    },
    {
      value: 'Fevereiro',
      label: 'Fevereiro',
    },
    {
      value: 'Março',
      label: 'Março',
    },
    {
      value: 'Abril',
      label: 'Abril',
    },
    { value: 'Maio', label: 'Maio' },
    { value: 'Junho', label: 'Junho' },
    { value: 'Julho', label: 'Julho' },
    { value: 'Agosto', label: 'Agosto' },
    { value: 'Setembro', label: 'Setembro' },
    { value: 'Outubro', label: 'Outubro' },
    { value: 'Novembro', label: 'Novembro' },
    { value: 'Dezembro', label: 'Dezembro' },
  ]

  const anos = [
    {
      value: 2022,
      label: '2022',
    },
    {
      value: 2023,
      label: '2023',
    },
    {
      value: 2024,
      label: '2024',
    },
    {
      value: 2025,
      label: '2025',
    },
    { value: 2026, label: '2026' },
    { value: 2027, label: '2027' },
  ]

  const formasDePagamento = [
    {
      value: 'Cash',
      label: 'Dinheiro Vivo',
    },
    {
      value: 'TPA',
      label: 'TPA',
    },
    {
      value: 'Depósito Bancário',
      label: 'Depósito Bancário',
    },
    {
      value: 'Tranferência bancária',
      label: 'Tranferência bancária',
    },
    {
      value: 'Pagamento por referência MCX',
      label: 'Pagamento por referência MCX',
    },
  ]

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
                  <CFormInput id="name" />
                </CCol>

                <CCol>
                  <CFormLabel htmlFor="classe"> Classe do Aluno </CFormLabel>
                  <CFormInput id="classe" />
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
