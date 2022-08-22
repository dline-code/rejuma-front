import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper';
import StepWizard from 'react-step-wizard';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'

function NewMatricula() {
  const [trabalha, setTrabalha] = useState(false)
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>Criar Nova Matrícula</CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                <CCol>
                  <CFormLabel> Primeiro Nome </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Último Nome </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Outros Nomes </CFormLabel>
                  <CFormInput />
                </CCol>
              </CRow>
              <br />
              <CRow>
                <CCol>
                  <CFormLabel> Nome do Pai </CFormLabel>
                  <CFormInput />
                </CCol>

                <CCol>
                  <CFormLabel> Nome da Mãe </CFormLabel>
                  <CFormInput />
                </CCol>
              </CRow>
              <br />
              <CRow>
                <CCol>
                  <CFormLabel> Número do BI </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Data de Emissão </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Data de Expiração </CFormLabel>
                  <CFormInput />
                </CCol>
              </CRow>
              <br />
              <CRow>
                <CCol>
                  <CFormLabel> Residência </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Bairro </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Município </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Província </CFormLabel>
                  <CFormInput />
                </CCol>
              </CRow>
              <br />
              <CRow>
                <CCol>
                  <CFormLabel> Classe </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Curso </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Turno </CFormLabel>
                  <CFormInput />
                </CCol>
              </CRow>
              <br />
              <CCol>
                <CFormLabel style={{ marginRight: '5px' }}> Trabalha ? </CFormLabel>
                <CFormCheck onChange={() => setTrabalha((prevState) => !prevState)} />
              </CCol>
              {trabalha && (
                <>
                  <CRow>
                    <CCol>
                      <CFormLabel> Profissão </CFormLabel>
                      <CFormInput />
                    </CCol>
                    <CCol>
                      <CFormLabel> Local de Trabalho </CFormLabel>
                      <CFormInput />
                    </CCol>
                  </CRow>
                  <br />
                </>
              )}
              <CRow>
                <CCol>
                  <CFormLabel> Encarregado de Educação </CFormLabel>
                  <CFormInput />
                </CCol>
                <CCol>
                  <CFormLabel> Adicione os contactos separados por vírgula (,) </CFormLabel>
                  <CFormInput />
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  )
}

export default NewMatricula
