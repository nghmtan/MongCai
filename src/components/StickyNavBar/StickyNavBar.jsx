import img from '../../assets/mc1.png'

const NavBar = () => {

    return (
        <nav>
            <div
                className='bg-sky-950 h-[42px]'></div>
            <div className='flex flex-row bg-slate-100 text-black  h-[120px] px-20 py-20 items-center text-2xl justify-between' style={{ boxShadow: '0px 20px 25px 7px rgba(0,0,0,0.1)' }}>

                <div className='flex flex-row gap-16 justify-center items-center font-bold'>
                    <img src={img} className='w-[140px] h-auto ' />
                    <p>TRANG CHỦ</p>
                    <p>VỀ CHÚNG TÔI</p>
                    <p>CLB GOLF</p>
                    <p>LIÊN HỆ</p>
                    <p>SỰ KIỆN</p>
                </div>


            </div>

        </nav >

    );
};

export default NavBar;
