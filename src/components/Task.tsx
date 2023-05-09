import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

interface TaskProps {
    task: {
        id: string,
        title: string,
        isCompleted: boolean,
    },
    onDelete: (id: string) => void,
    onComplete: (id: string) => void,
}
export function Task({ task, onDelete, onComplete }: TaskProps) {
    return (
        <div className="task w-full border p-4 flex items-center justify-between gap-3">
            <button className="w-[18px] h-[18px] bg-none border-none" onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill className="text-[#5E60CE]" /> : <div className='w-full h-full rounded-full border-2 border-[#4EA8DE]' />}
            </button>

            <p className={task.isCompleted ? "text-[#292929] line-through" : ""}>
                {task.title}
            </p>

            <button className="bg-none border-none text-[#808080]" onClick={() => onDelete(task.id)}>
                <IoMdClose size={20} />
            </button>
        </div>
    )
}