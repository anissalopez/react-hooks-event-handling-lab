// Code Keypad Component Here
import React from 'react'

function Keypad (){
    function passwordHandler(){
        console.log(`Entering password...`)
    }
    return (
        <div>
            <input type ="password" onChange ={passwordHandler}></input>
        </div>
    )
}

export default Keypad;