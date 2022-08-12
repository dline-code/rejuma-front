import React, { useState } from 'react'
import { CForm, CFormInput, CFormLabel } from '@coreui/react'

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
        <CForm>
          <CFormLabel> Primeiro Nome </CFormLabel>
          <CFormInput name="name" onChange={onInputChanged} />
        </CForm>
      </CForm>
      <CForm>
        <CForm>
          <CFormLabel> Primeiro Nome </CFormLabel>
          <CFormInput name="contact" onChange={onInputChanged} />
        </CForm>
      </CForm>
      <br />
      <ActionButtons {...props} nextStep={validate2} />
    </div>
  )
}

export default Step2
