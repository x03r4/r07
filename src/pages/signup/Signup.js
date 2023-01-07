import { useState } from 'react';
import styles from './Signup.module.css'

const Signup = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log(userName, email, password) 
  }

   return ( 
      <form 
        onSubmit={handleSubmit}
        className={styles['signup-form']}
      >
        <h2>Sign Up</h2>
        <label>
          <span>User Name:</span>
          <input 
            type="text"
            onChange={(e)=>setUserName(e.target.value)}
            value={userName} 
          />
        </label>
        <label>
          <span>email:</span>
          <input 
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input 
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className="btn">Sign Up</button>
      </form>
    );
}
 
export default Signup;