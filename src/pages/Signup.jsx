import React from 'react'

function Signup() {
  return (
    <div>
      
      <form>
        <label htmlFor="username">Username:</label>
        <input
         type="text"
         name='username'
         id='username'
          />

        <label htmlFor="password">Password:</label>
        <input
         type="password"
         name='password'
         id='password'
          />

          <button>Submit</button>
      </form>
    </div>
  )
}

export default Signup
