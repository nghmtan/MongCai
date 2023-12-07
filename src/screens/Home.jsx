
import golfbanner from '../assets/banner.jpg'
import NavBar from '../components/StickyNavBar/StickyNavBar'
import VideoBanner from '../components/VideoBanner/VideoBanner'
import ReadMore from '../components/ReadMore/ReadMore'
import golftours from '../assets/golftours.png'
import golfpackages from '../assets/golfpackages.png'
import hotel from '../assets/hotel.png'
import qualuuniem from '../assets/qualuuniem.png'
import LocationCard from '../components/LocationCard/LocationCard'
import { Button, Carousel } from 'flowbite-react';


import phinhho from '../assets/phinhho.jpg'
import mongcaibanner from '../assets/mongcaibanner.jpg'
import muisavi from '../assets/muisavi.jpg'
import bien from '../assets/bien.jpg'
function Home() {
    return (
        <div>

            <VideoBanner />
            <div className=' bg-[#e0dede] py-24 text-[#162e48] text-center '>
                <p className='text-center italic text-4xl mb-6 font-extrabold'>CHÀO MỪNG ĐẾN VỚI MÓNG CÁI</p>
                <hr className="line" style={{

                    width: "35%", /* Adjust the width as needed */
                    margin: '0 auto', /* Center the line horizontally */
                    border: 'none',
                    borderTop: '2px solid #162e48'
                }} />
                <p className='text-center mt-6 text-3xl italic mb-5 font-semibold'>Khởi nguồn giá trị, định vị tương lai</p>
                <p className='text-2xl italic '>Tạo dựng 1 điểm đến mang những giá trị

                    tốt nhất từ những điều nhỏ nhất</p>
            </div>
            <div style={{ height: 800, position: 'relative', color: 'white' }}>
                <div className="background-image-container " style={{ backgroundImage: `url(${golfbanner})`, height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: 1, color: 'white' }}></div>
                <div className="bg-text " style={{ borderRadius: '30px', border: 'none' }}>
                    <p className='text-center mt-6 text-4xl font-extrabold italic mb-10 '>KHÁM PHÁ DU LỊCH GOLF MÓNG CÁI</p>
                    <p className='text-lg font-normal  italic mb-6 '>Du lịch Golf Móng Cái - nơi chúng tôi không chỉ cung cấp những sân golf hàng đầu, mà còn mang đến cho bạn trải nghiệm đầy đủ với các dịch vụ và tiện ích độc đáo.</p>
                    <p className='text-lg font-normal italic mb-6 '>


                        Tận hưởng sự sang trọng tại các khu nghỉ dưỡng, tham gia vào các khóa học chuyên nghiệp, khám phá văn hóa địa phương thông qua các tour du lịch golf, và trải nghiệm những sự kiện đặc sắc.

                    </p>

                    <p className='text-lg font-normal  italic mb-6 '>

                        Du lịch golf Móng Cái không chỉ là về trò chơi, mà còn về một phong cách sống đẳng cấp và đầy đủ tiện nghi, làm cho chuyến đi của bạn trở thành một kỷ niệm khó quên.</p>
                </div>
            </div>
            <div className='bg-[#e0dede]  p-24'>
                <div className='mb-20'>
                    <p className='text-center italic text-4xl mb-6 font-extrabold'>DỊCH VỤ & TIỆN ÍCH</p>
                    <hr className="line" style={{
                        width: "35%", /* Adjust the width as needed */
                        margin: '0 auto', /* Center the line horizontally */
                        border: 'none',
                        borderTop: '2px solid #162e48'
                    }} />
                    <p className='text-center mt-6 text-3xl italic mb-5 font-semibold'>Duới đây là một số dịch vụ và tiện ích mà chúng tôi cung cấp

                    </p>
                </div>
                <div className='flex justify-between flex-wrap'>
                    <div>
                        <ReadMore image={golftours} />
                        <p className='text-center my-6 text-xl'>Golf Tours</p>
                    </div>
                    <div>
                        <ReadMore image={golfpackages} />
                        <p className='text-center my-6 text-xl'>Gói Golf</p>
                    </div>

                    <div>
                        <ReadMore image={hotel} />
                        <p className='text-center my-6 text-xl'>Khách sạn</p>
                    </div>

                    <div>
                        <ReadMore image={qualuuniem} />
                        <p className='text-center my-6 text-xl'>Quà Lưu Niệm</p>
                    </div>



                </div>
            </div>
            <div className='bg-[#e0dede]  p-24 mt-1'>
                <div className='mb-20'>
                    <p className='text-center italic text-4xl mb-6 font-extrabold'>ĐỊA ĐIỂM</p>
                    <hr className="line" style={{
                        width: "35%", /* Adjust the width as needed */
                        margin: '0 auto', /* Center the line horizontally */
                        border: 'none',
                        borderTop: '2px solid #162e48'
                    }} />
                    <p className='text-center mt-6 text-3xl italic mb-5 font-semibold'>Trải nghiệm du lịch độc đáo tại “Móng Cái”

                    </p>
                </div>
                <div className='flex justify-evenly'>
                    <LocationCard
                        imageSrc={bien}
                        title="Biển Trà Cổ"
                        description="Điểm đến quyến rũ với bờ cát trắng mịn và sóng biển êm đềm, tạo nên bức tranh hùng vĩ giữa thiên nhiên hoang sơ ở Việt Nam..."
                    />
                    <LocationCard
                        imageSrc={phinhho}
                        title="Phình Hồ"
                        description="Viên ngọc quý ở vùng biên Móng Cái. Hòa mình trong vẻ đẹp yên bình của  vùng biển Đông Bắc,  là điểm đến giải nhiệt cho những ngày hè oi nóng..."
                    />
                    <LocationCard
                        imageSrc={muisavi}
                        title="Mũi Sa Vĩ
              "
                        description="Với bờ biển dài, cát trắng mịn và khung cảnh biển xanh bao la, một điểm đến hoàn hảo cho những chuyến phiêu lưu và thư giãn..."
                    />
                </div>

            </div>
            <div className='mt-1 p-24 bg-[#e0dede] '>
                <div className='mb-20'>
                    <p className='text-center italic text-4xl mb-6 font-extrabold'>TIN TỨC & SỰ KIỆN</p>
                    <hr className="line" style={{
                        width: "35%", /* Adjust the width as needed */
                        margin: '0 auto', /* Center the line horizontally */
                        border: 'none',
                        borderTop: '2px solid #162e48'
                    }} />
                    <p className='text-center mt-6 text-3xl italic mb-5 font-semibold'>Tin nổi bật hàng ngày

                    </p>
                </div>
                <div className='   gap-16  flex items-center '>

                    <div className="h-[540px] w-[50%]">
                        <Carousel>
                            <img src={mongcaibanner} alt="..." />
                            <img src={mongcaibanner} alt="..." />
                            <img src={mongcaibanner} alt="..." />
                            <img src={mongcaibanner} alt="..." />
                            <img src={mongcaibanner} alt="..." />
                        </Carousel>
                    </div>
                    <div className='bg-gray-200 w-[45%] flex flex-col gap-10 ' style={{ borderRadius: 10 }}>
                        <div className='flex gap-12 justify-center'>
                            <img style={{ borderRadius: 10 }} src={golftours} className='w-[170px] h-[170px]' alt="" />
                            <div className='relative'>
                                <p className='text-xl font-bold description'>Rộ thông tin Jon Rahm chuẩn bị gia nhập LIV Golf</p>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor nobis neque volu!</p>
                                <Button style={{
                                    position: 'absolute'
                                    ,
                                    bottom: 0,
                                    right: 10
                                }}> {"Đọc Tiếp >>"}</Button>
                            </div>
                        </div>
                        <div className='flex gap-12'>
                            <img style={{ borderRadius: 10 }} src={golftours} className='w-[170px] h-[170px]' alt="" />
                            <div className='relative'>
                                <p className='text-xl font-bold  description'>Rộ thông tin Jon Rahm chuẩn bị gia nhập LIV Golf</p>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor nobis neque volu!</p>
                                <Button style={{
                                    position: 'absolute'
                                    ,
                                    bottom: 0,
                                    right: 10
                                }}> {"Đọc Tiếp >>"}</Button>
                            </div>
                        </div>
                        <div className='flex gap-12'>
                            <img style={{ borderRadius: 10 }} src={golftours} className='w-[170px] h-[170px]' alt="" />
                            <div className='relative'>
                                <p className='text-xl font-bold description '>Rộ thông tin Jon Rahm chuẩn bị gia nhập LIV Golf</p>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor nobis neque volu!</p>
                                <Button style={{
                                    position: 'absolute'
                                    ,
                                    bottom: 0,
                                    right: 10
                                }}> {"Đọc Tiếp >>"}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home
