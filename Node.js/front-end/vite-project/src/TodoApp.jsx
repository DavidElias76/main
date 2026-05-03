import { useState, useEffect } from 'react'
import axios from 'axios'
import './TodoApp.css'

export default function TodoApp() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [taskInput, setTaskInput] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editingTask, setEditingTask] = useState('')

    const API_URL = 'http://localhost:8080/todos'

    // Fetch all todos from the back-end and front-end
    const fetchTodos = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.get(API_URL)
            setTodos(response.data)
        } catch (err) {
            setError('Failed to fetch todos')
            console.error('Error fetching todos:', err)
        } finally {
            setLoading(false)
        }
    }

    // Add new todo : POST 
    const handleAddTodo = async (e) => {
        e.preventDefault()
        if (!taskInput.trim()) {
            setError('Please enter a task')
            return
        }

        try {
            const newTodo = {
                task: taskInput,
                completed: false
            }
            // this how is looks like when using the get method:  /api/todos?task=Buy%20groceries&completed=false
            const response = await axios.post(API_URL, newTodo); // the data is sent to the back-end and then the back to the client
            setTodos([...todos, response.data]) // add the data to the todo array
            setTaskInput('')
            setError(null)
        } catch (err) {
            setError('Failed to add todo')
            console.error('Error adding todo:', err)
        }
    }

    // Delete todo
    const handleDeleteTodo = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`)
            setTodos(todos.filter(todo => todo.id !== id))
            setError(null)
        } catch (err) {
            setError('Failed to delete todo')
            console.error('Error deleting todo:', err)
        }
    }

    // edit button Start editing
    const handleEditStart = (todo) => {
        setEditingId(todo.id)
        setEditingTask(todo.task) // the value of the input - this will focus on the input  
    }

    // Cancel editing
    const handleEditCancel = () => {
        setEditingId(null)
        setEditingTask('')
    }

    // Update todo
    const handleUpdateTodo = async (id) => {
        if (!editingTask.trim()) {
            setError('Please enter a task')
            return
        }

        try {
            const updatedTodo = {
                task: editingTask,
                completed: todos.find(t => t.id === id).completed
            }
            const response = await axios.put(`${API_URL}/${id}`, updatedTodo)
            setTodos(todos.map(todo => todo.id === id ? response.data : todo))
            setEditingId(null)
            setEditingTask('')
            setError(null)
        } catch (err) {
            setError('Failed to update todo')
            console.error('Error updating todo:', err)
        }
    }

    // Toggle completed status
    const handleToggleComplete = async (todo) => {
        try {
            const updatedTodo = {
                task: todo.task,
                completed: !todo.completed
            }
            const response = await axios.put(`${API_URL}/${todo.id}`, updatedTodo)
            setTodos(todos.map(t => t.id === todo.id ? response.data : t))
            setError(null)
        } catch (err) {
            setError('Failed to update todo')
            console.error('Error updating todo:', err)
        }
    }

    // Load todos on component mount
    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        
        <div className="todo-container">

            <div className="todo-card">
                <h1>📝 Todo Application</h1>

                {/* Error message - the back-end not loaded not not updated */}
                {error && <div className="error-message">{error}</div>}

                {/* Add Todo Form */}
                <form onSubmit={handleAddTodo} className="add-todo-form">
                    <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="Enter a new task..." className="task-input"/>
                    <button type="submit" className="btn btn-add">+ Add Todo</button>
                </form>

                {/* Fetch Todos Button */}
                <button onClick={fetchTodos} className="btn btn-refresh" disabled={loading}>
                    {loading ? 'Loading...' : '🔄 Refresh Todos'}
                </button>

                {/* Loading state */}
                {loading && <p className="loading">Loading todos...</p>}

                {/* Todos List */}
                <div className="todos-list">
                    {todos.length === 0 ? (
                        <p className="no-todos">No todos yet. Add one to get started!</p>
                    ) : (
                        todos.map((todo) => (
                            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>

                                <div className="todo-content">
                                    <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(todo)} className="todo-checkbox" />

                                    {editingId === todo.id ? (
                                        <input type="text" value={editingTask} onChange={(e) => setEditingTask(e.target.value)} className="task-edit-input"/>
                                    ) : (
                                        <p className="todo-task">{todo.task}</p>
                                    )}
                                </div>

                                <div className="todo-actions">
                                    {editingId === todo.id ? (
                                        <>
                                            <button onClick={() => handleUpdateTodo(todo.id)} className="btn btn-save">Save</button>
                                            <button onClick={handleEditCancel} className="btn btn-cancel">Cancel</button>
                                        </>
                                    ) : (

                                        <>
                                            <button onClick={() => handleEditStart(todo)} className="btn btn-edit">Edit</button>
                                            <button onClick={() => handleDeleteTodo(todo.id)} className="btn btn-delete">Delete</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Stats */}
                {todos.length > 0 && (
                    <div className="stats">
                        <p>Total Todos: <strong>{todos.length}</strong></p>
                        <p>Completed: <strong>{todos.filter(t => t.completed).length}</strong></p>
                        <p>Pending: <strong>{todos.filter(t => !t.completed).length}</strong></p>
                    </div>
                )}
            </div>
        </div>
    )
}

// NOTES: 
// WHEN USING THE POST METHOD
// The data is sent to the back-end and the back-end updates the object by adding an id + 1 the returns the data(response.data) to the front-end which then updates the todos array