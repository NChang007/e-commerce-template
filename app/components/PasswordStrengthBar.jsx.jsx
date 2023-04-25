'use client'
import React, { useEffect, useState } from 'react'
import '../styles/logReg.css'

const PasswordStrengthBar = ({ password }) => {
    // console.log('From psb',password);
    
    let [strength, setStrength] = useState(0);

    const checkPasswordStrength = (word) => {
        strength = 0
        // Check password length
        if (word.length >= 8) {
            strength += 20;
        }
        // Check for lower case
        if (word.match(/[a-z]/)) {
            strength += 20;
        }
        // check for upper case
        if (word.match(/[A-Z]/)) {
            strength += 20
        }
        // Check for numbers
        if (word.match(/\d/)) {
            strength += 20;
        } 
        // Check for special characters
        if (word.match(/[^a-zA-Z\d]/)) {
            strength += 20;
        }
        setStrength(strength)
    }
    const updateProgressBarColor = () => {
        if (strength === 100){
            return '#69b34c'
        }else if (strength === 80){
            return '#fab733'
        }else if (strength === 60){
            return '#ff8e15'
        }else if (strength === 40){
            return '#ff4e11'
        }else if (strength === 20){
            return '#ff0d0d'
        }else if (strength === 0){
            return 'none'
        }
    }
    const updateProgressBar = () => ({
        width : `${strength}%`,
        background: updateProgressBarColor(),
        height: '7px',
        transition: 'all 0.5s'
    })
    
    useEffect(() => {
      checkPasswordStrength(password)
    //   updateProgressBar()
    }, [password])
    
  return (
    <div className='progress' style={{height: '7px', margin: '5px 0'}}>
        <div className='progress-bar' style={updateProgressBar()}></div>
    </div>
  )
}

export default PasswordStrengthBar