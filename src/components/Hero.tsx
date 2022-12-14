import AgeGroup from '../assets/faixa-etaria.png'
import Bullets from '../assets/bullets.svg'
import Play from '../assets/play.svg'
import Thumbnail from '../assets/thumbnail.gif'

export function Hero() {
  return (
    <section className='pt-[10.25rem] h-[50rem] bg-hero bg-center bg-no-repeat'>
      <div className='flex items-center justify-between w-full max-w-[89.6875rem] m-auto px-4'>
        <div className='w-full max-w-[48.875rem]'>
          <h3 className='flex items-center gap-4 mb-6'>
            <img
              className=''
              src={Bullets}
              alt=''
            />
            <span className='font-medium text-xl text-white leading-[1.375rem]'>
              Lançamento dia 09/11/2022
            </span>
          </h3>

          <h1 className='text-[7.75rem] leading-[97.5%] font-bold'>
            God of War Ragnarök
          </h1>
          <p className='font-medium text-[1.375rem] mt-[1.125rem] mb-10'>
            Os maiores heróis dos nove reinos, lutando por um futuro em que acreditam.
          </p>

          <div className='flex'>
            <strong className='bg-white text-black py-[1.125rem] px-9 font-bold text-xl leading-[1.375rem]'>
              R$349,00
            </strong>
            <a
              href=''
              target='_blank'
              className='bg-blue-600 text-white py-[1.125rem] px-9 font-bold text-xl leading-[1.375rem]'
            >
              Comprar na pré-venda
            </a>
          </div>
        </div>

        <div className='relative top-[6.125rem] w-full max-w-[27.6875rem]'>
          <span className='block font-bold text-lg leading-5 mb-6'>
            Assista ao trailer
          </span>
          <button className='relative h-[15.4375rem] border-4 border-blue-600 overflow-hidden flex items-end pl-8 pb-[1.5625rem] mb-[3.1875rem]'>
            <a
              href='https://www.youtube.com/watch?v=x6oF3Jxu7X0&ab_channel=PlayStationBrasil'
              target='_blank'
            >
              <img
                src={Thumbnail}
                alt='Thumbnail do trailer'
                className='block w-full relative'
              />
              <img
                src={Play}
                alt='Icone indicador de play'
                className='absolute bottom-[1.5625rem] left-8'
              />
            </a>
          </button>
          
          <div className='flex items-center'>
            <img
              src={AgeGroup}
              alt='Ícone indicador de faixa etária'
            />
            <p className='text-white max-w-[17.125rem] ml-4'>
              Drogas Lícitas, Linguagem Imprópria, Violência Extrema
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}