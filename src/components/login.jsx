import React, { useRef } from 'react'

const Login = () => {
  const unRef = useRef()
  const pwRef = useRef()
  const save = () => {
    if(unRef.current.value === 'dima' && pwRef.current.value === '1998'){
      localStorage.setItem('token', true)
    } else {
      localStorage.setItem('token', false)
    }
  }
  return (
    <div>
      <h1 style={{marginLeft: '10px'}}>Login</h1>
      <input ref={unRef} type="text" placeholder='username' style={{marginLeft: '10px'}}/>
      <input ref={pwRef} type="password" placeholder='password' style={{marginLeft: '10px'}}/>
      <button onClick={save} style={{marginLeft: '10px'}}>login</button>
    </div>
  )
}

export default Login