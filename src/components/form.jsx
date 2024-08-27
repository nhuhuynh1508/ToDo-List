import { useState } from "react";

function Form({ tasks, onSubmitTask }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            onSubmitTask(inputValue);
            setInputValue('');
        } else {
            alert('Enter a task!')
        }
    };

    const handleFinishTask = (id) => {
        // update the task status for the task with the given id
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, isCompleted: true } : task
        );
        onSubmitTask(updatedTasks);
    }

    return (
        <div className="w-96 mx-auto mt-12 p-4">
            <form className="flex gap-4 mb-8" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Write your next task..."
                    onChange={handleChange}
                    className="w-80 h-12 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                    type="submit"
                    className="w-12 h-12 bg-green-700 text-white flex rounded-md items-center justify-center text-lg font-bold hover:bg-green-500 shadow-md"
                >
                    +
                </button>
            </form>
            <ul className="py-2 rounded-lg shadow-sm space-y-4">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="py-2 pl-3 pr-3 border border-white text-white rounded-md flex justify-between items-center"
                    >
                        {task.text}
                        <button
                            className={`ml-4 w-6 h-6 rounded-full border-2 ${task.isCompleted ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}
                            onClick={() => handleFinishTask(task.id)}
                        >
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Form;
