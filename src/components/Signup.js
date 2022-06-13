import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Signup = (props) => {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials
    const response = await fetch("http://localhost:5000/api/auth/createuser", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      history.push("/")
      props.showAlert("Account Created Successfully", "success");
    }
    else {
      props.showAlert("Invalid Credentials", "danger");
    }
  }


  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container mt-2' style={{border:'1px solid black',borderRadius: '15px',height: '500px',width: '700px',backgroundColor: '#f2f2f2'}}>
      <h2 className='center' style={{textAlign: 'center',fontWeight: '500',margin: '20px 0 20px 0'}}>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="container mb-3" style={{width: '550px'}}>
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' id="name" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="container mb-3" style={{width: '550px'}}>
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' id="email" onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="container mb-3" style={{width: '550px'}}>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' onChange={onChange} id="password" minLength={5} required />
        </div>
        <div className="container mb-3" style={{width: '550px'}}>
          <label htmlFor="cpassword" className="form-label">Re-enter Password</label>
          <input type="password" className="form-control" name='cpassword' onChange={onChange} id="cpassword" minLength={5} required />
        </div>
        <div className="container" style={{textAlign: 'center',marginTop: '10px'}}>
        <button type="submit" className="btn btn-primary" style={{width: '530px'}}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup