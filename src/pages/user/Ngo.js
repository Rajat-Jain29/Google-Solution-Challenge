import React, { useEffect, useState } from 'react'
import {db} from '../../firebase'
import firebase from 'firebase'
import Todo from './Todo';
import { Table } from 'react-bootstrap';
function Ngo() {
  const [reels, setreels] = useState([])
  useEffect(() => {
    db.collection("people").orderBy('timestamp','desc').onSnapshot(snapshot => (
      setreels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  console.log(reels)

      // console.log(Todos)
    
    return (
        <div>
            <form>
      <ul>
       
           
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First name</th>
      <th>Last Name</th>
      <th>Phone number</th>
      <th>Address</th>
      <th>Food detail</th>
      <th>SubmissionTime</th>
    </tr>
  </thead>
  {reels.map(todos => (
  <tbody>
    <tr>
      <td>1</td>
      <td>{todos.FirstName}</td>
      <td>{todos.LastName}</td>
      <td>{todos.UserName}</td>
      <td>{todos.Address}</td>
      <td>{todos.food_descripation}</td>
      <td>{Date()} </td>
    </tr>
   <br/>
   <br/>
   <br/>
  </tbody>
  ))}
</Table>
       
      </ul>
</form>
        </div>
    )
}

export default Ngo
