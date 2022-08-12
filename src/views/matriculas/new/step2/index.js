import React, { useState } from 'react'
import { CForm, CFormInput, CFormLabel, CRow, CCol } from '@coreui/react'

import ActionButtons from '../actionsButtons'

function Step2(props) {
  console.log('props2', props.user)
  const [info2, setInfo2] = useState({})
  const [error, setError] = useState('')

  const onInputChanged = (event) => {
    const targetName = event.target.name
    const targetValue = event.target.value

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue,
    }))
  }

  const validate2 = () => {
    if (!info2.name) setError('Campo obritatório')
    else {
      setError('')
      props.nextStep()
      props.userCallback(info2)
    }
  }
  return (
    <div>
      <span style={{ color: 'red' }}>{error}</span>
      <h1>Dados pessoais</h1>
      <CForm>
        <CRow>
          <CCol>
            <CFormLabel> Nome do Pai </CFormLabel>
            <CFormInput name="name" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Nome da Mãe </CFormLabel>
            <CFormInput name="name" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Data de Nascimento </CFormLabel>
            <CFormInput name="otherName" onChange={onInputChanged} />
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CFormLabel> Nº do BI </CFormLabel>
            <CFormInput name="name" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Residência </CFormLabel>
            <CFormInput name="name" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Profissão </CFormLabel>
            <CFormInput name="otherName" onChange={onInputChanged} />
          </CCol>
          <CCol>
            <CFormLabel> Contacto </CFormLabel>
            <CFormInput name="otherName" onChange={onInputChanged} />
          </CCol>
        </CRow>
      </CForm>
      <br />
      <ActionButtons {...props} nextStep={validate2} />
    </div>
  )
}

export default Step2
