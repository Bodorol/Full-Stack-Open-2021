import React from 'react'

const Persons = ({persons, removePerson}) => {
    return (
        <div>
            <h2>Numbers</h2>
            {persons.map(person => <p key={person.id}>{person.name}: {person.number}
            <button onClick={() => removePerson(person)}>Delete Person</button></p>)}
        </div>
    );
}

export default Persons;