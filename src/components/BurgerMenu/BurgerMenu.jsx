import { elastic as Menu } from 'react-burger-menu';
import './BurgerMenu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <div className='hidden lg:block'>
            <Menu right isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}>

                <Link to={"/"} className="menu-item mb-[35px]" onClick={closeMenu} >
                    <i className="fa-solid fa-house-chimney mr-3  w-1/6"></i> TRANG CHỦ
                </Link>

                <Link to="/about" className="menu-item mb-[35px]" onClick={closeMenu}>
                    <i className="fa-solid fa-building mr-3 w-1/6"></i>   VỀ CHÚNG TÔI
                </Link>
                <Link to={"/club"} className="menu-item mb-[35px]" onClick={closeMenu}>
                    <i className="fa-solid fa-golf-ball-tee mr-3 w-1/6"></i>   CLB GOLF
                </Link>
                <Link to={"/contact"} className="menu-item mb-[35px]" onClick={closeMenu} >
                    <i className="fa-solid fa-user-group mr-3 w-1/6"></i>  LIÊN HỆ
                </Link>
                <Link to={"/"} className="menu-item mb-[35px]" onClick={closeMenu}>
                    <i className="fa-solid fa-calendar-days mr-3 w-1/6"></i>  SỰ KIỆN
                </Link>
            </Menu>
        </div>

    );
}

export default BurgerMenu;
