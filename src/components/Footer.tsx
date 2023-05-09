
export default function Footer() {
  return (
    <div className="absolute w-full flex justify-between bottom-0 p-2">
      Made with ❤️ by <a href="https://github.com/Edwinliby">eKuttan</a>
<button
    onClick={deleteAccount}
    className='text-black font-semibold absolute bottom-3 right-3 flex gap-1 items-center w-full justify-end'>
    <TbTrash size="25" className="text-red-600 hover:scale-105" /> Delete Account
</button>
    </div>
  )
}
