import Logo from '../assets/logo.jpg'
import Sony from '../assets/sony.svg'

export function Header() {
  return (
    <header className='w-full h-20 flex items-center bg-black'>
      <div className='grid grid-cols-3 items-center w-full max-w-[89.6875rem] m-auto px-4'>
        <img
          className=''
          src={Sony}
          alt="Logotipo da Sony"
        />
        <img
          className='m-auto'
          src={Logo}
          alt="Logotipo do God of War Ragnarök"
        />

        <div className='flex items-center justify-end'>
          <span className='font-semibold text-sm'>
            Disponível para
          </span>

          <ul className='flex gap-2 ml-[1.125rem]'>
            <li className='border border-white py-1 px-2 font-semibold text-sm leading-4'>PS4</li>
            <li className='border border-white py-1 px-2 font-semibold text-sm leading-4'>PS5</li>
          </ul>
        </div>
      </div>
    </header>
  )
}