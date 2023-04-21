import LOGO from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'
const NavBar = () => {

    return (
        <div className="w-100% h-[50px] bg-[#515154] top-0 flex justify-center items-center">
            <div className='mx-[8px]'>
                <img src={LOGO} alt="logo" className='h-[40px]' />
            </div>
            <div className='w-[100px] text-[14px] h-full text-white mx-[8px] flex justify-center items-center hover:bg-[#ccc] cursor-pointer'>
                <Link to=".">Điện thoại</Link>
            </div>
            <div className='w-[100px] text-[14px] h-full text-white mx-[8px] flex justify-center items-center hover:bg-[#ccc] cursor-pointer'>
                <Link to=".">Laptop</Link>

            </div>
            <div className='w-[100px] text-[14px] h-full text-white mx-[8px] flex justify-center items-center hover:bg-[#ccc] cursor-pointer'>
                <Link to=".">Tablet</Link>
            </div>
            <div className='w-[100px] text-[14px] h-full text-white mx-[8px] flex justify-center items-center hover:bg-[#ccc] cursor-pointer'>Tìm kiếm</div>
        </div>
    )
}

export default NavBar