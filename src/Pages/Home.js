import BANNER1 from '../assets/banner/Bonus banner-01.png'
import BANNER2 from '../assets/banner/Bonus banner-02.png'
import BANNER3 from '../assets/banner/Bonus banner-03.png'
import { Button } from 'antd'
import Slide from '../Components/Layout/Slide'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const API = process.env.REACT_APP_API

const Home = () => {
    const [phone, setPhone] = useState([])
    const [laptop, setLaptop] = useState([])
    const [tablet, setTablet] = useState([])

    useEffect(() => {
        const getPhone = async () => {
            const res = await axios.get(API + "list=dienthoai")
            setPhone(res.data.slice(0, 4))
        }
        const getLaptop = async () => {
            const res = await axios.get(API + "list=laptop")
            setLaptop(res.data.slice(0, 4))
        }
        const getTablet = async () => {
            const res = await axios.get(API + "list=tablet")
            setTablet(res.data.slice(0, 4))
        }
        getPhone()
        getLaptop()
        getTablet()
    }, [])

    return (
        <Fragment>
            <Slide />
            <div>
                <div className='flex w-full justify-between mt-[40px]'>
                    <a className='w-[32%]' href='/'>
                        <img src={BANNER1} alt='banner' />
                    </a>
                    <a className='w-[32%]' href='/'>
                        <img src={BANNER2} alt='banner' />
                    </a>
                    <a className='w-[32%]' href='/'>
                        <img src={BANNER3} alt='banner' />
                    </a>
                </div>
                <div className='mt-[70px]'>
                    <div className='mb-[60px]'>
                        <h3 className='text-center font-bold text-[25px] mb-[20px]'>Điện thoại</h3>
                        <div className='flex justify-between'>
                            {phone.map((item, index) => (
                                <Link to="/product" state={{ productID: item.ProductID }} key={index} className='bg-white rounded-[5px] p-[12px] cursor-pointer w-[23%] flex flex-col'>
                                    <div className='w-full h-[65%]'>
                                        <img src={item.ImageLink} alt="item" />
                                    </div>
                                    <div className='h-[35%]'>
                                        <p className='font-bold mt-[20px]'>{item.ProductName}</p>
                                        <div className='mt-[20px] mb-[12px]'>
                                            <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>{item.SalePrice}  </span>
                                            <span className='text-[14px] text-[#86868B] line-through'>{item.NormalPrice}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}


                        </div>

                        <div className='text-center mt-[40px]'>
                            <Button className='w-[200px] text-[#0066CC] border-[#0066CC] hover:text-white hover:bg-[#0066CC]'>
                                <Link to="/search"
                                    state={{ typeProduct: "dienthoai" }}
                                >Xem tất cả điện thoại</Link>
                            </Button>

                        </div>
                    </div>
                    <div className='mb-[60px]'>
                        <h3 className='text-center font-bold text-[25px] mb-[20px]'>Máy tính bảng</h3>
                        <div className='flex justify-between'>
                            {tablet.map((item, index) => (
                                <Link to="/product" state={{ productID: item.ProductID }} key={index} className='bg-white rounded-[5px] p-[12px] cursor-pointer w-[23%] flex flex-col'>
                                    <div className='w-full h-[65%]'>
                                        <img src={item.ImageLink} alt="item" />
                                    </div>
                                    <div className='h-[35%]'>
                                        <p className='font-bold mt-[20px]'>{item.ProductName}</p>
                                        <div className='mt-[20px] mb-[12px]'>
                                            <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>{item.SalePrice}  </span>
                                            <span className='text-[14px] text-[#86868B] line-through'>{item.NormalPrice}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}


                        </div>

                        <div className='text-center mt-[40px]'>
                            <Button className='w-[200px] text-[#0066CC] border-[#0066CC] hover:text-white hover:bg-[#0066CC]'>
                                <Link to="/search" state={{ typeProduct: "tablet" }} >Xem tất cả máy tính bảng</Link>
                            </Button>

                        </div>
                    </div>
                    <div className='mb-[60px]'>
                        <h3 className='text-center font-bold text-[25px] mb-[20px]'>Laptop</h3>
                        <div className='flex justify-between'>
                            {laptop.map((item, index) => (
                                <Link to="/product" state={{ productID: item.ProductID }} key={index} className='bg-white rounded-[5px] p-[12px] cursor-pointer w-[23%] flex flex-col'>
                                    <div className='w-full h-[70%]'>
                                        <img src={item.ImageLink} alt="item" />
                                    </div>
                                    <div className='h-[30%]'>
                                        <p className='font-bold text-[14px] mt-[20px]'>{item.ProductName}</p>
                                        <div className='mt-[20px] mb-[12px]'>
                                            <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>{item.SalePrice}  </span>
                                            <span className='text-[14px] text-[#86868B] line-through'>{item.NormalPrice}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}


                        </div>

                        <div className='text-center mt-[40px]'>
                            <Button className='w-[200px] text-[#0066CC] border-[#0066CC] hover:text-white hover:bg-[#0066CC]'>
                                <Link to="/search" state={{ typeProduct: "laptop" }} >Xem tất cả laptop</Link>
                            </Button>

                        </div>
                    </div>
                </div>

            </div>
        </Fragment >
    )
}

export default Home