import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Form from './components/form';
import Header from './components/header';

function App() {
    const [tasks, setTasks] = useState([]);

    function generateRandomID(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }


    const handleSubmitTask = (value) => {
        if (!value) return
        setTasks([...tasks, { text: value, isCompleted: false, id: generateRandomID(8) }]);
    }

    return (
        <div className="bg-black min-h-screen justify-center items-center">
            <Header />
            <Dashboard tasks={tasks} />
            <Form tasks={tasks} onSubmitTask={handleSubmitTask} />
        </div>
    );
}

export default App;
