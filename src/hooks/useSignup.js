import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (displayName, email, password) => {
    setError(null)
    setIsPending(true)

    try {
      // login user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)
      // jeśli nie ma odpowiedzi z serwera
      if(!res) {
        throw new Error('Could not complete signup')
      }

      // dodaje displayName to user (spróbujemy trochę po swojemu)
      await res.user.updateProfile({ displayName: displayName })
      setIsPending(false)
      setError(null)

    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }

  }

  return { error, isPending, signup }
}