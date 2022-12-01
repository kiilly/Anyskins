import { useState } from 'react'

// Input Password Component
export default function Password() {
  const [passwordShown, setPasswordShown] = useState(false)

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <div>
      <input className="bar3" type={passwordShown ? 'text' : 'password'} />
      <button className="showpassword" onClick={togglePassword}>Show Password</button>
    </div>
  )
}
