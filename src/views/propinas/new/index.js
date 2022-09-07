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

function NewPropinaPayment() {
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
                  <CFormLabel> Nome do Aluno </CFormLabel>
                  <CFormInput className="mb-3" />
                </CCol>

                <CCol>
                  <CFormLabel> Classe do Aluno </CFormLabel>
                  <CFormInput className="mb-3" />
                </CCol>
              </CRow>

              <CRow>
                <CCol sm="auto">
                  <CFormLabel> O mês que pretende Pagar </CFormLabel>
                  <CFormSelect options={meses} />

                  <br />

                  <CFormLabel> O ano que pretende Pagar </CFormLabel>
                  <CFormSelect options={anos} />

                  <br />
                  <CFormLabel>Adicionar intervalo</CFormLabel>
                  <CFormCheck style={{ marginLeft: 5 }} />
                </CCol>

                <CCol sm="auto">
                  <CFormLabel> Até </CFormLabel>
                  <CFormSelect options={meses} />

                  <br />

                  <CFormLabel> Até </CFormLabel>
                  <CFormSelect options={anos} />
                </CCol>

                <CCol sm="auto">
                  <CFormLabel> Valor a Pagar </CFormLabel>
                  <CFormInput />

                  <br />

                  <CFormLabel> A pessoa que pagou </CFormLabel>
                  <CFormInput />
                </CCol>

                <CCol sm="auto">
                  <CFormLabel> Forma de pagamento </CFormLabel>
                  <CFormInput />

                  <br />

                  <CFormLabel> Referência do Pagamento </CFormLabel>
                  <CFormInput />
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
