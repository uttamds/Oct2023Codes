import React, { useRef, useState } from 'react'
import Notice from './Notice'
import Hr from './Hr'

export default function Userinput() {
    const [units, setUnits] = useState([
      {unit_id : 11, unit_name : 'Accounts'},
      {unit_id : 22, unit_name : 'Marketing'},
      {unit_id : 33, unit_name : 'Sales'},
      {unit_id : 33, unit_name : 'Sales'},
      {unit_id : 33, unit_name : 'Sales'},
      {unit_id : 33, unit_name : 'Sales'},
      {unit_id : 33, unit_name : 'Sales'},
      {unit_id : 33, unit_name : 'Sales'},
      {unit_id : 33, unit_name : 'Sales'},
      {unit_id : 33, unit_name : 'Sales'}
    ])
    const [name, setName] = useState()
    const [name1, setName1] = useState()
    const inputRef = useRef()
    const inputRef1 = useRef()

    function reset() {
      inputRef.current.value='';
      inputRef1.current.value='';
      inputRef.current.focus();
    }
  return (
    <div style={{backgroundColor : 'burlywood'}}>
      <label>FirstName</label>
      <input ref = {inputRef} value={name} onChange={e=>setName(e.target.value)}/>
      <label>LastName</label>
      <input ref = {inputRef1} value={name1} onChange={e=>setName1(e.target.value)}/>
  
      <p>My fname is <span style={{color : "red"}}>{name}</span> </p>
      <p>My lname is <span style={{color : "blue"}}>{name1}</span> </p>

      <button onClick={reset}>Clear Form</button>
      <br/>
      <br/>
      <br/>
      <br/>

      
      
      <Hr fname={name} lname={name1}/>
      <Notice fname={name}  lname={name1} units={units} />

    </div>
  )
}
