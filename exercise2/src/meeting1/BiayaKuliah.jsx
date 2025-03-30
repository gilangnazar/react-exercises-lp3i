import { useState } from 'react'
import './biayakuliah.css'

function BiayaKuliah() {
  const [result, setResult] = useState(0)
  const [numA, setNumA] = useState(0)
  const [numB, setNumB] = useState(0)

  let msg = ''
  if(result === Number(0)) {msg = 'res is zero'}
  if(result > Number(100)) {msg = 'the result is greater than 100'}
  if(result <= Number(100)) {msg = 'the result is lesser than 100'}

  return (
    <>
      <h1>ex 1</h1>
      <div className="card">
        <div className="input">
          <label htmlFor="numA">number a </label>
          <input name="numA" type="number" onChange={a => setNumA(Number(a.target.value))} />
        </div>
        <div className="input">
          <label htmlFor="numB">number b </label>
          <input name="numB" type="number" onChange={a => setNumB(Number(a.target.value))} />
        </div>
        <br />
        <button onClick={() => setResult(() => numA + numB)}>
          add
        </button>
        <button onClick={() => setResult(() => numA - numB)}>
          substract
        </button>
        <button onClick={() => setResult(() => numA * numB)}>
          multiply
        </button>
        <button onClick={() => setResult(() => numA / numB)}>
          divide
        </button>
        <br /><br />
        <button>
          result is {result}
        </button>
        <br /><br />
        <p>
          {msg}
        </p>
      </div>
    </>
  )
}

export default BiayaKuliah
