'use client'
import React, { useState, useEffect } from 'react'
import '../styles/logReg.css'
import { RxAvatar  } from "react-icons/rx";
import PasswordStrengthBar from './PasswordStrengthBar.jsx';

const LogReg = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isUser, setIsUser] = useState(true)
    // modal & close functionality 
    
    const openModal = (e) => {
        e.preventDefault()
        let modal = document.getElementById("logReg-modal");
        modal.style.display = "block";
    }
    const closeModal = (e) => {
        e.preventDefault()
        let modal = document.getElementById("logReg-modal");
        modal.style.display = "none";
    }

    
    // modal content / 
    useEffect(()=> {
        //this is so that when you enter something in 
        //the input the label does not come back down
        //username
        username.length > 0 ? 
        document.getElementById('username').classList.add('text-input-filled')
        : document.getElementById('username').classList.remove('text-input-filled')
        //password
        password.length > 0 ? 
        document.getElementById('password').classList.add('text-input-filled')
        : document.getElementById('password').classList.remove('text-input-filled')
        //if the form is in the register state then also check for name and email
        if (isUser === false){
        //name
        name.length > 0 ? 
        document.getElementById('name').classList.add('text-input-filled')
        : document.getElementById('name').classList.remove('text-input-filled')
        //email
        email.length > 0 ? 
        document.getElementById('email').classList.add('text-input-filled')
        : document.getElementById('email').classList.remove('text-input-filled')
        }
    
    },[username, password, email, name, isUser])

    const handleLogin = (e) => {
        e.preventDefault()
        alert('you did something great!!!.....or did you?')
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        alert('you just signed up')
    }
    const handleSwitch = (e) => {
        e.preventDefault()
        setIsUser(!isUser)
    }
    let fields = null
    isUser === true ?
        fields = 
        <div className='form-cont'>
            <h2 className='form-title'>Login</h2>
            <div className='input-container' >
            <input 
                required
                title='Please enter your Username'
                autoComplete='off'
                className='text-input' 
                id='username' 
                type='text' 
                placeholder='Enter your username'
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
            />
            <label htmlFor='username' className='label' >Usename</label>
            </div>
            <div className='input-container' >
            <input 
                autoComplete='off'
                required
                title='Please enter your Password'
                className='text-input' 
                id='password' 
                type='password' 
                placeholder='Enter your password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <label htmlFor='password' className='label' >Password</label>
            </div>
            <div className='form-buttons'>
                <button className='form-button' type='submit' onClick={(e) => handleLogin(e)}>Login</button>
                <button className='form-button' type='buttom' onClick={(e) => handleSwitch(e)}>Sign Up</button>
            </div>
        </div>
    :
        fields =
        <div className='form-cont'>
            <h2 className='form-title'>Sign Up</h2>
            <div className='input-container' >
            <input
                autoComplete='off' 
                title='Please enter your name'
                required
                className='text-input' 
                id='name' 
                type='text' 
                placeholder='Enter your name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <label htmlFor='name' className='label' >Name</label>
            </div>
            <div className='input-container' >
            <input
                autoComplete='off'
                title='Please enter your email'
                required
                className='text-input' 
                id='email' 
                type='text' 
                placeholder='Enter your email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <label htmlFor='email' className='label' >Email</label>
            </div>
            <div className='input-container' >
            <input 
                autoComplete='off'
                title='Please create your username'
                required
                className='text-input' 
                id='username' 
                type='text' 
                placeholder='Enter your username'
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
            />
            <label htmlFor='username' className='label' >Usename</label>
            </div>
            <div className='input-container' >
            <input 
                autoComplete='off'
                title="Password must contain at least: (1 lower case, 1 upper case, 1 number, 1 symbol, and be 8+ characters long"
                required
                className='text-input' 
                id='password' 
                type='password' 
                placeholder='Enter your password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <label htmlFor='password' className='label' >Password</label>
            <PasswordStrengthBar password={password}/>
            </div>
            <span className='form-backbtn-span' onClick={(e) => handleSwitch(e)}>Go back to Login</span>
            <div className='form-buttons'>
            <button className='form-button' type='submit' onClick={(e) => handleSignUp(e)}>Sign Up</button>
            {/* <button className='form-button' type='buttom' onClick={(e) => handleSwitch(e)}>go back to login</button> */}
            </div>
        </div>

  return (
    <div className='logReg-container'>
        <button 
            id="logReg-btn"
            style={{display: 'flex'}}
            onClick={(e) => openModal(e)}
        >
            <RxAvatar/>
        </button>

        <div id="logReg-modal" className="modal">
            <div className="logReg-modal-content">
                <span className="modal-close" onClick={(e) => closeModal(e)}>&times;</span>
                {fields}
            </div>
        </div>
    </div>
  )
}

export default LogReg