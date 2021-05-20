import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/personService'

const App = () => {
  const [ persons, setPersons ] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');
  const [ message, setMessage ] = useState([null, null]);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName,
                        number: newNumber,
                        id: persons.length + 1}
    if (persons.some(person => person.name === newPerson.name)) {
      const matchingPerson = persons.filter(person => person.name === newPerson.name)[0];
      if (newPerson.number === matchingPerson.number) {
        alert(`${newPerson.name} is already in the phonebook.`);
      } else {
        if (window.confirm(`${newPerson.name} is already in the phonebook, replace the old number with a new one?`)) {
          personService
                      .update(newPerson, matchingPerson.id)
                      .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
                        setMessage([
                          `${returnedPerson.name}'s info was updated.`,
                          "green"]
                          );
                        setTimeout(() => setMessage([null, null]), 5000);
                      })
                      .catch(error => {
                        setMessage([
                          `${newPerson.name} has already been removed from the server.`,
                          "red"]
                          );
                        setTimeout(() => setMessage([null, null]), 5000);
                      });
        }
      } 
    } else {
      personService
                    .create(newPerson)
                    .then(returnedPerson => {
                      setPersons(persons.concat(returnedPerson))
                      setMessage([
                        `${returnedPerson.name} was added to the server.`,
                        "green"]
                        );
                      setTimeout(() => setMessage([null, null]), 5000);
                    });
    }
    setNewName('');
    setNewNumber('');
  }

  const removePerson = person => {
      if (window.confirm(`Delete ${person.name}?`)) {
          personService
                      .remove(person)
                      .then(() => {
                        setPersons(persons.filter(entry => entry.name !== person.name));
                        setMessage([
                          `${person.name} was removed from the server.`,
                          "green"]
                          );
                        setTimeout(() => setMessage([null, null]), 5000);
                      })
                      .catch(error => {
                        setMessage([
                          `${person.name} has already been removed from the server.`,
                          "red"]
                          );
                        setTimeout(() => setMessage([null, null]), 5000);
                      });;
      }
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    personService
            .getAll()
            .then(people => setPersons(people));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonsForm newName={newName} newNumber={newNumber} 
      handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} 
      addPerson={addPerson} />
      <Persons persons={filteredPersons} removePerson={removePerson} />
    </div>
  );
}

export default App