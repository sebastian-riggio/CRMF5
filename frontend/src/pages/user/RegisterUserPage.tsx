import React from 'react'
import { AccountForm } from '../../components/ProfileForm'

export default function RegisterUserPage () {
  return (
    <div>
      <h1 className='font-semibold text-3'>Nuevo usuario</h1>
      <p>Vamos a darle el alta a un nuevo compañero de Factoria F5</p>
      <AccountForm />
      </div>
  )
}
