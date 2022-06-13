import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = (props) => {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Logged in Successfully", "success");
      history.push("/")
    }
    else {
      props.showAlert("Invalid Details", "danger");
    }
  }


  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
    <div className='container my-3' style={{border:'1px solid black',borderRadius: '15px',height: '450px',width: '700px',backgroundColor: '#f2f2f2'}}>
      <h2  style={{textAlign: 'center',fontWeight: '500',margin: '30px 0 30px 0'}}>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="container mb-3" style={{width: '500px'}}>
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" value={credentials.email} className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp"  />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className= "container mb-3"  style={{width: '500px'}}>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" value={credentials.password} className="form-control" onChange={onChange} name="password" id="password" />
        </div>
        <div className="container" style={{textAlign: 'center',marginTop: '70px'}}>
        <button type="submit" className="btn btn-primary" style={{width: '500px'}} >Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login