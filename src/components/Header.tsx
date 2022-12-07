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
          <span className='font-semibold text-base leading-[1.0625rem]'>
            Disponível para
          </span>

          <ul className='flex gap-2 ml-[1.125rem]'>
            <li className='border border-white px-2 font-semibold text-base leading-[1.625rem]'>PS4</li>
            <li className='border border-white px-2 font-semibold text-base leading-[1.625rem]'>PS5</li>
          </ul>
        </div>
      </div>
    </header>
  )
}