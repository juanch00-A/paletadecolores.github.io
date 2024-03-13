import './App.css'
import Values from 'values.js'
import { useState } from 'react'
import { FormColor } from './components/FormColor'
import { DisplayColors } from './components/DisplayColors'


export const App = () => {
  const [list, setList] = useState(new Values('red').all(5))
  console.log(list)

  return (
    <>
      <div className='content-logo'>
        <img className='img-logo' src="./logo1.png" alt="Logo" />
      </div>

      <FormColor setList={setList}/>
      <DisplayColors list={list}/>
    </>
  )
}
