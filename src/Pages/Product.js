import { Fragment } from "react"
import ITEM from '../assets/item/item.png'
import SHOP from '../assets/shop/shop1.jpg'
import { Button } from "antd"
const Product = () => {
    return (
        <Fragment>
            <div>
                <div className='flex justify-between mt-[12px] border-b-2'>
                    <h3 className="font-bold text-[24px]">Điện thoại iPhone 14 Pro Max 6GB/128GB</h3>
                    <p className="text-[24px] ">Giá chỉ từ:
                        <span className="text-[red]">&nbsp;
                            30.000.000đ
                        </span>
                    </p>
                </div>
                <div className="flex mt-[40px]">
                    <div className=" w-[50%] h-[500px] flex items-center">
                        <img src={ITEM} className="p-[20px] rounded-[10px] bg-white h-[100%]" alt="item" />
                    </div>
                    <div className="flex w-[50%] justify-left">
                        <div className="flex flex-col justify-between items-center bg-white mr-[12px] w-[30%] border-solid border-2 h-[150px] py-[12px]">
                            <div>
                                <img src={SHOP} alt="shop" />
                            </div>
                            <h3 className="text-[20px] text-[red] font-medium">25.500.500đ</h3>
                            <Button> Xem ngay </Button>
                        </div>
                        <div className="flex flex-col justify-between items-center bg-white mr-[12px] w-[30%] border-solid border-2 h-[150px] py-[12px]">
                            <div>
                                <img src={SHOP} alt="shop" />
                            </div>
                            <h3 className="text-[20px] text-[red] font-medium">25.500.500đ</h3>
                            <Button> Xem ngay </Button>
                        </div>
                        <div className="flex flex-col justify-between items-center bg-white w-[30%] border-solid border-2 h-[150px] py-[12px]">
                            <div>
                                <img src={SHOP} alt="shop" />
                            </div>
                            <h3 className="text-[20px] text-[red] font-medium">25.500.500đ</h3>
                            <Button> Xem ngay </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-[40px]">
                    <h2 className="text-[20px] font-bold">THÔNG SỐ KỸ THUẬT ĐIỆN THOẠI IPHONE 14 PRO MAX 6GB/128GB</h2>
                </div>
                <div className="mt-[40px] mb-[40px]">
                    <h2 className="text-[20px] font-bold">CÁC SẢN PHẨM BẠN QUAN TÂM</h2>
                    <div className="flex">
                        <div className='mr-[12px] bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='mr-[12px] bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='mr-[12px] bg-white rounded-[5px] p-[12px] cursor-pointer'>
                            <img src={ITEM} alt="item" />
                            <div>
                                <p className='font-bold mt-[20px]'>IPhone 14 Pro Max 128GB</p>
                                <div className='mt-[20px] mb-[12px]'>
                                    <span className='mr-[8px] text-[#0066CC] text-[16px] font-bold'>26.990.000₫  </span>
                                    <span className='text-[14px] text-[#86868B] line-through'>34.990.000₫</span>
                                </div>
                            </div>
                        </div>
                        <div className='mr-[12px] bg-white rounded-[5px] p-[12px] cursor-pointer'>
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
                </div>
            </div>
        </Fragment >
    )
}
export default Product