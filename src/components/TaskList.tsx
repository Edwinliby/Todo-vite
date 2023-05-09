import { Task } from './Task';

type TaskProps = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TasksProps = {
  tasks: TaskProps[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
};

export function Tasks({ tasks, onDelete, onComplete }: TasksProps) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className="relative w-full max-w-[736px] my-0 mx-auto mt-4 px-4">
      <div className="flex flex-col rounded-lg shadow">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>

      <header className="taskHeader pt-4 flex items-center justify-between mb-[24px]">
        <div className='flex items-center gap-2'>
          <p className='text-sm text-[#4EA8DE] font-bold'>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div className='flex items-center gap-2'>
          <p className="text-sm text-[#8284FA] font-bold">Completed tasks</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>
    </section>
  );
}
