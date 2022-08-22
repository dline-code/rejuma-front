import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper'
import StepWizard from 'react-step-wizard'
import { CCard, CCardBody, CCardHeader, CContainer } from '@coreui/react'
import { MdDescription } from 'react-icons/md'

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'

function NewMatricula() {
  const [stepWizard, setStepWizard] = useState(null)
  const [user, setUser] = useState({})
  const [activeStep, setActiveStep] = useState(0)

  const assignStepWizard = (instance) => {
    setStepWizard(instance)
  }

  const handleStepChange = (e) => {
    setActiveStep(e.activeStep - 1)
  }

  const handleComplete = () => {
    console.log('finnaly')
  }

  const assignUser = (val) => {
    console.log(val)
    setUser((user) => ({
      ...user,
      ...val,
    }))
  }

  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>Criar Nova Matrícula</CCardHeader>
          <CCardBody>
            <Stepper activeStep={activeStep}>
              <Step label="Entidade">
                <MdDescription />
              </Step>
              <Step label="Detalhes da Conta" />
              <Step label="Confirmar" />
            </Stepper>
            <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
              <Step1 userCallback={assignUser} />
              <Step2 user={user} userCallback={assignUser} />
              <Step3 user={user} completeCallback={handleComplete} />
            </StepWizard>
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  )
}

export default NewMatricula
