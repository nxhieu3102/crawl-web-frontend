import ITEM from '../assets/item/item.png'
import BANNER1 from '../assets/banner/Bonus banner-01.png'
import BANNER2 from '../assets/banner/Bonus banner-02.png'
import BANNER3 from '../assets/banner/Bonus banner-03.png'
import { Button } from 'antd'
import Slide from '../Components/Layout/Slide'
import { Fragment } from 'react'
const Home = () => {

    return (
        <Fragment>
        <Slide/>
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
                    <h3 className='text-center font-bold text-[25px] mb-[20px]'>Iphone</h3>
                    <div className='flex justify-between'>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center mt-[40px]'>
                        <Button className='w-[200px] text-[#0066CC] border-[#0066CC] hover:text-white hover:bg-[#0066CC]'>Xem tất cả iphone</Button>
                    </div>
                </div>
                <div className='mb-[60px]'>
                    <h3 className='text-center font-bold text-[25px] mb-[20px]'>Iphone</h3>
                    <div className='flex justify-between'>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-[40px]'>
                        <Button className='w-[200px] text-[#0066CC] border-[#0066CC] hover:text-white hover:bg-[#0066CC]'>Xem tất cả iphone</Button>
                    </div>
                </div>
                <div className='mb-[60px]'>
                    <h3 className='text-center font-bold text-[25px] mb-[20px]'>Iphone</h3>
                    <div className='flex justify-between'>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-[40px]'>
                        <Button className='w-[200px] text-[#0066CC] border-[#0066CC] hover:text-white hover:bg-[#0066CC]'>Xem tất cả iphone</Button>
                    </div>
                </div>
            </div>

        </div>
        </Fragment>
    )
}

export default Home