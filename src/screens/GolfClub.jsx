import React from 'react'
import { Carousel, Avatar, Button } from 'flowbite-react';
import club1 from '../assets/club1.png'
import club2 from '../assets/club2.png'
import club3 from '../assets/club3.png'
import club4 from '../assets/club4.png'
import avatar from '../assets/avatar.png'
import groupofpeople from '../assets/lichsu.png'
import service from '../assets/gioithieu.png'
import { Link } from 'react-router-dom';
const GolfClub = () => {
    return (
        <div className='bg-[#e0dede] py-20 '>

            <div className=' xl:px-96 lg:px-70 md:px-50 px-12 sm:px-24 '>
                <div className='mb-5'>
                    <p className='text-center italic text-4xl mb-6 font-extrabold'>Câu lạc bộ Golf Móng Cái</p>
                    <hr className="line" style={{
                        width: "35%", /* Adjust the width as needed */
                        margin: '0 auto', /* Center the line horizontally */
                        border: 'none',
                        borderTop: '2px solid #162e48'
                    }} />
                    <p className='text-center mt-6 text-3xl italic mb-5 font-semibold'>Nơi các đại thi hào hội tụ
                    </p>
                    <p className='text-center'>
                        by
                    </p>
                </div>
                <Avatar size={'lg'} img={avatar} rounded>
                    <div className="space-y-1 font-medium dark:text-[#162e48']">
                        <div>{"Quang Anh (Leader)"}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                    </div>
                </Avatar>
            </div>
            <div className=" h-[150px] md:h-[300px] xl:h-[600px] mb-24 mt-10 ">
                <Carousel>

                    <img src={club1} className=' h-[150px] md:h-[300px] xl:h-[600px] w-full' style={{ objectFit: 'contain' }} />
                    <img src={club2} className=' h-[150px] md:h-[300px] xl:h-[600px] w-full' style={{ objectFit: 'contain' }} />
                    <img src={club3} className=' h-[150px] md:h-[300px] xl:h-[600px] w-full' style={{ objectFit: 'contain' }} />
                    <img src={club4} className=' h-[150px] md:h-[300px] xl:h-[600px] w-full' style={{ objectFit: 'contain' }} />
                </Carousel>
            </div>
            <div className='bg-[#e0dede] text-[#162e48] px-7 md:px-14 xl:px-28'>
                <div className='flex items-center gap-8 md:gap-16 xl:gap-32 mb-20 leading-7 flex-col md:flex-row'>
                    <img src={service} className='w-[100%] md:w-[45%]' style={{ borderRadius: 20 }} ></img>
                    <div className='w-[100%] md:w-[45%]'>
                        <p className='mb-10 text-base md:text-xl xl:text-3xl font-extrabold'>Giới thiệu</p>
                        <p className='xl:text-base text-sm'>Nằm trong khung cảnh hữu tình của Mong Cai, Câu lạc bộ Golf Mong Cai của chúng tôi mang đến trải nghiệm chơi golf không thể so sánh. Kết hợp vẻ đẹp của phía Bắc Việt Nam với cơ sở vật chất golf hàng đầu thế giới, Câu lạc bộ Golf Mong Cai không chỉ là một điểm đến; đó là một trải nghiệm.</p></div>
                </div>
                <div className='flex items-center gap-8 md:gap-16 xl:gap-32 leading-7 mb-20 flex-col md:flex-row'>
                    <div className='w-[100%] md:w-[45%]' >
                        <p className='mb-10 text-base md:text-xl xl:text-3xl font-extrabold'>Lịch sử của chúng tôi</p>
                        <p className='xl:text-base text-sm'>Được thành lập vào năm 2013, Câu lạc bộ Golf Mong Cai đã phát triển từ những bước đầu khiêm tốn thành một trong những điểm đến golf được kính trọng nhất trong khu vực. Lịch sử của chúng tôi gắn liền với đam mê với trò chơi, cam kết về sự xuất sắc, và sự tôn trọng sâu sắc đối với vẻ đẹp tự nhiên xung quanh.</p></div>
                    <img src={groupofpeople} className='w-[100%] md:w-[45%]' style={{ borderRadius: 20 }} ></img>
                </div>
                <div className='text-center xl:px-96 lg:px-70 md:px-50 px-24 ' >

                    <div className='items-center justify-center text-center mt-5'>
                        <Link to={"/contact"}>
                            <Button size="xl" className='text-center justify-center items-center  px-10 text-[white]' style={{ margin: '0 auto', color: 'white' }}>Liên hệ</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GolfClub