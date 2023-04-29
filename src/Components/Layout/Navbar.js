import LOGO from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'
const NavBar = () => {

    return (
        <div className='bg-[#515154] flex justify-center'>
            <div className="w-full max-w-[1200px] h-[50px] bg-[#515154] top-0 flex justify-between items-center">
                <Link  to="/" className='mx-[8px] cursor-pointer'>
                    <img src={LOGO} alt="logo" className='h-[40px]' />
                </Link>
                <div className='w-[100px] text-[14px] h-full text-white mx-[8px] flex justify-center items-center hover:bg-[#ccc] cursor-pointer'>
                    <Link to=".">Điện thoại</Link>
                </div>
                <div className='w-[100px] text-[14px] h-full text-white mx-[8px] flex justify-center items-center hover:bg-[#ccc] cursor-pointer'>
                    <Link to=".">Laptop</Link>

                </div>
                <div className='w-[100px] text-[14px] h-full text-white mx-[8px] flex justify-center items-center hover:bg-[#ccc] cursor-pointer'>
                    <Link to=".">Tablet</Link>
                </div>
                <Link to="/search" className='w-[100px] text-[14px] h-full text-white mx-[8px] flex justify-center items-center hover:bg-[#ccc] cursor-pointer'>Tìm kiếm</Link>
            </div>
        </div>
    )
}

export default NavBar