import React from 'react'

function List({ contacts }) {
    return (
        <div>
            <ul>
                {contacts.map((contact, i) => (
                    <li key="i"> Ad:{contact.do} </li>))}
            </ul>
        </div>
    )
}

export default List