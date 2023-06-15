import React, { useEffect, useState } from 'react';
import './todo-list.style.css';
import { auth, firestore } from '../../config/firebase';
import { collection, query, getDocs, doc, updateDoc, where, deleteDoc } from 'firebase/firestore';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleTodoClick = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, showDesc: !todo.showDesc } : todo
      )
    );
  };

  useEffect(() => {
    getTodos()
  }, []);

  const getTodos = async () => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const querySheet = await getDocs(
          query(collection(firestore, 'Users', user.uid, 'todos'), where('isCompleted', '==', false))
        );

        setTodos(
          querySheet.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            showDesc: false,
          }))
        );
      }
    });

    return () => unsubscribe();
  }

  const isCompletedTodo = async (key) => {
    await updateDoc(doc(firestore, "Users", auth.currentUser.uid, "todos", key),{
      isCompleted: true,
    })
    getTodos()
  }
  const deleteTodo = async (key) => {
    await deleteDoc(doc(firestore, "Users", auth.currentUser.uid, "todos", key))
    getTodos()
  }

  return (
    <div className='todo-list'>
      {todos.map(todo => (

        <div className={`todo-card ${todo.showDesc ? 'show-desc' : ''}`} key={todo.id} onClick={() => handleTodoClick(todo.id)}>

          <div className={`todo-data`}>

            <div className="todo-text">{todo.data && todo.data.todo}</div>

            <div className={`todo-desc`}>
              {todo.data && todo.data.todoDesc}
            </div>

          </div>

          <div className="todo-btns">

            <i className="ri-check-line check-todo" onClick={()=>{isCompletedTodo(todo.id)}} ></i>
            <i className="ri-delete-bin-line delete-todo" onClick={()=>{deleteTodo(todo.id)}}></i>

          </div>

        </div>

      ))}

    </div>

  );

}

export default TodoList;
