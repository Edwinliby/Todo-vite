import { TbTrash } from 'react-icons/tb';

export default function Footer() {

  const deleteAccount = (): void => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="absolute w-full text-center bottom-0 p-2">
      Made with ❤️ by <a href="https://github.com/Edwinliby">eKuttan</a>
    </div>
  )
}
