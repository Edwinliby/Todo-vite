import { TbTrash } from 'react-icons/tb';

export default function Footer() {

  const deleteAccount = (): void => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="absolute w-full flex items-center bottom-0 p-2">
      <div className='text-[.9rem] w-full'>
        Made with ❤️ by <a href="https://github.com/Edwinliby" className='font-semibold'>eKuttan</a>
      </div>
      <button
        onClick={deleteAccount}
        className='text-black text-[.9rem] font-semibold flex gap-1 items-center w-full justify-end'>
        <TbTrash size="25" className="text-red-600 hover:scale-105" /> Delete Account
      </button>
    </div>
  )
}
