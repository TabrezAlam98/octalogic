import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState("eve.holt@reqres.in")
    const [password,setPassword]=useState("cityslicka")
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()

        const payload={
            email,password
        }
        axios.post("https://reqres.in/api/login",payload)
        .then((res)=>{
            console.log(res.data.token)
            alert("Logged in successfully")
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
        })

    }
  return (
    <div className='w-full h-screen bg-[#F4F4F4]'>
        <form onSubmit={handleSubmit}>
        <p className='text-4xl text-center pt-[100px] text-gray-600'><u>Login</u></p>
        <div className='w-[40%] h-10 border-2 border-gray-300 m-auto mt-10 rounded-lg'>
        <input className='w-full h-[100%] rounded-lg pl-5 ' type="emial" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
        </div>
        <div className='w-[40%] h-10 border-2 border-gray-300 m-auto mt-5 rounded-lg'>
        <input className='w-full h-[100%] rounded-lg pl-5 ' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
        </div>
        <button className='w-[30%] h-10 flex justify-center text-white m-auto p-2 bg-teal-600 mt-5 rounded-lg ' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login