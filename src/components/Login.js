import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div>
        <img src = 'https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg'/>
        </div>
        <form>
        <input type = 'text' placeholder= 'Email Address' className='p-2 m-2'/>
        <input type = 'password' placeholder= 'Password' className='p-2 m-2'/>
        <button className='p-4 m-4'>Sign In</button>
    </form>
    </div>
  )
}

export default Login