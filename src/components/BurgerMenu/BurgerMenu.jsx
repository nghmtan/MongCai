import { elastic as Menu } from 'react-burger-menu';
import './BurgerMenu.css';
function BurgerMenu() {
    return (
        <div className='hidden lg:block'>
            <Menu right>

                <a className="menu-item mb-[35px]" href="/">
                    <i className="fa-solid fa-house-chimney mr-3  w-1/6"></i> TRANG CHỦ
                </a>

                <a className="menu-item mb-[35px]" href="/salads">
                    <i className="fa-solid fa-building mr-3 w-1/6"></i>   VỀ CHÚNG TÔI
                </a>
                <a className="menu-item mb-[35px]" href="/salads">
                    <i className="fa-solid fa-golf-ball-tee mr-3 w-1/6"></i>   CLB GOLF
                </a>
                <a className="menu-item mb-[35px]" href="/pizzas">
                    <i className="fa-solid fa-user-group mr-3 w-1/6"></i>  LIÊN HỆ
                </a>
                <a className="menu-item mb-[35px]" href="/desserts">
                    <i className="fa-solid fa-calendar-days mr-3 w-1/6"></i>  SỰ KIỆN
                </a>
            </Menu>
        </div>

    );
}

export default BurgerMenu;
