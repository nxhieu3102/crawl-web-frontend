import LOGO from '../../assets/LOGO.png'

const Footer = () => {
    return(
        <div className='bg-[#1d1d1f] flex justify-center pb-[30px]'>
            <div className="w-full max-w-[1200px] flex justify-between items-center">
                <div className="pt-[20px] flex justify-between w-full">
                    <div className="mr-[40px] w-[25%] text-white text-[12px] text-justify">
                        <img src={LOGO} alt='logo' />
                        <p>Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.</p>
                    </div>

                    <div className="mr-[40px] w-[25%] text-white text-[14px] text-justify">
                        <h3>Thông tin</h3>
                        <ul>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Tin tức</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Giới thiệu</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Check IMEI</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Phương thức thanh toán</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Thuê điểm bán lẻ</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Bảo hành và sửa chữa</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Tuyển dụng</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Đánh giá chất lượng, khiếu nại</li>
                        </ul>
                    </div>

                    <div className="mr-[40px] w-[25%] text-white text-[14px] text-justify">
                        <h3>Chính sách</h3>
                        <ul>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Thu mới đổi cũ</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Giao hàng</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Giao hàng(Zalopay)</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Hủy giao dịch</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Đổi trả</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Bảo hành</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Khiếu nại</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Bảo mật thông tin</li>
                        </ul>
                    </div>

                    <div className="mr-[40px] w-[25%] text-white text-[14px] text-justify">
                        <h3>Địa chỉ & liên hệ</h3>
                        <ul>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Tài khoản của tôi</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Đơn đặt hàng</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Hệ thống cửa hàng</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Tìm Store trên google map</li>
                            <li className='text-[10px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Nhánh 1: khu vực Hà Nội và các tỉnh phía bắc</li>
                            <li className='text-[10px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Nhánh 2: khu vực Hồ Chí Minh và các tỉnh phía nam</li>
                            <li className='text-[10px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Nhánh 3: Khiếu nại và góp ý</li>
                            <li className='text-[12px] font-normal mt-[10px] text-[#86868b] cursor-pointer'>Góp ý</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer