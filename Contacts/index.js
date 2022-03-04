import {useState} from 'react'
import List from './List'
import Form from './Form'
function Contacts() {
    const [contact,setContact] = useState([]);


  return (
    <div className="App">
        <List contacts={contact}/>
        <Form addContact={setContact}/>
        </div>
  )
}

export default Contacts