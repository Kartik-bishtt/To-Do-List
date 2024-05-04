import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) {
        return [];
    }
    return data;
}


export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos(currentTodos => {
            return currentTodos.filter(t => t.id !== id)
        })
    }
    const toggleTodo = (id) => {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return todo;
                }
            })
        })
    }
    const addTodo = (text) => {
        return setTodos(currentTodos => {
            return [...currentTodos, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }
    return (
        <Box sx ={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant = 'h1' container= "div" sx = {{flexGrow: 1, marginBottom: '30px', textDecoration: "underline", textDecorationThickness: "3px"}}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        removeTodo={() =>
                            removeTodo(todo.id)
                        }
                        toggleTodo={() =>
                            toggleTodo(todo.id)
                        } />
                ))}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    );
}

