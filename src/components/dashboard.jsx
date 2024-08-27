
function Dashboard({ tasks }) {
    console.log(tasks)
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    const totalTasks = tasks.length;

    console.log("totalTasks: ", totalTasks)

    return (
        <div className="w-96 mx-auto p-4 mt-"> 
            <section className="w-full text-white rounded-md">
                <div className="flex justify-between items-center border-2 border-gray-400 rounded-md p-4 mb-4">
                    <div>
                        <p className="text-2xl font-semibold">Task Done</p>
                        <p className="text-lg text-gray-400">Keep it up!</p>
                    </div>
                    <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full text-xl">
                        {completedTasks}/{totalTasks}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
