import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

import styles from './Signup.module.css'

const Signup = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => { 
    e.preventDefault()
    // console.log(userName, email, password) 
    signup(userName, email, password)
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
        { !isPending && <button className="btn">Sign Up</button> }
        { isPending && <button className="btn" disabled>Loading</button> }
        { error && <p>{error}</p> }
      </form>
    );
}
 
export default Signup;