import { useState, ChangeEvent, FormEvent } from 'react';
import { MdOutlineLogout } from 'react-icons/md';

interface Props {
    handleAddTask: (taskTitle: string) => void;
}

export function Header({ handleAddTask }: Props) {

    const logout = (): void => {
        localStorage.removeItem("signUp");
        window.location.reload();
    }

    const [title, setTitle] = useState<string>('');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        handleAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className="bg-[url('/mountain.jpg')] bg-cover bg-no-repeat flex justify-center items-center h-[200px] relative">
            <div className='absolute bg-gradient-to-r from-fuchsia-500/30 to-indigo-500/40 w-full h-full'></div>
            
            <p className='text-white font- absolute top-2 left-3 text-[1.5rem] font-semibold'>Welcome {localStorage.getItem('name')}</p>

            <button
                onClick={logout}
                className='text-white absolute top-3 right-3 flex gap-2 w-full items-center justify-end'>
                Logout <MdOutlineLogout size="25" />
            </button>

            <div className="flex z-10 gap-1 pb-10 items-center justify-center">
                <img src="/mu-w.png" alt="mu-todo" className="rotate-3 h-[5rem]" />
                <span className="block h-[3px] bg-white w-4"></span>
                <h1 className="text-white font-semibold text-[2rem]">Todo</h1>
            </div>

            <form onSubmit={handleSubmit} className="absolute h-[54px] bottom-2 w-full max-w-[736px] flex gap-2 px-4">
                <input
                    placeholder="Add a new task"
                    type="text"
                    onChange={onChangeTitle}
                    value={title}
                    className='placeholder:text-[#808080] border-none h-full flex-1 text-black bg-white/90 rounded-lg px-4 text-base'
                />
            </form>
        </header>
    )
}
