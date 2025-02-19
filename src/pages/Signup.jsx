import {useState} from 'react'

function Signup() {

    const [formData, setFormData] = useState({
        username:"",
        password:""
    })

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
    }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
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
