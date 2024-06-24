import classes from './Header.module.css'

export default function Header() {
    return (
      <header className='flex flex-col items-center mt-24 mb-8 md:mb-16'>
        <h1>ICT GALA NIGHT</h1>
        <p className="text-stone-500">We are pleased to welcome you</p>
      </header>
    );
  }