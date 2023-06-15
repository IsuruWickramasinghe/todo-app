import React from 'react'
import './add-new.style.css'

import { auth, firestore } from '../../config/firebase';
import { doc, setDoc,collection } from 'firebase/firestore';

function AddNewTask() {

  const addTodo = async (e) => {
    e.preventDefault();
    const submitData = {
      isCompleted: false,
    }
    const formData = document.querySelector("#form")
    const dataFld = formData.querySelectorAll("input, textarea")
    dataFld.forEach(data => {
      submitData[data.name] = data.value
    })

    // add data 
    await setDoc(doc(collection(firestore, "Users", auth.currentUser.uid, "todos")), submitData);

    formData.reset()

  }

  return (
    <div className='add-new'>

      <form onSubmit={addTodo} id='form'>

        <div className="form-field">
          <label htmlFor="todo">todo</label>
          <input type="text" name='todo' id='todo'/>
        </div>

        <div className="form-field">
          <label htmlFor="todo-desc">description</label>
          <textarea name="todoDesc" id="todo-desc" cols="40" rows="5"></textarea>
        </div>

        <div className="form-field">
          <label htmlFor="date">date</label>
          <input type="date" name='date' id='date'/>
        </div>

        <div className="form-field">
          <button type='submit'>
            <i className="ri-add-circle-fill"></i> 
            ADD
          </button>
        </div>

      </form>

    </div>
  )
}

export default AddNewTask