import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function App() {
  
  const [length, setlength] = useState(8)
  const [numberAllow, setnumberAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [password, setpassword] = useState("")

  // useref hook
  const passwordRef = useRef(null)

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?. setSelectionRange(0,101); // select the 0 to 9 value from password.
    window.navigator.clipboard.writeText(password)
  }, [password])


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "1234567890"
    if (charAllow) str += "!@#$%^&*(){}[]:><?/.,"
  
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
}, [length, numberAllow, charAllow, setpassword])
   useEffect(() => {
    passwordGenerator()
   }, [length, numberAllow, charAllow, passwordGenerator])
  
  return (
    <>
     <div  className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>PASSWORD GENERATOR </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3 bg-white'>
        <input 
        type="text"
        value={password}
        placeholder='password'
        className='outline-none w-full py-1 px-3 text-black'
        readOnly
        ref={passwordRef} />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordtoClipboard}> copy </button>
        
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> {setlength(e.target.value)}} />
          <label>Length: {length} </label>
        </div>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked = {numberAllow}
        id='numberInput'
        onChange={() => {
          setnumberAllow((prev) => !prev);
        }} />
        <label htmlFor='numberInput'>Number </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked = {charAllow}
        id='CharacterInput'
        onChange={() => {
          setcharAllow((prev) => !prev);
        }} />
        <label htmlFor='characterInput'>Character </label>
      </div>
     </div>
    </>
  )
}

export default App