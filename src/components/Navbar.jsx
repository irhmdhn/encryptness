import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center p-3 sm:p-6'>
        <div className='flex'>
            <img src="/encrypness.png" alt="" width={32} />
        </div>
        <div className='flex gap-4 items-center text-sm'>
            <NavLink to={'encrypt'} className={'nav-item'} >Encrypt</NavLink>
            <NavLink to={'decrypt'} className={'nav-item'} >Decrypt</NavLink>
        </div>
    </header>
  )
}

export default Navbar