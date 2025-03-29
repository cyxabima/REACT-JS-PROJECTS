import { useState, useRef, useEffect, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyToClipBoard = useCallback(

    () => {
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
    }

    ,
    [password],
  )

  const passwordGenerator = () => {
    let passwordStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    if (number) passwordStr += "0123456789";
    if (character) passwordStr += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for (let i = 0; i < length; i++) {

      pass += passwordStr.charAt(Math.floor(Math.random() * passwordStr.length + 1))
    }
    setPassword(pass)
  }

  useEffect(() => {

    passwordGenerator()
  }, [length, number, character])


  return (
    <div className='bg-gray-900 h-screen'>
      <h1 className='text-center text-4xl bg-green-400 p-5 mb-12 text-orange-700 font-extrabold' >REACT PROJECT 2</h1>
      <div className='max-w-md mx-auto bg-gray-600 p-6 rounded-2xl'>
        <h1 className='text-center text-2xl mb-3.5 text-white font-extrabold'>Secrete Key Generator</h1>
        <div className=' flex flex-col gap-3'>
          <input className='bg-gray-400 rounded-2xl p-2 min-w-2xs outline-none border-2'
            type="text"
            value={password}
            readOnly
            ref={passwordRef} />


          <button onClick={copyToClipBoard} className='bg-orange-500 text-white font-bold rounded-2xl p-2 inline-block min-w-2xs '>Copy</button>
          <div id="dependency" className='flex gap-2.5'>
            <div>
              <input
                onChange={(e) => setLength(e.target.value)}
                type="range"
                name="Length"
                id="length"
                defaultValue={length}
                min={4}
                max={100}
                className='text-orange-600'
              /><label htmlFor="Length">Length({length})</label>
            </div>

            <div>
              <input
                defaultChecked={number}
                onChange={() => setNumber((pre) => !pre)} type="checkbox" name="Number" id="number" /><label htmlFor="Number">Number</label>
            </div>
            <div>
              <input type="checkbox"
                defaultChecked={character}
                onChange={() => setCharacter((pre) => !pre)}
                name="Character" id="character" /><label htmlFor="Character">Character</label>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default App
