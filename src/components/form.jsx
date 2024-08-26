import { useState } from "react";

function Form() {
    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("The submit button is clicked!")
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form className="flex gap-4 mb-12" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    placeholder="Write your next task..."
                    onChange={(e) => setTask(e.target.value)}
                    className="w-80 h-12 p-4 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="w-12 h-12 bg-green-700 text-white flex rounded-md items-center justify-center text-lg font-bold hover:bg-green-500"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default Form;
