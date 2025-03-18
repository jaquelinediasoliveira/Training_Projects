import Card from './components/Cards/Card'
import Form from './components/Form/Form'

import './App.css'
import { useState } from 'react'

function App() {

  const [filter, setFilter] = useState('all');
  const [formData, setFormdata] = useState('');

  const getFormData = (e) => {
    setFormdata(e)
  }

  return (
    <>
      <h1>To-Do List</h1>
      <Form inputData={getFormData} setFilter={setFilter}/>
      <Card cardInfo={formData} filter={filter}/>
    </>
  )
}

export default App
