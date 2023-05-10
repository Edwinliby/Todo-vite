import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/TaskList";
import Footer from "./components/Footer";

const LOCAL_STORAGE_KEY = 'todo:tasks';

interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
}

function Home() {

    const [tasks, setTasks] = useState<Task[]>([]);

    function loadSavedTasks() {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    }

    function setTasksAndSave(newTasks: Task[]) {
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    }

    useEffect(() => {
        loadSavedTasks();
    }, [])

    function addTask(taskTitle: string) {
        setTasksAndSave([...tasks, {
            id: crypto.randomUUID(),
            title: taskTitle,
            isCompleted: false
        }]);
    }

    function deleteTaskById(taskId: string) {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasksAndSave(newTasks);
    }

    function toggleTaskCompletedById(taskId: string) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task;
        });
        setTasksAndSave(newTasks);
    }

    return (
        <>
            <Header handleAddTask={addTask} />
            <Tasks
                tasks={tasks}
                onDelete={deleteTaskById}
                onComplete={toggleTaskCompletedById}
            />

            <button
                onClick={deleteAccount}
                className='text-black font-semibold absolute bottom-3 right-3 flex gap-1 items-center w-full justify-end'>
                <TbTrash size="25" className="text-red-600 hover:scale-105" /> Delete Account
            </button>
            <Footer/>
        </>
    )
}

export default Home;
