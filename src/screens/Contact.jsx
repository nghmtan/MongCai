

import PriceCard from '../components/PriceCard/PriceCard';
const Contact = () => {
    return (
        <div className='bg-[#e0dede] py-20'>
            <div className='text-center xl:px-96 lg:px-70 md:px-50 px-24 mb-24'>
                <p className=' mb-5 text-5xl font-extrabold '>Về các gói du lịch</p>
                <p className='leading-7'>Chúng tôi đam mê golf, dịch vụ và đạo đức và mong muốn trở thành đối tác đáng tin cậy của bạn trong mỗi golf trip. Chúng tôi tin tưởng vào việc tạo ra những trải nghiệm du lịch không chỉ là hành trình, mà còn là sự đắm chìm sâu vào trái tim di sản phong phú và lối sống sôi động của Móng Cái.</p>
            </div>
            <div className=' flex justify-evenly'>


                <PriceCard price={'200,000'} type={1} plan={'Gói cơ bản'} />
                <PriceCard price={'500,000'} type={2} plan={'Gói VIP'} />
                <PriceCard price={'800,000'} type={3} plan={'Gói Luxury'} />
            </div>
        </div>
    )
}

export default Contact