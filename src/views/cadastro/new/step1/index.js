import React, { useState } from 'react'
import { CForm, CFormInput, CFormLabel, CCol, CRow } from '@coreui/react'
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
      <h1>Cadastro</h1>
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
            <CFormLabel> Classe </CFormLabel>
            <CFormInput name="name" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Curso </CFormLabel>
            <CFormInput name="name" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Turno </CFormLabel>
            <CFormInput name="otherName" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Documentos </CFormLabel>
            <CFormInput name="file" onChange={onInputChanged} />
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CFormLabel> Valor Do Primeiro Mês </CFormLabel>
            <CFormInput name="name" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Valor do Uniforme </CFormLabel>
            <CFormInput name="otherName" onChange={onInputChanged} />
          </CCol>
        </CRow>
      </CForm>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  )
}

export default Step1