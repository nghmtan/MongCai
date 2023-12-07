import React from 'react'
import service from '../assets/service.png'
import { Button } from 'flowbite-react';
import groupofpeople from '../assets/groupofpeople.png'
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className='bg-[#e0dede] text-[#162e48] py-10 px-28'>
            <div className='text-center xl:px-96 lg:px-70 md:px-50 px-24 mb-24'>
                <p className=' mb-5 text-5xl font-extrabold '>Về Chúng Tôi</p>
                <p className='leading-7'>Chúng tôi đam mê golf, dịch vụ và đạo đức và mong muốn trở thành đối tác đáng tin cậy của bạn trong mỗi golf trip. Chúng tôi tin tưởng vào việc tạo ra những trải nghiệm du lịch không chỉ là hành trình, mà còn là sự đắm chìm sâu vào trái tim di sản phong phú và lối sống sôi động của Móng Cái.</p>
            </div>
            <div className='flex items-center gap-32 mb-20 leading-7'>
                <img src={service} style={{ width: '45%', height: 'auto', borderRadius: 20 }} ></img>
                <div style={{ width: '45%' }} className=''>
                    <p className='mb-10 text-3xl font-extrabold'>Chúng Tôi Cung Cấp Gì?</p>
                    <p>Chúng tôi hết lòng nhận trách nhiệm của mình trong việc mang đến cho bạn trải nghiệm chơi golf vượt trội, đáp ứng mong đợi của bạn trong mọi khía cạnh của chuyến đi, từ hỗ trợ đến trải nghiệm trên sân. Ngoài ra, từ bãi biển yên bình của Trà Cổ đến khu chợ nhộn nhịp của thành phố, chúng tôi cung cấp cái nhìn sâu sắc và lời khuyên để bạn trải nghiệm Móng Cái như một người dân địa phương.</p></div>
            </div>
            <div className='flex items-center gap-32 leading-7 mb-20'>
                <div style={{ width: '45%' }} className=''>
                    <p className='mb-10 text-3xl font-extrabold'>Gặp Gỡ Đội Ngũ của Chúng Tôi.</p>
                    <p>Chúng tôi nỗ lực hết mình vì sự hài lòng và cải tiến của khách hàng, vì vậy chúng tôi không ngừng tìm kiếm cơ hội để cải tiến và phát triển dịch vụ của mình.
                        <br></br>
                        Hãy liên hệ với chúng tôi nếu bạn tìm kiếm một điểm đến chơi gôn phù hợp với nhu cầu và sở thích của bạn cũng như hỗ trợ bạn trong việc thiết kế chuyến đi chơi golf của mình. Chúng tôi đảm bảo với bạn một hành trình chơi golf đáng chú ý.</p></div>
                <img src={groupofpeople} style={{ width: '45%', height: 'auto', borderRadius: 20 }} ></img>
            </div>
            <div className='text-center xl:px-96 lg:px-70 md:px-50 px-24 ' >
                <p className=' mb-5 text-5xl font-extrabold '>Liên hệ ngay</p>
                <div>
                    <p>Hãy liên hệ với chúng tôi nếu bạn tìm kiếm một điểm đến chơi gôn phù hợp với nhu cầu và sở thích của bạn cũng như hỗ trợ bạn trong việc thiết kế chuyến đi chơi golf của mình. Chúng tôi đảm bảo với bạn một hành trình chơi golf đáng chú ý.</p>
                </div>
                <div className=' items-center justify-center text-center mt-5'>
                    <Link to={"/contact"}>
                        <Button size="xl" className='text-center justify-center items-center  px-10 text-[white]' style={{ margin: '0 auto', color: 'white' }}>Liên hệ</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs