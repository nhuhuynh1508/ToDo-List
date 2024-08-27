import { useState } from "react";

function Form() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue) {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        } else {
            alert('Enter a task!')
        }
        
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4">
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
                <ul className="py-2 rounded-lg shadow-sm w-96 space-y-4">
                        {tasks.map((tasks) => (
                    <li key={tasks} className="py-2 pl-3 border border-white text-white rounded-md">{tasks}</li>
                    ))}
                </ul>
        </div>
    );
}

export default Form;
