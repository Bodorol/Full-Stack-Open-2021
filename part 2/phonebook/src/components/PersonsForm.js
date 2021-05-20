import React from 'react'

const PersonsForm = ({newName, newNumber, handleNameChange, handleNumberChange, addPerson}) => {
        return (
            <form>
                <h3>Add a New Entry</h3>
                <div>
                    name: <input value={newName} onChange={handleNameChange} /> <br />
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit" onClick={addPerson}>add</button>
                </div>
            </form>
        );
}

export default PersonsForm;