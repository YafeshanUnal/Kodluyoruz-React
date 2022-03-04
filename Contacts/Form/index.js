import { useState } from 'react'

function Form({addContact}) {
    const [form, setForm] = useState();
    const onChangeInput = (event) => {
        setForm({...form,  [event.target.name]: (event.target.value) });
    }
    const onSubmit = (event) => {
        

        event.preventDefault();
        addContact([form])
        console.log(form)
    }
    return (
        <form onSubmit={onSubmit}>
            <h1>To Do List</h1>
            <input
                name="do"
                placeholder="What needs to be done?"
                onChange={onChangeInput}
            />
            <br />
            <button>Add</button>

        </form>
    )
}

export default Form