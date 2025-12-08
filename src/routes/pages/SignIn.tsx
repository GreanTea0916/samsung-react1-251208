import type { FormEvent } from 'react'

export default function SignIn() {

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return <>
    <h1>Sign In Page!</h1>
    <form onSubmit={handleSubmit}>
      <input type="email" name="id" />
      <input type="password" name="pw" />
      <button type="submit">로그인</button>
    </form>
  </>
}