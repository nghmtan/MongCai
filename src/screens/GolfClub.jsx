import React from 'react'
import { Carousel, Avatar, Button } from 'flowbite-react';
import club1 from '../assets/club1.png'
import club2 from '../assets/club2.png'
import club3 from '../assets/club3.png'
import club4 from '../assets/club4.png'
import avatar from '../assets/avatar.png'
import groupofpeople from '../assets/lichsu.png'
import service from '../assets/gioithieu.png'
const GolfClub = () => {
    return (
        <div className='bg-[#e0dede] pb-20 '>
            <div className="h-[600px] ">
                <Carousel>

                    <img src={club1} className=' h-[600px] w-full' style={{ objectFit: 'contain' }} />
                    <img src={club2} className=' h-[600px] w-full' style={{ objectFit: 'contain' }} />
                    <img src={club3} className=' h-[600px] w-full' style={{ objectFit: 'contain' }} />
                    <img src={club4} className=' h-[600px] w-full' style={{ objectFit: 'contain' }} />
                </Carousel>
            </div>
            <div className=' xl:px-96 lg:px-70 md:px-50 px-24 mb-24 mt-10'>
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
            <div className='bg-[#e0dede] text-[#162e48]  px-28'>
                <div className='flex items-center gap-32 mb-20 leading-7'>
                    <img src={service} style={{ width: '45%', height: 'auto', borderRadius: 20 }} ></img>
                    <div style={{ width: '45%' }} className=''>
                        <p className='mb-10 text-3xl font-extrabold'>Giới thiệu</p>
                        <p>Nằm trong khung cảnh hữu tình của Mong Cai, Câu lạc bộ Golf Mong Cai của chúng tôi mang đến trải nghiệm chơi golf không thể so sánh. Kết hợp vẻ đẹp của phía Bắc Việt Nam với cơ sở vật chất golf hàng đầu thế giới, Câu lạc bộ Golf Mong Cai không chỉ là một điểm đến; đó là một trải nghiệm.</p></div>
                </div>
                <div className='flex items-center gap-32 leading-7 mb-20'>
                    <div style={{ width: '45%' }} className=''>
                        <p className='mb-10 text-3xl font-extrabold'>Lịch sử của chúng tôi</p>
                        <p>Được thành lập vào năm 2013, Câu lạc bộ Golf Mong Cai đã phát triển từ những bước đầu khiêm tốn thành một trong những điểm đến golf được kính trọng nhất trong khu vực. Lịch sử của chúng tôi gắn liền với đam mê với trò chơi, cam kết về sự xuất sắc, và sự tôn trọng sâu sắc đối với vẻ đẹp tự nhiên xung quanh.</p></div>
                    <img src={groupofpeople} style={{ width: '45%', height: 'auto', borderRadius: 20 }} ></img>
                </div>
                <div className='text-center xl:px-96 lg:px-70 md:px-50 px-24 ' >

                    <div className='items-center justify-center text-center mt-5'>
                        <Button size="xl" className='text-center justify-center items-center  px-10 text-[white]' style={{ margin: '0 auto', color: 'white' }}>Liên hệ</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GolfClub