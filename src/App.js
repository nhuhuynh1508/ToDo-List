import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Form from './components/form';
import Header from './components/header';

export function generateRandomID(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function App() {
    const [tasks, setTasks] = useState([]);
    
    const handleSubmitTask = (value) => {
        if (!value) return
        setTasks([...tasks, { text: value, isCompleted: false, id: generateRandomID(8)}]);
    }

    const handleFinishTask = (id) => {
        const updatedTasks = tasks.filter((task) => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleRemoveTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    return (
        <div className="bg-black flex flex-col min-h-screen justify-center items-center">
            <Header />
            <Dashboard tasks={tasks} />
            <Form tasks={tasks} onSubmitTask={handleSubmitTask} onFinishTask={handleFinishTask} onRemoveTask={handleRemoveTask}/>
        </div>
    );
}

export default App;
