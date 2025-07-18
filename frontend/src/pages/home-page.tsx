import { Link } from 'react-router-dom'

// import Group1 from '../assets/media/Home/Group1.svg';
// import Group2 from '../assets/media/Home/Group2.svg';
// import Group3 from '../assets/media/Home/Group3.svg';
import Mobile from '../assets/media/Home/mobile-home.svg';

export const HomePage = () => {

  return (
    <>


      <div className='text-center mt-5'>
        <h1 className="font-semibold text-primary text-[26px]">D E N A U R L E N</h1>
        <p className="text-neutral-300">Know Yourself First!</p>
        <img className="h-[65vh] w-[100%]" src={Mobile} alt="mobile" />
        <button className='w-[80%] p-3 text-white bg-primary text-lg rounded'><Link to='/login'>Login</Link></button>
        <button className='w-[80%] p-3 text-black text-lg '><Link to='/signup'>Create account</Link></button>
      </div >

      {/* <div>
        <h1> Welcome to DENAURLEN</h1>
        <h3>Gamify with Smart Savvy Social Network</h3>
        <img src={Group3} alt="test" />
        <img src={Group2} alt="test" />
        <img src={Group1} alt="test" />
        <img src={Mobile} alt="mobile" />
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Create account</Link>
      </div> */}
    </>
  )
}