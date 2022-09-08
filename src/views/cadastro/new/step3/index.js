import React from 'react'
import ActionButtons from '../actionsButtons'

function Step3(props) {
  const { lastStep, completeCallback, user } = props
  console.log(user)

  const handleLastStep = () => {
    lastStep()
    completeCallback()
  }
  return (
    <div>
      <h2>Confirme seus dados</h2>
      <p>Nome: {user.firstName}</p>
      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  )
}

export default Step3
