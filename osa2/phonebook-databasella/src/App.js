// korjattu hakemaan data json-serveriltä

import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])
  console.log('render', persons.length, 'persons')


  const addPerson = (event) => {
    event.preventDefault()

    if (newName.length <= 0) {
      alert('Name is required!')
      return;
    }

    if (newNumber.length <= 0) {
      alert('Number is required!')
      return;
    }
    const personObject = {
      name : newName,
      number : newNumber
    }

    if (persons.find(person => person.name === personObject.name)) {
      alert(`${personObject.name} already exists!`)
      return;
    }
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => { 
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => { 
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => { 
    setNewFilter(event.target.value)
  }

  const numbersToShow = persons.filter(person => {
    if (newFilter.length <= 0) {
      return true
    }
    
    return person.name.includes(newFilter)
  })

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>Add a new contact</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
      newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>
      {numbersToShow.map(person => 
            <Person key={person.name} name={person.name} number={person.number} />
        )}

    </div>
  )

}

export default App