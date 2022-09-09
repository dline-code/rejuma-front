import React, { useState } from 'react'
import { CForm, CFormInput, CFormLabel, CCol, CRow, CFormSelect } from '@coreui/react'
import ActionButtons from '../actionsButtons'

function Step1(props) {
  const [info1, setInfo1] = useState({})
  const [error, setError] = useState('')

  const onInputChanged = (event) => {
    const targetName = event.target.name
    const targetValue = event.target.value

    setInfo1((info1) => ({
      ...info1,
      [targetName]: targetValue,
    }))
    console.log({ targetName, targetValue })
  }

  const validate = () => {
    if (!info1.firstName) setError('Preencha os campos obrigatórios(*)')
    else {
      setError('')
      props.nextStep()
      props.userCallback(info1)
    }
  }
  return (
    <div>
      <span style={{ color: 'red' }}>{error}</span>
      <h2>Cadastro</h2>
      <CForm>
        <CRow>
          <CCol>
            <CFormLabel> Primeiro Nome </CFormLabel>
            <CFormInput name="firstName" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Segundo Nome </CFormLabel>
            <CFormInput name="lastName" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Último Nome </CFormLabel>
            <CFormInput name="otherName" onChange={onInputChanged} />
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CFormLabel style={{ marginTop: '15px' }}> Classe </CFormLabel>
            <CFormSelect aria-label="Default select example">
              <option value="1">7ª classe</option>
              <option value="2">8ª classe</option>
              <option value="3">9ª classe</option>
              <option value="3">10ª classe</option>
            </CFormSelect>
          </CCol>
          <CCol>
            <CFormLabel style={{ marginTop: '15px' }}> Curso </CFormLabel>
            <CFormSelect aria-label="Default select example">
              <option value="1">Informática</option>
              <option value="2">Contablidade</option>
              <option value="3">Pedagogia</option>
              <option value="3">Gestão</option>
            </CFormSelect>
          </CCol>
          <CCol>
            <CFormLabel style={{ marginTop: '15px' }}> Turno </CFormLabel>
            <CFormSelect aria-label="Default select example">
              <option value="1">Manhã</option>
              <option value="2">Tarde</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CFormLabel style={{ marginTop: '15px' }}> Documentos </CFormLabel>
            <CFormInput name="file" onChange={onInputChanged} style={{ width: '285px' }} />
          </CCol>
        </CRow>
      </CForm>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  )
}

export default Step1
